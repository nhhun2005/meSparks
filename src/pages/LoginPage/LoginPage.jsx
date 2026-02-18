import "./LoginPage.css";
import { VscSparkle as AppIcon } from "react-icons/vsc";
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
import { MdLockOutline as PasswordIcon } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function LoginPage() {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  return (
    <div className="flex-container fade-in">
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
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="input-group">
          <PasswordIcon></PasswordIcon>
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button>Sign In</button>
        <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
          <p id="register-label">
            Don't have an account? <span>Register</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
