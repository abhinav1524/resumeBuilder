import React, { useState } from "react";
import ResumeTemplate from "./ResumeTemplate";
import SkeltonLoading from "./SkeltonLoading";
import axios from "axios";

const GenerateResume = () => {
  const [prompt, setPrompt] = useState("");
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/ai/fill-resume", {
        prompt,
      }); // Your backend route
      console.log("response", res.data);
      setResumeData(res.data);
    } catch (err) {
      console.error("Error generating resume:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
      {/* Left Column: Prompt + Button (4 columns on lg, full width on small) */}
      <div className="lg:col-span-6 col-span-12 space-y-4">
        <textarea
          className="w-full p-2 border rounded"
          rows={5}
          placeholder="for ex. Hi, my name is Abhinav. My role is Fullstack Developer at Syscode Technology Private Limited. I have 2 years of experience in the company. My Technical skills are html css js react php express js mongodb mysql and my soft skills are Effective Collaboration and Communication Adaptability to New Technology . I completed B.Tech from Kurukshetra University in 2021. I have a certificate in Web Development 6 month duration course from Coursera. and i make a project which is ecommerce website where user can buy and add to cart the product and the tech stack i use in that project is mern stack. My email is abhinav@example.com, my phone number is 9876543210, and I live in Ambala city Haryana."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`px-4 py-2 text-white rounded w-full ${
    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
  }`}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>

      {/* Right Column: Resume Display (8 columns on lg, full width on small) */}
      <div className="lg:col-span-6 col-span-12">
        {
        loading?(<div className="lg:ml-28"><SkeltonLoading/></div>):(
        resumeData && (
          <div className="lg:ml-28">
            <ResumeTemplate resumeData={resumeData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateResume;
