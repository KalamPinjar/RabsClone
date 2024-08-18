import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import About from "./components/About";
import Faq from "./components/Faq";
import Map from "./components/Map";
import Objective from "./components/Objective";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import TestApi from "./components/TestApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      
      {
        path: "/overview",
        element: <Map />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/approach",
        element: <Objective />,
      },
      {
        path: "/review",
        element: <Reviews />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },

      {
        path: "/testApi",
        element: <TestApi />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
