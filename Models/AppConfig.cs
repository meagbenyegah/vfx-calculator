using System.Collections.Generic;

namespace VfxCalculator.Models
{
    public class CurrencyModel
    {
        public string Name { get; set; } = string.Empty;
        public string ShortName { get; set; } = string.Empty;
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
		public AcquirerDetailsConfig AcquirerDetails { get; set; } = new AcquirerDetailsConfig();
		public string MarkupRate { get; set; }
	}

	public class AcquirerDetailsConfig
	{
		public int Bin { get; set; }
		public SettlementConfig Settlement { get; set; } = new SettlementConfig();
	}

	public class SettlementConfig
	{
		public string CurrencyCode { get; set; }
	}

	public class AppConfig
    {
        public VisaExchangeRateApiConfig VisaExchangeRateApi { get; set; } = new VisaExchangeRateApiConfig();
        public List<CurrencyModel> CurrencyList { get; set; } = new List<CurrencyModel>();
    }
}