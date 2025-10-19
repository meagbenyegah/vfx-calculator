namespace VfxCalculator.Models
{
    public class VisaExchangeRateApiConfig
    {
        public string BaseUrl { get; set; } = string.Empty;
        public string FxPath { get; set; } = string.Empty;
        public string HelloWorldPath { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string DigiCertGlobalRootCA { get; set; } = string.Empty;
        public string CertPath { get; set; } = string.Empty;
        public string CertPassword { get; set; } = string.Empty;
    }

    public class AppConfig
    {
        public VisaExchangeRateApiConfig VisaExchangeRateApi { get; set; } = new VisaExchangeRateApiConfig();
    }
}