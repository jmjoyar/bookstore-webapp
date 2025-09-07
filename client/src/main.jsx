import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Authentication from "./pages/Authentication.jsx";
import Register from "./pages/Register.jsx";
import App from "./App.jsx";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/login", Component: Authentication },
  {path: "/signup", Component: Register}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </MantineProvider>
);
