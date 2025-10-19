namespace VfxCalculator.Models
{
    public class FxRequestModel
    {
        public AcquirerDetails AcquirerDetails { get; set; } = new AcquirerDetails();
        public string RateProductCode { get; set; } = string.Empty;
        public string MarkupRate { get; set; } = string.Empty;
        public string DestinationCurrencyCode { get; set; } = string.Empty;
        public string SourceAmount { get; set; } = string.Empty;
        public string SourceCurrencyCode { get; set; } = string.Empty;
    }

    public class AcquirerDetails
    {
        public int Bin { get; set; }
        public Settlement Settlement { get; set; } = new Settlement();
    }

    public class Settlement
    {
        public string CurrencyCode { get; set; } = string.Empty;
    }
}