# VFX Calculator

A modern VFX (Visual Effects) Calculator application built with ASP.NET Core backend and React frontend.

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
- **TypeScript** - Type safety and better developer experience
- **Bun** - Fast package manager and runtime

## 📁 Project Structure

```
vfx-calculator/
├── Controllers/           # ASP.NET Core API controllers
│   ├── HomeController.cs  # SPA serving controller
│   └── ApiController.cs   # API endpoints
├── ClientApp/            # React frontend application
│   ├── src/
│   │   ├── routes/       # File-based routes (TanStack Router)
│   │   ├── hooks/        # Custom React hooks
│   │   ├── main.tsx      # Application entry point
│   │   └── index.css     # Global styles with Tailwind
│   ├── vite.config.ts    # Vite configuration
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

- **File-based Routing**: Routes automatically generated from `src/routes/` directory
- **Type Safety**: Full TypeScript support with TanStack Router's type inference
- **API Integration**: TanStack Query for server state management with caching
- **Dev Tools**: TanStack Router and React Query devtools for debugging
- **Modern CSS**: Tailwind CSS v4 with the new Vite plugin
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
- Custom styles go in `ClientApp/src/index.css`
- Component-specific styles can be added inline or as separate CSS modules

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
