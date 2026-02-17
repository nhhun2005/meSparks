import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import LoginPage from "./components/pages/LoginPage/LoginPage";

createRoot(document.getElementById("root")).render(<LoginPage></LoginPage>);
