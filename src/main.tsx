import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./routes/Nav";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";
import GlobalContextProvider from "./components/GlobalContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
