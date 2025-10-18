import Root from "@/screens/Root";
import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React from "react";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Root />
      <TanStackRouterDevtools />
    </React.Fragment>
  ),
});
