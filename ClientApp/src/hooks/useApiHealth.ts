import { useQuery } from "@tanstack/react-query";

interface HealthResponse {
  status: string;
  timestamp: string;
}

export function useApiHealth() {
  return useQuery<HealthResponse>({
    queryKey: ["api", "health"],
    queryFn: async () => {
      const response = await fetch("/api/api/health");
      if (!response.ok) {
        throw new Error("Failed to fetch health status");
      }
      return response.json();
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });
}
