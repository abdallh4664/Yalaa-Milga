import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DashboardPage } from "./screens/DashboardPage/DashboardPage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <DashboardPage />
  </StrictMode>,
);
