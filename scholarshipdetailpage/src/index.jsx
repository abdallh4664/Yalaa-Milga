import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ScholarshipDetail } from "./screens/ScholarshipDetail";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ScholarshipDetail />
  </StrictMode>,
);
