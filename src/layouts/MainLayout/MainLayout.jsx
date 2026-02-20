import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./MainLayout.css";
import AddButton from "../AddButton/AddButton";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Header></Header>
      <main className="content-area">
        <Outlet></Outlet>
      </main>
      <AddButton></AddButton>
      <Navbar></Navbar>
    </div>
  );
}
