import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { appLinks } from "Utils/constant";
import { withSuspense } from "Hocs";

const Welcome = withSuspense(lazy(() => import("Pages/Welcome")));

export const router = createBrowserRouter([
  {
    path: appLinks.welcome,
    element: <Welcome />,
  },
]);
