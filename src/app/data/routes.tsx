import HomePage from "../../pages/HomePage";
import ResourceUtilizationPage from "../../pages/ResourceUtilizationPage";
import NetworkPerformancePage from "../../pages/NetworkPerformancePage";
import RiskAnalysisPage from "../../pages/RiskAnalysisPage";
import StorageProvidersPage from "../../pages/StorageProvidersPage";
import SettingsPage from "../../pages/SettingsPage";

export const privateRoutes = [];

export const publicRoutes = [
  { path: "/home", component: <HomePage /> },
  { path: "/resource-utilization", component: <ResourceUtilizationPage /> },
  { path: "/network-performance", component: <NetworkPerformancePage /> },
  { path: "/risk-analysis", component: <RiskAnalysisPage /> },
  { path: "/storage-providers", component: <StorageProvidersPage /> },
  { path: "/settings", component: <SettingsPage /> },
];
