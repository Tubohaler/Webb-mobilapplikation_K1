import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { loader as rootLoader } from "./App";
import App from "./App";
import Index from "./routes/Index";
import TimeKeeper from "./pages/TimeKeeper";
import Calender from "./pages/Calender";
import Overview from "./pages/Overview";
import ErrorPage from "./routes/ErrorPage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/timer",
        element: <TimeKeeper />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
    ],
  },
]);

ReactDOM.createRoot(
  document.getElementById("root").render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
);
