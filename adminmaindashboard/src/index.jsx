import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AdminMainDashboard } from "./screens/AdminMainDashboard/AdminMainDashboard";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <AdminMainDashboard />
  </StrictMode>,
);
