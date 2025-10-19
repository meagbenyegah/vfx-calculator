using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Security.Authentication;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.Json;
using VfxCalculator.Models;
using Serilog;

namespace VfxCalculator.Services
{
    /// <summary>
    /// Service for Visa FX API operations.
    /// </summary>
    public class VisaFXService
    {
        private readonly HttpClient _httpClient;
        private readonly VisaExchangeRateApiConfig _config;

        public VisaFXService(IOptions<AppConfig> appConfigOptions)
        {
            _config = appConfigOptions.Value.VisaExchangeRateApi;

            // Certificate setup
            if (!File.Exists(_config.CertPath))
                throw new FileNotFoundException($"Client certificate file not found: {_config.CertPath}");

            var clientCert = new X509Certificate2(
                _config.CertPath,
                _config.CertPassword,
                X509KeyStorageFlags.MachineKeySet | X509KeyStorageFlags.Exportable);

            var handler = new HttpClientHandler
            {
                SslProtocols = SslProtocols.Tls12
            };
            handler.ClientCertificates.Add(clientCert);

            // Custom CA bundle
            if (!string.IsNullOrWhiteSpace(_config.DigiCertGlobalRootCA))
            {
                if (File.Exists(_config.DigiCertGlobalRootCA))
                {
                    var customRoots = LoadAllPemCertificates(_config.DigiCertGlobalRootCA);
                    handler.ServerCertificateCustomValidationCallback = (req, cert, chain, errors) =>
                    {
                        if (cert is null) return false;
                        using var cert2 = new X509Certificate2(cert);
                        using var customChain = new X509Chain
                        {
                            ChainPolicy =
                            {
                                RevocationMode = X509RevocationMode.NoCheck,
                                TrustMode = X509ChainTrustMode.CustomRootTrust,
                                VerificationFlags = X509VerificationFlags.NoFlag
                            }
                        };
                        foreach (var root in customRoots)
                            customChain.ChainPolicy.CustomTrustStore.Add(root);
                        return customChain.Build(cert2);
                    };
                }
            }

            _httpClient = new HttpClient(handler)
            {
                BaseAddress = new Uri(_config.BaseUrl, UriKind.Absolute),
                Timeout = TimeSpan.FromSeconds(30)
            };

            // Basic Auth
            if (!string.IsNullOrEmpty(_config.Username))
            {
                var token = Convert.ToBase64String(Encoding.UTF8.GetBytes($"{_config.Username}:{_config.Password}"));
                _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", token);
            }
        }

        // Helper: Load PEM certificates
        private static List<X509Certificate2> LoadAllPemCertificates(string pemPath)
        {
            var certs = new List<X509Certificate2>();
            var pem = File.ReadAllText(pemPath);
            var blocks = pem.Split("-----END CERTIFICATE-----");
            foreach (var block in blocks)
            {
                var trimmed = block.Trim();
                if (string.IsNullOrEmpty(trimmed)) continue;
                var certText = trimmed + "\n-----END CERTIFICATE-----";
                var certBytes = Convert.FromBase64String(
                    certText
                        .Replace("-----BEGIN CERTIFICATE-----", "")
                        .Replace("-----END CERTIFICATE-----", "")
                        .Replace("\r", "")
                        .Replace("\n", "")
                        .Trim());
                certs.Add(new X509Certificate2(certBytes));
            }
            return certs;
        }

        public async Task<ApiResponse<HelloWorldResponse>> HelloWorld()
        {
            var url = _config.HelloWorldPath;
            Log.Information("Sending GET request to URL: {Url}", url);
            try
            {
                var response = await _httpClient.GetAsync(url);
                var json = await response.Content.ReadAsStringAsync();

                Log.Information("Received response from URL: {Url} | Status: {StatusCode} | Body: {Body}", url, response.StatusCode, json);

                if (!response.IsSuccessStatusCode)
                {
                    return new ApiResponse<HelloWorldResponse>
                    {
                        ResponseCode = ((int)response.StatusCode).ToString(),
                        ResponseMessage = $"Error: {response.StatusCode} - {json}",
                        Result = null
                    };
                }

                var result = JsonSerializer.Deserialize<HelloWorldResponse>(json, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                if (result != null)
                {
                    result.Timestamp = DateTime.UtcNow.ToString("o");
                }

                return new ApiResponse<HelloWorldResponse>
                {
                    ResponseCode = "00",
                    ResponseMessage = "HelloWorld call successful",
                    Result = result
                };
            }
            catch (Exception ex)
            {
                Log.Error(ex, "Exception during GET request to URL: {Url}", url);
                return new ApiResponse<HelloWorldResponse>
                {
                    ResponseCode = "99",
                    ResponseMessage = $"Exception: {ex.Message}",
                    Result = null
                };
            }
        }

        public async Task<ApiResponse<FxResponseModel>> GetFxRate(FxRequestModel request)
        {
            var url = _config.FxPath;
            var requestBody = JsonSerializer.Serialize(request);
            Log.Information("Sending POST request to URL: {Url} | Body: {Body}", url, requestBody);
            try
            {
                var response = await _httpClient.PostAsJsonAsync(url, request);
                var json = await response.Content.ReadAsStringAsync();

                Log.Information("Received response from URL: {Url} | Status: {StatusCode} | Body: {Body}", url, response.StatusCode, json);

                if (!response.IsSuccessStatusCode)
                {
                    return new ApiResponse<FxResponseModel>
                    {
                        ResponseCode = ((int)response.StatusCode).ToString(),
                        ResponseMessage = $"Error: {response.StatusCode} - {json}",
                        Result = null
                    };
                }

                var result = JsonSerializer.Deserialize<FxResponseModel>(json, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                return new ApiResponse<FxResponseModel>
                {
                    ResponseCode = "00",
                    ResponseMessage = "FX Rate call successful",
                    Result = result
                };
            }
            catch (Exception ex)
            {
                Log.Error(ex, "Exception during POST request to URL: {Url} | Body: {Body}", url, requestBody);
                return new ApiResponse<FxResponseModel>
                {
                    ResponseCode = "99",
                    ResponseMessage = $"Exception: {ex.Message}",
                    Result = null
                };
            }
        }
    }
}