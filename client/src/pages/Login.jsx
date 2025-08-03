// pages/Login.jsx
import React from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (form) => {
    try {
      const res = await axios.post("/api/auth/login", form, { withCredentials: true });
      console.log("Logged in:", res.data);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen  flex-col space-y-4">
      <LoginForm onSubmit={handleLogin} />
      <p>
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-500">Register</Link>
      </p>
    </div>
  );
};

export default Login;
