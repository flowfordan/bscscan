//Routing for the pages
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Error } from "./Error/Error";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <Error />,
  },
]);
