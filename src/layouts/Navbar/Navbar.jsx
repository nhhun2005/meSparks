import "./Navbar.css";
import { FiHome as HomeIcon } from "react-icons/fi";
import { MdOutlineHistory as HistoryIcon } from "react-icons/md";
import { CiCalendar as CalendarIcon } from "react-icons/ci";
import { useContext } from "react";
import { NavbarContext } from "../../contexts/NavbarContext";
import { HeaderContext } from "../../contexts/HeaderContext";
import { CiSettings as SettingsIcon } from "react-icons/ci";
import { VscSparkle as AppIcon } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { selectedPage, setSelectedPage } = useContext(NavbarContext);
  const { setHeaderInfo } = useContext(HeaderContext);
  const navigator = useNavigate();
  const handleChangePage = (page) => {
    setSelectedPage(page);
    setHeaderInfo(getHeaderInfo(page));
    navigator(page);
  };
  const getHeaderInfo = (page) => {
    if (page == "home") {
      return {
        title: "meSparks",
        icon: <AppIcon></AppIcon>,
        description: "Welcome back!",
      };
    } else if (page == "history") {
      return {
        title: "Transaction History",
        icon: null,
        description: "All your recent activities",
      };
    } else if (page == "settings") {
      return {
        title: "Settings",
        icon: <AppIcon></AppIcon>,
        description: "Manage your preferences",
      };
    } else {
      return {
        title: "The Sparks Calendar",
        icon: null,
        description: "Plan your life",
      };
    }
  };
  return (
    <div className="navbar-container">
      <div
        onClick={() => handleChangePage("home")}
        className={`navbar-item ${selectedPage == "home" && "active"}`}
      >
        <HomeIcon></HomeIcon>
        <p>Home</p>
      </div>
      <div
        onClick={() => handleChangePage("history")}
        className={`navbar-item ${selectedPage == "history" && "active"}`}
      >
        <HistoryIcon></HistoryIcon>
        <p>History</p>
      </div>
      <div
        onClick={() => handleChangePage("calendar")}
        className={`navbar-item ${selectedPage == "calendar" && "active"}`}
      >
        <CalendarIcon></CalendarIcon>
        <p>Calendar</p>
      </div>
      <div
        onClick={() => handleChangePage("settings")}
        className={`navbar-item ${selectedPage == "settings" && "active"}`}
      >
        <SettingsIcon></SettingsIcon>
        <p>Settings</p>
      </div>
    </div>
  );
}
