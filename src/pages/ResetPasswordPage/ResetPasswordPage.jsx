import "./ResetPasswordPage.css";
import { VscSparkle as AppIcon } from "react-icons/vsc";
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
import { MdLockOutline as PasswordIcon } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ResetPasswordPage() {
  const { password, setPassword } = useState("");
  const { passwordConfirm, setPasswordConfirm } = useState("");

  return (
    <div>
      <div className="flex-container fade-in">
        <div className="hero-container">
          <AppIcon id="app-icon"></AppIcon>
          <h2>Reset Password</h2>
          <p>Enter your new password</p>
        </div>
        <div className="login-container">
          <div className="input-group">
            <PasswordIcon></PasswordIcon>
            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="input-group">
            <PasswordIcon></PasswordIcon>
            <input
              type="password"
              placeholder="Confirm your new password"
              value={passwordConfirm}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            ></input>
          </div>

          <button>Reset Password</button>
        </div>
      </div>
    </div>
  );
}
