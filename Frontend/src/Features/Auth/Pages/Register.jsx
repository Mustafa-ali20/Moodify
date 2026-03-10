import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "../Components/FormGroup";
import { useAuth } from "../Hooks/useAuth";
import "../Shared/authLayout.scss";


const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const { loading, handleRegister } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(formData);
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
            Discover sounds made<br />for <em>how you feel</em>
          </h2>
          <p className="auth__sub">
            Join Moodify and let AI detect your mood through
            your camera — then serve the perfect playlist instantly.
          </p>
        </div>
      </div>

      {/* ── Right Panel ── */}
      <div className="auth__right">
        <div className="auth__form-wrap">
          <div className="auth__card">

            <div className="auth__card-brand">Mood<span>ify</span></div>
            <div className="auth__divider" />
            <h1 className="auth__card-title">Create account</h1>
            <p className="auth__card-subtitle">Start your mood-powered music journey</p>

            <FormGroup label="Username" placeholder="Choose a username"
              type="text" name="username" value={formData.username} onChange={handleChange} />
            <FormGroup label="Email" placeholder="Enter your email"
              type="email" name="email" value={formData.email} onChange={handleChange} />
            <FormGroup label="Password" placeholder="Create a password"
              type="password" name="password" value={formData.password} onChange={handleChange} />

            <button className="auth__btn" onClick={handleSubmit} disabled={loading}>
              {loading ? "Creating account..." : "Sign Up"}
            </button>

            <p className="auth__footer">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;