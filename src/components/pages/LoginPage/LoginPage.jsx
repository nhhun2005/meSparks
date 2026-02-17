import "./LoginPage.css";
import { VscSparkle as AppIcon } from "react-icons/vsc";
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
import { MdLockOutline as PasswordIcon } from "react-icons/md";
import { useState } from "react";
export default function LoginPage() {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  return (
    <div className="flex-container">
      <div className="hero-container">
        <AppIcon id="app-icon"></AppIcon>
        <h2>meSparks</h2>
        <p>Mange your life, your way</p>
      </div>
      <div className="login-container">
        <div className="input-group">
          <EmailIcon></EmailIcon>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.value);
            }}
          ></input>
        </div>
        <div className="input-group">
          <PasswordIcon></PasswordIcon>
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.value);
            }}
          ></input>
        </div>
        <button>Sign In</button>
        <p id="register-label">
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}
