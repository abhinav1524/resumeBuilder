// components/LoginForm.jsx
import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";

const LoginForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left side - Illustration or background */}
        <div className="hidden md:block w-1/2 bg-gradient-to-tr from-blue-500 to-indigo-600 p-10 text-white">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-sm">Log in to access your AI Resume Builder Service.</p>
          <img  className="pt-4" src="images/generic image.svg" alt="" />
        </div>

        {/* Right side - Login form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <div className="flex items-center border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <div className="flex items-center border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <Lock className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-medium cursor-pointer"
            >
              Sign In
            </button>

            <a
              href="/api/auth/google"
              className="block w-full text-center bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Continue with Google
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
