import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SignupPage } from "./screens/SignupPage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <SignupPage />
  </StrictMode>,
);
