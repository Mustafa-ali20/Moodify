import React, { useState } from "react";
import FormGroup from "../components/FormGroup"; // adjust path as needed
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // call your register API here
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <h1 className="text-center text-3xl font-bold text-indigo-400 tracking-tight mb-8">
          Moodify
        </h1>

        {/* Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h2 className="text-white text-xl font-semibold mb-6">
            Create your account
          </h2>

          <FormGroup
            label="Name"
            placeholder="Enter your name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormGroup
            label="Email"
            placeholder="Enter your email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormGroup
            label="Password"
            placeholder="Create a password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            onClick={handleSubmit}
            className="w-full mt-2 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-colors duration-200"
          >
            Sign Up
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-neutral-500 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
