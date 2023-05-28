import HomePage from "../../pages/HomePage";
import ResourceUtilizationPage from "../../pages/ResourceUtilizationPage";
import NetworkPerformancePage from "../../pages/NetworkPerformancePage";
import RiskAnalysisPage from "../../pages/RiskAnalysisPage";
import StorageProvidersPage from "../../pages/StorageProvidersPage";
import SettingsPage from "../../pages/SettingsPage";
import SingleStorageProviderPage from "../../pages/SingleStorageProviderPage";
import SingleBucketPage from "../../pages/SingleBucketPage";

export const privateRoutes = [];

export const publicRoutes = [
  { path: "/home", component: <HomePage /> },
  { path: "/buckets/:bucketId", component: <SingleBucketPage /> },
  { path: "/resource-utilization", component: <ResourceUtilizationPage /> },
  { path: "/network-performance", component: <NetworkPerformancePage /> },
  { path: "/risk-analysis", component: <RiskAnalysisPage /> },
  { path: "/storage-providers", component: <StorageProvidersPage /> },
  { path: "/storage-providers/:spId", component: <SingleStorageProviderPage /> },
  { path: "/settings", component: <SettingsPage /> },
];
