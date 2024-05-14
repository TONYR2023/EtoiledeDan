import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";

import HomePage from "./Pages/HomePage";
import NotreGitePage from "./Pages/NotreGitePage";
import PrestationsPage from "./Pages/PrestationsPage";
import TourismePage from "./Pages/TourismePage";
import InformationsPage from "./Pages/InformationsPage";
import MagazinePage from "./Pages/MagazinePage";
import ContactPage from "./Pages/ContactPage";
import CguPage from "./Pages/CguPage";
import LegalMentionsPage from "./Pages/LegalMentionsPage";
import PmrPage from "./Pages/PmrPage";
import PrereservPage from "./Pages/PrereservPage";
import LoginPage from "./Pages/LoginPage";
import Test from "./Pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "notreGite",
        element: <NotreGitePage />,
      },
      {
        path: "prestations",
        element: <PrestationsPage />,
      },
      {
        path: "tourisme",
        element: <TourismePage />,
      },
      {
        path: "informations",
        element: <InformationsPage />,
      },
      {
        path: "magazine",
        element: <MagazinePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "pmr",
        element: <PmrPage />,
      },
      {
        path: "cgu_cgv",
        element: <CguPage />,
      },
      {
        path: "legal_mentions",
        element: <LegalMentionsPage />,
      },
      {
        path: "pre_reserv",
        element: <PrereservPage />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
