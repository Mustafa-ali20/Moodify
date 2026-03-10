import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "../Components/FormGroup";
import { useAuth } from "../Hooks/useAuth";
import "../Shared/authLayout.scss";

const MOOD_TAGS = [
  { label: "Happy",     color: "#facc15" },
  { label: "Calm",      color: "#60a5fa" },
  { label: "Energetic", color: "#f87171" },
];

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(formData);
    navigate("/");
  };

  return (
    <div className="auth">

      {/* ── Left Panel ── */}
      <div className="auth__left">
        <img className="auth__left-img" src="/Images/1900x1900-000000-80-0-0.jpg" alt="bg" />
        <div className="auth__left-overlay" />
        <div className="auth__left-content">
          <div className="auth__brand">Mood<span>ify</span></div>
          <h2 className="auth__tagline">
            Music that matches<br />your <em>every mood</em>
          </h2>
          <p className="auth__sub">
            Your face tells the story. Our AI listens and curates
            the perfect soundtrack for whatever you're feeling.
          </p>
          <div className="auth__mood-tags">
            {MOOD_TAGS.map(({ label, color }) => (
              <div key={label} className="auth__mood-tag">
                <div className="auth__mood-dot" style={{ background: color }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right Panel ── */}
      <div className="auth__right">
        <div className="auth__form-wrap">
          <div className="auth__card">

            <div className="auth__card-brand">Mood<span>ify</span></div>
            <div className="auth__divider" />
            <h1 className="auth__card-title">Welcome back</h1>
            <p className="auth__card-subtitle">Sign in to your account to continue</p>

            <FormGroup label="Email" placeholder="Enter your email"
              type="email" name="email" value={formData.email} onChange={handleChange} />
            <FormGroup label="Password" placeholder="Enter your password"
              type="password" name="password" value={formData.password} onChange={handleChange} />

            <button className="auth__btn" onClick={handleSubmit} disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <p className="auth__footer">
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;