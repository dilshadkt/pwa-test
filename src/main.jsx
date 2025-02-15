import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onOfflineReady() {},
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem("lastVisitedPage", window.location.pathname);
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
