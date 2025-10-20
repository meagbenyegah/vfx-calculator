using Microsoft.AspNetCore.Mvc;

namespace VfxCalculator.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ApiController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new { message = "VFX Calculator API is running!", timestamp = DateTime.UtcNow });
    }

    [HttpGet("health")]
    public IActionResult Health()
    {
        return Ok(new { status = "healthy", timestamp = DateTime.UtcNow });
    }

    [HttpPost("calculate-exchange-rate")]
    public IActionResult CalculateExchangeRate([FromBody] ExchangeRateRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            var result = CalculateRate(request);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { error = "Calculation failed", message = ex.Message });
        }
    }

    private ExchangeRateResult CalculateRate(ExchangeRateRequest request)
    {
        // Mock exchange rate - in a real app, this would come from a financial data provider
        var baseRate = GetExchangeRate(request.FromCurrency, request.ToCurrency);
        var markup = 0.025; // 2.5% Visa markup
        var bankFeeDecimal = request.BankFee / 100;

        var finalRate = baseRate * (1 + markup);
        var convertedAmount = request.Amount * finalRate;
        var feeAmount = convertedAmount * bankFeeDecimal;
        var totalAmount = convertedAmount + feeAmount;

        return new ExchangeRateResult
        {
            FromAmount = request.Amount,
            FromCurrency = request.FromCurrency,
            ToCurrency = request.ToCurrency,
            BaseRate = baseRate,
            FinalRate = finalRate,
            Markup = markup * 100,
            ConvertedAmount = convertedAmount,
            FeeAmount = feeAmount,
            TotalAmount = totalAmount,
            BankFee = request.BankFee,
            TransactionDate = request.TransactionDate
        };
    }

    private double GetExchangeRate(string from, string to)
    {
        // Mock exchange rates - in production, this would come from a financial data API
        var rates = new Dictionary<string, double>
        {
            ["USD-GHS"] = 12.50,
            ["USD-EUR"] = 0.85,
            ["USD-GBP"] = 0.73,
            ["USD-NGN"] = 760.00,
            ["USD-CAD"] = 1.35,
            ["USD-AUD"] = 1.52,
            ["USD-JPY"] = 149.50,
            ["USD-CNY"] = 7.25,
            ["USD-INR"] = 83.20,
            ["EUR-USD"] = 1.18,
            ["GBP-USD"] = 1.37,
            ["GHS-USD"] = 0.08
        };

        var key = $"{from}-{to}";
        var reverseKey = $"{to}-{from}";

        if (rates.ContainsKey(key))
        {
            return rates[key];
        }
        else if (rates.ContainsKey(reverseKey))
        {
            return 1.0 / rates[reverseKey];
        }
        else
        {
            return 1.0; // Default rate if not found
        }
    }
}

public class ExchangeRateRequest
{
    public double Amount { get; set; }
    public string FromCurrency { get; set; } = "";
    public string ToCurrency { get; set; } = "";
    public string TransactionDate { get; set; } = "";
    public double BankFee { get; set; }
}

public class ExchangeRateResult
{
    public double FromAmount { get; set; }
    public string FromCurrency { get; set; } = "";
    public string ToCurrency { get; set; } = "";
    public double BaseRate { get; set; }
    public double FinalRate { get; set; }
    public double Markup { get; set; }
    public double ConvertedAmount { get; set; }
    public double FeeAmount { get; set; }
    public double TotalAmount { get; set; }
    public double BankFee { get; set; }
    public string TransactionDate { get; set; } = "";
}
