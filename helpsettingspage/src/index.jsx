import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelpSettingsPage } from "./screens/HelpSettingsPage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <HelpSettingsPage />
  </StrictMode>,
);
