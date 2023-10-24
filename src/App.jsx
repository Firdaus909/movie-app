import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Detail, { loader as movieLoader } from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFound />,
  },
  {
    path: "detail/:movieId",
    element: <Detail />,
    loader: movieLoader,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
