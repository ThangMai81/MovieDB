import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Error from "./pages/Error";
import Search from "./pages/search/Search";

const router = createBrowserRouter([
  {
    path: "/MovieDB",
    element: <Browse />,
    errorElement: <Error />,
    children: [
      { path: "search", element: <Search />, errorElement: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
