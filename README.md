# VFX Calculator

A modern Exchange Rate Calculator application built with ASP.NET Core backend and React frontend. This application provides real-time currency conversion calculations with a professional, user-friendly interface.

## 🏗️ Architecture

This project uses a hybrid architecture with:
- **Backend**: ASP.NET Core 8.0 Web API
- **Frontend**: React 19 SPA with modern tooling
- **Build System**: Integrated build process for seamless deployment

## 🚀 Tech Stack

### Backend
- **ASP.NET Core 8.0** - Web API framework
- **C#** - Primary programming language
- **Controllers** - RESTful API endpoints

### Frontend
- **React 19** - Latest React with concurrent features
- **Vite 7** - Fast build tool and dev server
- **TanStack Router** - Type-safe file-based routing
- **TanStack Query** - Server state management with caching
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **TypeScript** - Type safety and better developer experience
- **Bun** - Fast package manager and runtime
- **Biome** - Fast formatter and linter
- **Husky** - Git hooks for code quality

## 📁 Project Structure

```
vfx-calculator/
├── Controllers/           # ASP.NET Core API controllers
│   ├── HomeController.cs  # SPA serving controller
│   └── ApiController.cs   # API endpoints
├── ClientApp/            # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   │   ├── ui/       # shadcn/ui components
│   │   │   ├── CurrencyCombobox.tsx  # Custom currency selector
│   │   │   └── InfoPopover.tsx       # Help information popover
│   │   ├── screens/      # Main application screens
│   │   │   └── Root.tsx  # Exchange Rate Calculator
│   │   ├── constants/    # Application constants
│   │   │   └── dummy.ts  # Currency data and defaults
│   │   ├── util/         # Utility functions
│   │   │   └── functions.ts  # Exchange rate calculations
│   │   ├── hooks/        # Custom React hooks
│   │   ├── assets/       # Static assets (images, fonts)
│   │   ├── main.tsx      # Application entry point
│   │   └── global.css    # Global styles with Tailwind
│   ├── .husky/           # Git hooks configuration
│   ├── vite.config.ts    # Vite configuration
│   ├── biome.json        # Biome formatter/linter config
│   ├── package.json      # Frontend dependencies
│   └── README.md         # Frontend documentation
├── wwwroot/              # Static files (React build output)
├── Program.cs            # ASP.NET Core startup
└── VfxCalculator.csproj  # Project file with build integration
```

## 🛠️ Development Setup

### Prerequisites
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Bun](https://bun.sh/) (for frontend package management)
- [Node.js](https://nodejs.org/) (for build integration)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vfx-calculator
   ```

2. **Install frontend dependencies**
   ```bash
   cd ClientApp
   bun install
   cd ..
   ```

3. **Run the application**
   ```bash
   # Option 1: Run both frontend and backend
   dotnet run

   # Option 2: Run frontend in development mode
   cd ClientApp
   bun run dev
   ```

## 🚀 Running the Application

### Development Mode (Recommended)

#### Option 1: Full Stack Development
```bash
# Terminal 1: Start the backend
dotnet run
# Backend will be available at: https://localhost:7xxx or http://localhost:5xxx

# Terminal 2: Start the frontend dev server
cd ClientApp
bun run dev
# Frontend will be available at: http://localhost:5173
```

#### Option 2: Backend Only (Serves Built React App)
```bash
# First, build the React app
cd ClientApp
bun run build

# Then run the backend
cd ..
dotnet run
# Full application will be available at: https://localhost:7xxx or http://localhost:5xxx
```

### Production Mode
```bash
# Build the entire application
dotnet build

# Run in production mode
dotnet run --configuration Release
```

## 🔨 Building the Application

### Frontend Build Commands
```bash
cd ClientApp

# Development build (with source maps)
bun run build

# Preview the production build locally
bun run preview

# Clean build artifacts
rm -rf dist/
```

### Backend Build Commands
```bash
# Build the project
dotnet build

# Build in Release mode
dotnet build --configuration Release

# Clean build artifacts
dotnet clean
```

### Full Application Build
```bash
# Build everything (frontend + backend)
dotnet build

# This will:
# 1. Install frontend dependencies (if needed)
# 2. Build the React app to wwwroot/dist/
# 3. Build the ASP.NET Core application
```

### Development Workflow

#### Frontend Development
```bash
cd ClientApp

# Start development server with hot reload
bun run dev          # http://localhost:5173

# Build for production
bun run build        # Outputs to ../wwwroot/dist/

# Preview production build
bun run preview      # Preview the built app

# Lint code
bun run lint         # Run ESLint
```

#### Backend Development
```bash
# Start development server
dotnet run           # https://localhost:7xxx

# Build the project
dotnet build         # Build without running

# Run tests (when available)
dotnet test          # Run unit tests

# Watch for changes (if using dotnet watch)
dotnet watch run     # Auto-restart on changes
```

#### Full Stack Development
```bash
# Terminal 1: Backend with hot reload
dotnet watch run

# Terminal 2: Frontend with hot reload
cd ClientApp
bun run dev

# Both servers will auto-reload on file changes
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

### Example API Response
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

## 🎨 Frontend Features

### Exchange Rate Calculator
- **Professional UI**: Clean, modern interface matching financial application standards
- **Comprehensive Currency Support**: 146+ world currencies with search functionality
- **Real-time Validation**: Form validation with Zod schema and React Hook Form
- **Interactive Help**: Info popovers with detailed explanations for each field
- **Currency Swap**: One-click currency exchange functionality
- **Date & Fee Management**: Editable transaction date and bank fee with toggle interface
- **Exchange Rate Calculation**: Dummy calculation engine with realistic rates

### Technical Features
- **File-based Routing**: Routes automatically generated from `src/routes/` directory
- **Type Safety**: Full TypeScript support with TanStack Router's type inference
- **API Integration**: TanStack Query for server state management with caching
- **Dev Tools**: TanStack Router and React Query devtools for debugging
- **Modern CSS**: Tailwind CSS v4 with the new Vite plugin
- **UI Components**: shadcn/ui components for consistent, accessible design
- **Form Management**: React Hook Form with Zod validation
- **Code Quality**: Biome formatter/linter with Husky git hooks
- **Hot Reload**: Fast development with Vite's HMR

## 🔧 Build Process

The project uses an integrated build process that automatically handles both frontend and backend compilation.

### Build Flow
1. **Development**: Frontend runs on Vite dev server (port 5173), backend serves API (port 5xxx/7xxx)
2. **Production**: Frontend builds to `wwwroot/dist/`, backend serves the SPA
3. **Deployment**: Single .NET build process handles both frontend and backend

### Build Commands

#### Quick Build
```bash
# Build everything (frontend + backend)
dotnet build

# Build in Release mode
dotnet build --configuration Release
```

#### Detailed Build Steps
```bash
# 1. Build frontend only
cd ClientApp
bun run build

# 2. Build backend only
cd ..
dotnet build

# 3. Build everything together
dotnet build  # This runs both steps automatically
```

#### Publishing for Production
```bash
# Publish the entire application
dotnet publish -c Release -o ./publish

# The publish folder will contain:
# - All ASP.NET Core files
# - Built React app in wwwroot/dist/
# - All necessary dependencies
```

### Build Output Locations
- **Frontend**: `ClientApp/dist/` → `wwwroot/dist/`
- **Backend**: `bin/Release/net8.0/`
- **Published**: `./publish/` (when using dotnet publish)

## 🚀 Deployment

The application is designed for easy deployment:

1. **Build the project**: `dotnet publish -c Release`
2. **Deploy the output**: The published folder contains everything needed
3. **Configure web server**: Point to the published folder

## 📝 Development Notes

### Exchange Rate Calculator Features
- **Currency Data**: Located in `ClientApp/src/constants/dummy.ts`
- **Calculation Logic**: Implemented in `ClientApp/src/util/functions.ts`
- **Form Validation**: Zod schema in `ClientApp/src/screens/Root.tsx`
- **UI Components**: Custom components in `ClientApp/src/components/`

### Adding New API Endpoints
1. Add new methods to `Controllers/ApiController.cs`
2. Create corresponding TanStack Query hooks in `ClientApp/src/hooks/`
3. Use the hooks in React components

### Adding New Routes
1. Create new files in `ClientApp/src/routes/`
2. Routes are automatically generated by TanStack Router
3. Use TypeScript for full type safety

### Styling
- Use Tailwind CSS utility classes
- Custom styles go in `ClientApp/src/global.css`
- shadcn/ui components for consistent design
- Component-specific styles can be added inline or as separate CSS modules

### Code Quality
- **Formatting**: Run `bun run format` to format code with Biome
- **Linting**: Run `bun run lint` to check for issues
- **Git Hooks**: Husky automatically formats and lints on commit
- **Type Checking**: Run `bun run type-check` for TypeScript validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both frontend and backend
5. Submit a pull request

## 📄 License

[Add your license information here]

## 🆘 Support

For questions or issues:
1. Check the frontend documentation in `ClientApp/README.md`
2. Review the API documentation
3. Create an issue in the repository
