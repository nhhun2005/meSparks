import { useContext, useEffect } from "react";
import "./SettingsPage.css";
import { HeaderContext } from "../../contexts/HeaderContext";
import { IoIosNotificationsOutline as NotificationsIcon } from "react-icons/io";
import { VscSparkle as AppIcon } from "react-icons/vsc";
import { NavbarContext } from "../../contexts/NavbarContext";
import { MdLockOutline as PasswordIcon } from "react-icons/md";
import { IoColorPaletteOutline as AppearancesIcon } from "react-icons/io5";
import { GrLogout as LogoutIcon } from "react-icons/gr";
export default function SettingsPage() {
  const { setSelectedPage } = useContext(NavbarContext);
  const { setHeaderInfo } = useContext(HeaderContext);
  useEffect(() => {
    setSelectedPage("settings");
    setHeaderInfo({
      title: "Settings",
      icon: <AppIcon></AppIcon>,
      description: "Manage your preferences",
    });
  }, []);
  return (
    <div className="settings-container">
      <div className="settings-group">
        <p>Account</p>
        <div className="settings-card">
          <PasswordIcon
            className="settings-icon"
            style={{ color: "#FBAF16" }}
          ></PasswordIcon>
          <p>Change Password</p>
        </div>
      </div>
      <div className="settings-group">
        <p>Preferences</p>
        <div className="settings-card">
          <NotificationsIcon
            className="settings-icon"
            style={{ color: "#8B5CF6" }}
          ></NotificationsIcon>
          <p>Notifications</p>
        </div>
        <div className="settings-card">
          <AppearancesIcon
            className="settings-icon"
            style={{ color: "#644682" }}
          ></AppearancesIcon>
          <p>Appearances</p>
        </div>
      </div>
      <div className="logout-button">
        <LogoutIcon></LogoutIcon>
        Logout
      </div>
      <p id="version-info">meSparks v1.0.0</p>
    </div>
  );
}
