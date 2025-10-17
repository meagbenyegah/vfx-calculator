import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: () => (
    <div className="p-2">
      <h3 className="text-2xl font-bold">About VFX Calculator</h3>
      <p className="mt-4">
        This is a VFX Calculator application built with React, TanStack Router,
        and ASP.NET Core.
      </p>
    </div>
  ),
});
