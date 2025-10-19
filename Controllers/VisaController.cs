using Microsoft.AspNetCore.Mvc;
using VfxCalculator.Models;
using VfxCalculator.Services;
using System.Threading.Tasks;

namespace VfxCalculator.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VisaController : ControllerBase
    {
        private readonly VisaFXService _visaFXService;

        public VisaController(VisaFXService visaFXService)
        {
            _visaFXService = visaFXService;
        }

        // GET: api/visa
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { message = "API is working!" });
        }

        // GET: api/visa/hello-world
        [HttpGet("hello-world")]
        public async Task<ActionResult<ApiResponse<HelloWorldResponse>>> HelloWorld()
        {
            var result = await _visaFXService.HelloWorld();
            return Ok(result);
        }

        // POST: api/visa/fx-rate
        [HttpPost("fx-rate")]
        public async Task<ActionResult<ApiResponse<FxResponseModel>>> GetFxRate([FromBody] FxRequestModel request)
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
    }
}