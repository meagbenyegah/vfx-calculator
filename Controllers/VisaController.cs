using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using VfxCalculator.Models;
using VfxCalculator.Services;

namespace VfxCalculator.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VisaController : ControllerBase
    {
        private readonly VisaFXService _visaFXService;
		private readonly AppConfig _appConfig;

		public VisaController(VisaFXService visaFXService, IOptions<AppConfig> appConfigOptions)
        {
            _visaFXService = visaFXService;
			_appConfig = appConfigOptions.Value;
		}

        // GET: api/visa
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { message = "API is working!" });
        }

        // GET: api/visa/hello-world
        [HttpGet("hello-world")]
        public async Task<IActionResult> HelloWorld()
        {
            var result = await _visaFXService.HelloWorld();
            return Ok(result);
        }

        // POST: api/visa/fx-rate
        [HttpPost("fx-rate")]
        public async Task<IActionResult> GetFxRate([FromBody] FxRequestModel request)
        {
            request.AcquirerDetails = new AcquirerDetails
            {
                Bin = 408999,
                Settlement = new Settlement
                {
                    CurrencyCode = request.SourceCurrencyCode
                }
            };
            request.RateProductCode = "A";
            request.MarkupRate = "1";
            var result = await _visaFXService.GetFxRate(request);
            return Ok(result);
        }

		// GET: api/visa/currencies
		[HttpGet("currencies")]
		public IActionResult GetCurrencies()
		{
			var result = new ApiResponse<List<CurrencyModel>>
			{
				ResponseCode = "00",
				ResponseMessage = "Currency list fetched successfully",
				Result = _appConfig.CurrencyList
			};
			return Ok(result);
		}
	}
}