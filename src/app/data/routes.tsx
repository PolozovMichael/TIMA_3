import HomePage from "../../pages/HomePage";
import StorageProvidersPage from "../../pages/StorageProvidersPage";
import ResourceUtilizationPage from "../../pages/ResourceUtilizationPage";
import NetworkPerformancePage from "../../pages/NetworkPerformancePage";
import RiskAnalysisPage from "../../pages/RiskAnalysisPage";

export const privateRoutes = [
  { path: "/home", component: <HomePage /> },
  { path: "/resource-utilization", component: <ResourceUtilizationPage /> },
  { path: "/network-performance", component: <NetworkPerformancePage /> },
  { path: "/risk-analysis", component: <RiskAnalysisPage /> },
  { path: "/storage-providers", component: <StorageProvidersPage /> },
  { path: "/settings", component: <HomePage /> },
  // all hyperlinks
  // { path: "/", component: <HomePage /> },
  // { path: "/createHyperlink", component: <CreateHyperlinkPage /> },
  // { path: "/hyperlink/:hyperlinkId", component: <SingleHyperlinkPage /> },
];

export const publicRoutes = [
];
