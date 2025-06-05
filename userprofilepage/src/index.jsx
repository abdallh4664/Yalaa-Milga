import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProfilePage } from "./screens/UserProfilePage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <UserProfilePage />
  </StrictMode>,
);
