import { useContext } from "react";
import "./Header.css";
import { HeaderContext } from "../../contexts/HeaderContext";

export default function Header() {
  const { headerInfo } = useContext(HeaderContext);
  return (
    <header>
      <div className="title">
        {headerInfo.icon && <div className="app-icon">{headerInfo.icon}</div>}
        <h3>{headerInfo.title}</h3>
      </div>
      <p>{headerInfo.description}</p>
    </header>
  );
}
