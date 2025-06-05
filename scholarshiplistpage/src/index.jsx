import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ScholarshipList } from "./screens/ScholarshipList";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ScholarshipList />
  </StrictMode>,
);
