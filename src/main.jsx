import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { HeaderContext, HeaderProvider } from "./contexts/HeaderContext";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { NavbarProvider } from "./contexts/NavbarContext";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HeaderProvider>
        <NavbarProvider>
          <MainLayout></MainLayout>
        </NavbarProvider>
      </HeaderProvider>
    ),
    children: [
      {
        path: "settings",
        element: <SettingsPage></SettingsPage>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  { path: "/reset-password", element: <ResetPasswordPage></ResetPasswordPage> },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
