import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import AppEffectHook from "./components/EffectHook/AppEffectHook.tsx";
import FetchingApi from "./components/EffectHook/FetchingApi.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <div>
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
    <div>
      <h1> Managing Components</h1>
      <p />
      <p />
      <p />
    </div>
    <AppManagingComponents />
    <AppShareComponents />
    <BuildingForms />
    <ExpenseTracker />
    <AppEffectHook />
    <p />
    <p />
    <p /> */}
    <FetchingApi />
  </StrictMode>
);
