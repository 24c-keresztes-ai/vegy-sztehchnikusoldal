import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "szolgaltatas/:slug", Component: ServiceDetailPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
