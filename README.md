# VFX Calculator

A modern Exchange Rate Calculator application built with ASP.NET Core MVC. This application provides real-time currency conversion calculations with a professional, user-friendly interface using traditional server-side rendering with interactive JavaScript.

## 🏗️ Architecture

This project uses a traditional MVC architecture:
- **Backend**: ASP.NET Core 8.0 MVC
- **Frontend**: Server-side rendered Razor views with vanilla JavaScript
- **Styling**: Custom CSS with responsive design
- **API**: RESTful endpoints for calculations

## 🚀 Tech Stack

### Backend
- **ASP.NET Core 8.0** - MVC framework with Web API
- **C#** - Primary programming language
- **Razor Pages** - Server-side templating
- **Controllers** - MVC controllers and API endpoints

### Frontend
- **HTML/CSS** - Custom responsive styling
- **Vanilla JavaScript** - Interactive functionality
- **Razor Views** - Server-side rendered templates
- **CSS Grid/Flexbox** - Modern layout techniques

## 📁 Project Structure

```
vfx-calculator/
├── Controllers/           # ASP.NET Core MVC controllers
│   ├── HomeController.cs  # Main page controller
│   └── ApiController.cs   # API endpoints for calculations
├── Views/                # Razor view templates
│   ├── Home/
│   │   └── Index.cshtml   # Exchange Rate Calculator page
│   └── Shared/           # Shared layout and partial views
├── Models/               # Data models and view models
├── wwwroot/              # Static files (CSS, JS, images)
│   ├── css/
│   │   └── site.css      # Application styles
│   ├── js/
│   │   └── exchange-calculator.js  # Calculator functionality
│   └── images/           # Logo and background images
├── Program.cs            # ASP.NET Core startup configuration
└── VfxCalculator.csproj  # Project file
```

## 🛠️ Development Setup

### Prerequisites
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vfx-calculator
   ```

2. **Run the application**
   ```bash
   dotnet run
   ```

3. **Access the application**
   - Navigate to `https://localhost:5001` or `http://localhost:5000`
   - The Exchange Rate Calculator will be available immediately

## 🚀 Running the Application

### Development Mode
```bash
# Start the application
dotnet run
# Application will be available at: https://localhost:5001 or http://localhost:5000
```

### Development with Hot Reload
```bash
# Start with automatic restart on file changes
dotnet watch run
```

### Production Mode
```bash
# Build the application
dotnet build --configuration Release

# Run in production mode
dotnet run --configuration Release
```

## 🔨 Building the Application

### Build Commands
```bash
# Build the project
dotnet build

# Build in Release mode
dotnet build --configuration Release

# Clean build artifacts
dotnet clean

# Run tests (when available)
dotnet test
```

### Development Workflow
```bash
# Start development with hot reload
dotnet watch run     # Auto-restart on file changes

# Build the project
dotnet build         # Build without running

# Run the application
dotnet run           # Start the server
```

## 💱 Exchange Rate Calculator

The application features a comprehensive Exchange Rate Calculator with the following capabilities:

### Features
- **146+ Currencies**: Support for major, minor, and exotic world currencies
- **Search Functionality**: Type to search through currencies with featured section
- **Real-time Validation**: Form validation with helpful error messages
- **Interactive Help**: Info popovers explaining each field
- **Currency Swap**: One-click exchange between From/To currencies
- **Date Management**: Transaction date with 12-month validation
- **Bank Fee Configuration**: Editable bank fee percentage
- **Exchange Rate Calculation**: Dummy calculation with realistic rates

### Supported Currencies
- **Major**: USD, EUR, GBP, JPY, CHF, CAD, AUD, NZD
- **Asian**: CNY, HKD, SGD, KRW, TWD, THB, MYR, IDR, PHP, VND, INR, PKR, BDT, LKR, NPR
- **European**: SEK, NOK, DKK, PLN, CZK, HUF, RON, BGN, HRK, RSD, UAH, RUB, BYN, MDL, GEL, AMD, AZN, KZT, KGS, TJS, UZS, TMT
- **Middle Eastern & African**: AED, SAR, QAR, KWD, BHD, OMR, JOD, LBP, ILS, EGP, MAD, TND, DZD, LYD, ETB, KES, UGX, TZS, ZAR, NGN, GHS, XOF, XAF
- **American**: MXN, BRL, ARS, CLP, COP, PEN, UYU, VES, BOB, PYG, GTQ, HNL, NIO, CRC, PAB, DOP, JMD, TTD, BBD, XCD
- **Additional**: ISK, MKD, ALL, BAM, MNT, LAK, KHR, MMK, BND, FJD, PGK, SBD, TOP, VUV, WST, XPF, AWG, BMD, KYD, BZD, GYD, SRD, BWP, SZL, LSL, NAD, MWK, ZMW, BIF, DJF, KMF, RWF, SCR, SOS, AOA, CDF, GMD, GNF, LRD, MRO, SLL, STD

### Usage
1. **Enter Amount**: Input the transaction amount in the original currency
2. **Select Currencies**: Choose From and To currencies using the searchable dropdowns
3. **Set Date & Fee**: Configure transaction date and bank fee percentage
4. **Calculate**: Get the exchange rate and converted amount
5. **View Results**: See detailed conversion information with mark-up percentage

## 🌐 API Endpoints

The backend provides the following API endpoints:

- `GET /api/api` - Basic API information
- `GET /api/api/health` - Health check endpoint
- `POST /api/api/calculate-exchange-rate` - Exchange rate calculation

### Example API Responses

#### Health Check
```json
{
  "status": "healthy",
  "timestamp": "2025-10-20T10:30:00Z"
}
```

#### Exchange Rate Calculation
```json
{
  "fromAmount": 100,
  "fromCurrency": "USD",
  "toCurrency": "GHS",
  "baseRate": 12.50,
  "finalRate": 12.8125,
  "markup": 2.5,
  "convertedAmount": 1281.25,
  "feeAmount": 25.63,
  "totalAmount": 1306.88,
  "bankFee": 2.0
}
```

## 🎨 Frontend Features

### Exchange Rate Calculator
- **Professional UI**: Clean, modern interface matching financial application standards
- **Comprehensive Currency Support**: 10+ major world currencies with dropdown selection
- **Real-time Validation**: Client-side form validation with error messaging
- **Interactive Help**: Info popovers with detailed explanations for each field
- **Currency Swap**: One-click currency exchange functionality
- **Date & Fee Management**: Editable transaction date and bank fee with toggle interface
- **Exchange Rate Calculation**: Server-side calculation engine with realistic rates
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### Technical Features
- **Server-Side Rendering**: Fast initial page loads with Razor views
- **Progressive Enhancement**: JavaScript adds interactivity to working HTML forms
- **Modern CSS**: Custom CSS with Grid, Flexbox, and CSS custom properties
- **Vanilla JavaScript**: No framework dependencies, lightweight and fast
- **API Integration**: Fetch API for server communication
- **Form Management**: Native HTML5 validation enhanced with JavaScript
- **Accessibility**: Semantic HTML with proper ARIA attributes
- **Performance**: Minimal JavaScript bundle, optimized CSS

## 🔧 Build Process

The project uses a simple .NET build process.

### Build Flow
1. **Development**: Single ASP.NET Core application serves everything
2. **Production**: Static assets served from wwwroot/
3. **Deployment**: Standard .NET deployment process

### Build Commands

#### Build
```bash
# Build the application
dotnet build

# Build in Release mode
dotnet build --configuration Release
```

#### Publishing for Production
```bash
# Publish the entire application
dotnet publish -c Release -o ./publish

# The publish folder will contain:
# - All ASP.NET Core files
# - Static assets (CSS, JS, images)
# - All necessary dependencies
```

### Build Output Locations
- **Application**: `bin/Release/net8.0/`
- **Published**: `./publish/` (when using dotnet publish)
- **Static Assets**: `wwwroot/` (CSS, JS, images)

## 🚀 Deployment

The application is designed for easy deployment:

1. **Build the project**: `dotnet publish -c Release`
2. **Deploy the output**: The published folder contains everything needed
3. **Configure web server**: Point to the published folder

## 📝 Development Notes

### Exchange Rate Calculator Features
- **Currency Data**: Located in `wwwroot/js/exchange-calculator.js`
- **Calculation Logic**: Implemented in `Controllers/ApiController.cs`
- **Form Validation**: Client-side JavaScript validation
- **UI Styling**: Custom CSS in `wwwroot/css/site.css`

### Adding New API Endpoints
1. Add new methods to `Controllers/ApiController.cs`
2. Update JavaScript to call the new endpoints
3. Add proper request/response models

### Adding New Pages
1. Create new controller actions in `Controllers/HomeController.cs`
2. Add corresponding Razor views in `Views/Home/`
3. Update routing as needed

### Styling
- Edit `wwwroot/css/site.css` for global styles
- Use CSS custom properties for theming
- Follow responsive design patterns
- Maintain accessibility standards

### JavaScript Enhancement
- Keep functionality progressive (works without JS)
- Use modern JavaScript features (ES6+)
- Handle errors gracefully
- Provide user feedback for async operations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the application thoroughly
5. Submit a pull request

## 📄 License

[Add your license information here]

## 🆘 Support

For questions or issues:
1. Review the API documentation above
2. Check the source code documentation
3. Create an issue in the repository
