// components/RegisterForm.jsx
import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";

const RegisterForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

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
          <h2 className="text-3xl font-bold mb-2">Join Us!</h2>
          <p className="text-sm">Create an account to start building beautiful resumes with AI.</p>
          <img src="/images/generic image.svg" alt="" />
        </div>

        {/* Right side - Register form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
              <div className="flex items-center border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
                <User className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <div className="flex items-center border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  id="email"
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
              <div className="flex items-center border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
                <Lock className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition font-medium"
            >
              Create Account
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

export default RegisterForm;
