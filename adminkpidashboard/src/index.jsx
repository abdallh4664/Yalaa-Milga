import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AdminKpiDashboard } from "./screens/AdminKpiDashboard/AdminKpiDashboard";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <AdminKpiDashboard />
  </StrictMode>,
);
