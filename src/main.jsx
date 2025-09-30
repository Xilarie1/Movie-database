import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import routes from "./lib/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/queryClient";

const router = createBrowserRouter(routes); // ✅ create the router instance

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} /> {/* ✅ use the router instance */}
    </QueryClientProvider>
  </StrictMode>
);
