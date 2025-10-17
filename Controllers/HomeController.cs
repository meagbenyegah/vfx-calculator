using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VfxCalculator.Models;

namespace VfxCalculator.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        // Serve the React SPA
        return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "dist", "index.html"), "text/html");
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
