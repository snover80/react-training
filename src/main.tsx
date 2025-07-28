import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppBuildingComponents from "./AppBuildingComponents.tsx";
import StylingComponents from "./StylingComponents.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <h1> Building Components Module (bootstrap)</h1>
      <p />
      <p />
      <p />
    </div>
    <AppBuildingComponents />
    <p />
    <p />
    <p />
    <p />
    <p />
    <div>
      <h1> Styling Module (plain css)</h1>
      <p />
      <p />
      <p />
    </div>
    <StylingComponents />
  </StrictMode>
);
