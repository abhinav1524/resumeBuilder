import React from "react";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <main className="px-4 py-10 md:px-10 lg:px-24">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
          Build Your Resume Effortlessly
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Whether you're a beginner or experienced, generate a professional
          resume using our tested template.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/manual"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Build Manually
          </Link>
          <Link
            to="/ai-builder"
            className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Use AI Assistance (₹49/month)
          </Link>
        </div>
      </section>

      <section className="mt-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Why Choose Us?
          </h2>
          <ul className="text-gray-700 space-y-3">
            <li>✅ AI fills your resume from a single prompt</li>
            <li>✅ Trusted template with high callback rate</li>
            <li>✅ Manual or AI-based input – your choice</li>
            <li>✅ Free resume PDF download for all users</li>
            <li>✅ Affordable AI service at just ₹49/month</li>
          </ul>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/31/13/14/web-2027780_1280.png"
            alt="Resume illustration"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </section>

      <section className="mt-20 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Monetization
        </h2>
        <p className="text-gray-600 mb-6">
          We rely on a small subscription fee, affiliate partnerships, and
          Google AdSense ads to keep this service affordable for everyone.
        </p>
        <p className="text-gray-500 italic">Thanks for supporting us!</p>
      </section>
    </main>
  );
};

export default Home;
