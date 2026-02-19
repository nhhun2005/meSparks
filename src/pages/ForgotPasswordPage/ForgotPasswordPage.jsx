import "./ForgotPasswordPage.css";
import { VscSparkle as AppIcon } from "react-icons/vsc";
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
import { MdLockOutline as PasswordIcon } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ForgotPasswordPage() {
  const { email, setEmail } = useState("");
  return (
    <div>
      <div className="flex-container fade-in">
        <div className="hero-container">
          <AppIcon id="app-icon"></AppIcon>
          <h2>Forgot Password?</h2>
          <p>Enter your email to reset your password</p>
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

          <button>Send Reset Link</button>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            <p id="register-label">
              Remember your password? <span>Sign in</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
