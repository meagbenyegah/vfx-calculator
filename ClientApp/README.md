# VFX Calculator Frontend

This is the React frontend for the VFX Calculator application, built with modern tools and best practices.

## Tech Stack

- **React 19** - Latest React with concurrent features
- **Vite 7** - Fast build tool and dev server
- **TanStack Router** - Type-safe file-based routing
- **TanStack Query** - Server state management with caching
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type safety and better developer experience
- **Bun** - Fast package manager and runtime

## Development

### Prerequisites

- [Bun](https://bun.sh/) installed globally
- Node.js (for ASP.NET Core build integration)

### Running the Frontend

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

The development server will run on `http://localhost:5173` with hot module replacement.

### Building for Production

```bash
# Build the React app
bun run build
```

The built files will be output to `../wwwroot/dist/` and served by the ASP.NET Core backend.

## Project Structure

```
src/
├── routes/           # File-based routes (TanStack Router)
│   ├── __root.tsx   # Root layout component
│   ├── index.tsx    # Home page
│   └── about.tsx    # About page
├── hooks/           # Custom React hooks
│   └── useApiHealth.ts  # Example API hook
├── main.tsx         # Application entry point
└── index.css        # Global styles with Tailwind
```

## Features

- **File-based Routing**: Routes are automatically generated from the `src/routes/` directory
- **Type Safety**: Full TypeScript support with TanStack Router's type inference
- **API Integration**: TanStack Query for server state management
- **Dev Tools**: TanStack Router and React Query devtools for debugging
- **Modern CSS**: Tailwind CSS v4 with the new Vite plugin
- **Hot Reload**: Fast development with Vite's HMR

## API Integration

The frontend is set up to communicate with the ASP.NET Core backend API. Example API endpoints:

- `GET /api/api` - Basic API info
- `GET /api/api/health` - Health check endpoint

The `useApiHealth` hook demonstrates how to use TanStack Query for API calls.

## Integration with ASP.NET Core

The React app is built and served as static files from the ASP.NET Core backend's `wwwroot/dist/` directory. The backend serves the `index.html` file for all client-side routes, enabling SPA functionality.

## Development Workflow

1. **Frontend Development**: Run `bun run dev` in the `ClientApp` directory
2. **Backend Development**: Run the ASP.NET Core application normally
3. **Production Build**: The .NET build process automatically builds the React app

## Next Steps

The backend team can now implement additional API endpoints that the frontend can consume using TanStack Query hooks.