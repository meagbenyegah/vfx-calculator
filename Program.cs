using Serilog;
using VfxCalculator.Models;
using VfxCalculator.Services;

var builder = WebApplication.CreateBuilder(args);

Log.Logger = new LoggerConfiguration()
	.MinimumLevel.Information()
	.WriteTo.Console()
	.WriteTo.File(
		path: "Logs/visa-fx-.log",
		rollingInterval: RollingInterval.Day,
		retainedFileCountLimit: 180, // 6 months retention
		fileSizeLimitBytes: 10 * 1024 * 1024, // 10 MB per file
		shared: true,
		flushToDiskInterval: TimeSpan.FromSeconds(1))
	.ReadFrom.Configuration(builder.Configuration)
	.Enrich.FromLogContext()
	.CreateLogger();

builder.Host.UseSerilog();

// Add services to the container.
builder.Services.Configure<AppConfig>(builder.Configuration);
builder.Services.AddScoped<VisaFXService>();
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
