import HomePage from "../../pages/HomePage";
import StorageProvidersPage from "../../pages/StorageProvidersPage";

export const privateRoutes = [
  { path: "/home", component: <HomePage /> },
  { path: "/resource-utilization", component: <HomePage /> },
  { path: "/network-performance", component: <HomePage /> },
  { path: "/risk-analysis", component: <HomePage /> },
  { path: "/storage-provider", component: <StorageProvidersPage /> },
  { path: "/settings", component: <HomePage /> },
  // all hyperlinks
  // { path: "/", component: <HomePage /> },
  // { path: "/createHyperlink", component: <CreateHyperlinkPage /> },
  // { path: "/hyperlink/:hyperlinkId", component: <SingleHyperlinkPage /> },
];

export const publicRoutes = [
];
