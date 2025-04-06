import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import { ContactPage } from "./components/pages/contactus.tsx";
import IndustriesPage from "./components/pages/industries.tsx";
import RootLayout from "./components/root-layout.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { element: <App />, index: true },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "industries",
        element: <IndustriesPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
