import { createFileRoute } from "@tanstack/react-router";
import { useApiHealth } from "../hooks/useApiHealth";

export const Route = createFileRoute("/")({
  component: () => {
    const { data: health, isLoading, error } = useApiHealth();

    return (
      <div className="p-2">
        <h3 className="text-2xl font-bold">Welcome to VFX Calculator!</h3>
        <p className="mt-4">
          This is the home page of your VFX Calculator application.
        </p>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">API Status</h4>
          {isLoading && <p className="text-blue-600">Loading API status...</p>}
          {error && <p className="text-red-600">Error: {error.message}</p>}
          {health && (
            <div className="text-green-600">
              <p>Status: {health.status}</p>
              <p className="text-sm text-gray-600">
                Last checked: {new Date(health.timestamp).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  },
});
