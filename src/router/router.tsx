import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import Store from "../pages/Storepage/page";
import SKU from "../pages/skupage/page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Store /> },
      { path: "sku", element: <SKU /> },
    ],
  },
]);

export default router;
