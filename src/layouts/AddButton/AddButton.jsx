import "./AddButton.css";
import { CiDollar as TransactionIcon } from "react-icons/ci";
import { LuWallet as WalletIcon } from "react-icons/lu";
import { CiCalendar as CalendarIcon } from "react-icons/ci";
import { useState } from "react";

export default function AddButton() {
  const [active, setActive] = useState(false);
  return (
    <div className="add-button-container">
      {active && (
        <div className="add-card" style={{ color: "#A057F7" }}>
          <WalletIcon
            className="add-card-icon"
            style={{ color: "#A057F7" }}
          ></WalletIcon>
          <p>Add Wallet</p>
        </div>
      )}
      {active && (
        <div className="add-card" style={{ color: "#6642C2" }}>
          <TransactionIcon
            className="add-card-icon"
            style={{ color: "#6642C2" }}
          ></TransactionIcon>
          <p>Add Transaction</p>
        </div>
      )}
      {active && (
        <div className="add-card" style={{ color: "#FBAF16" }}>
          <CalendarIcon
            className="add-card-icon"
            style={{ color: "#FBAF16" }}
          ></CalendarIcon>
          <p>Add Task</p>
        </div>
      )}

      <div
        className={`add-button ${active && "active"}`}
        onClick={() => {
          setActive(!active);
        }}
      >
        +
      </div>
    </div>
  );
}
