// pages/Register.jsx
import React from "react";
import RegisterForm from "../components/RegisterForm";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (form) => {
    try {
      const res = await axios.post("/api/auth/register", form, { withCredentials: true });
      console.log("Registered:", res.data);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col space-y-4">
      <RegisterForm onSubmit={handleRegister} />
      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
};

export default Register;
