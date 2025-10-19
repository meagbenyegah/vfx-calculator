using System.Collections.Generic;

namespace VfxCalculator.Models
{
    public class CurrencyModel
    {
        public string Name { get; set; } = string.Empty;
        public string Short_Name { get; set; } = string.Empty;
        public string Code { get; set; } = string.Empty;
    }

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
        public List<CurrencyModel> CurrencyList { get; set; } = new List<CurrencyModel>();
    }
}