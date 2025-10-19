namespace VfxCalculator.Models
{
    public class FxResponseModel
    {
        public string ConversionRate { get; set; } = string.Empty;
        public string DestinationAmount { get; set; } = string.Empty;
        public string RateProductCode { get; set; } = string.Empty;
        public string MarkupRateApplied { get; set; } = string.Empty;
        public string SourceAmountWithoutMarkup { get; set; } = string.Empty;
        public AcquirerDetailsResponse AcquirerDetails { get; set; } = new AcquirerDetailsResponse();
    }

    public class AcquirerDetailsResponse
    {
        public SettlementResponse Settlement { get; set; } = new SettlementResponse();
    }

    public class SettlementResponse
    {
        public string CurrencyCode { get; set; } = string.Empty;
        public string Amount { get; set; } = string.Empty;
        public string ConversionRate { get; set; } = string.Empty;
    }
}