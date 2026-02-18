import "./RegisterPage.css";
import { VscSparkle as AppIcon } from "react-icons/vsc";
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
import { MdLockOutline as PasswordIcon } from "react-icons/md";
import { FaRegUser as UserIcon } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="flex-container fade-in">
      <div className="hero-container">
        <AppIcon id="app-icon"></AppIcon>
        <h2>Join meSparks</h2>
        <p>Start managing your life today</p>
      </div>
      <div className="register-container">
        <div className="input-group">
          <UserIcon></UserIcon>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </div>
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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button>Sign Up</button>
        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
          <p id="login-label">
            Already have an account? <span>Login</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
