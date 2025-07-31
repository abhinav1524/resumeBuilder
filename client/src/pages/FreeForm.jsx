import { useState, useEffect } from "react";
import ResumePreview from "./ResumePreview";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  nextStep,
  prevStep,
  setHeader,
  setSkills,
  setExperience,
  setProjects,
  setEducation,
  setCertificates,
} from "../features/resume/resumeSlice";

const FreeForm = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.resume.currentStep);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("fullFormData");
    return saved
      ? JSON.parse(saved)
      : {
          header: {},
          skills: "",
          experience: {},
          projects: {},
          education: {},
          certificates: {},
        };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const section =
      step === 1
        ? "header"
        : step === 2
        ? "skills"
        : step === 3
        ? "experience"
        : step === 4
        ? "projects"
        : step === 5
        ? "education"
        : "certificates";

    setFormData((prev) => ({
      ...prev,
      [section]:
        section === "skills"
          ? value // it's a simple string
          : {
              ...prev[section],
              [name]: value,
            },
    }));
  };

  const handleNext = () => {
    // Dispatch to Redux
    switch (step) {
      case 1:
        dispatch(setHeader(formData.header));
        break;
      case 2:
        dispatch(setSkills(formData.skills.split(",").map((s) => s.trim())));
        break;
      case 3:
        dispatch(setExperience([formData.experience]));
        break;
      case 4:
        dispatch(setProjects([formData.projects]));
        break;
      case 5:
        dispatch(setEducation([formData.education]));
        break;
      case 6:
        dispatch(setCertificates([formData.certificates]));
        break;
    }

    localStorage.setItem("fullFormData", JSON.stringify(formData));

    if (step < 6) dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(prevStep());
  };
  
  // redirect user after 6 step
  const handleFinish=()=>{
    navigate("/resume-preview");
  }

  useEffect(() => {
    const saved = localStorage.getItem("fullFormData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, [step]);

  const renderStepForm = () => {
    const header = formData.header || {};
    const experience = formData.experience || {};
    const projects = formData.projects || {};
    const education = formData.education || {};
    const certificates = formData.certificates || {};

    switch (step) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["firstName", "lastName", "city", "state", "phone", "email"].map(
              (field) => (
                <div key={field}>
                  <label className="block font-medium mb-1 capitalize">
                    {field}
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    name={field}
                    placeholder={field}
                    value={header[field] || ""}
                    onChange={handleChange}
                  />
                </div>
              )
            )}
          </div>
        );
      case 2:
        return (
          <div>
            <label className="block font-medium mb-1">
              Skills (comma separated)
            </label>
            <input
             placeholder="communication skill presentation skill,leadership skill,another skill"
              name="skills"
              value={formData.skills || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        );
      case 3:
        return (
          <div>
            <label className="block mb-1">Job Title</label>
            <input
              name="jobTitle"
              placeholder="Software Developer"
              value={experience.jobTitle || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <label className="block mt-2 mb-1">Company Name</label>
            <input
              name="company"
              placeholder="Company"
              value={experience.company || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <label className="block mt-2 mb-1">Duration</label>
            <input
              name="duration"
              placeholder="1 year"
              value={experience.duration || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        );
      case 4:
        return (
          <div>
            <label className="block mb-1">Project Title</label>
            <input
              name="projectTitle"
              placeholder="Ecommerce App"
              value={projects.projectTitle || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <label className="block mt-2 mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Description"
              value={projects.description || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        );
      case 5:
        return (
          <div>
            <label className="block mb-1">Degree</label>
            <input
              name="degree"
              placeholder="BCA"
              value={education.degree || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <label className="block mt-2 mb-1">Institution</label>
            <input
              name="institution"
              placeholder="Your College"
              value={education.institution || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <label className="block mt-2 mb-1">Passout Year</label>
            <input
              name="year"
              placeholder="2023"
              value={education.year || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        );
      case 6:
        return (
          <div>
            <label className="block mb-1">Certificate</label>
            <input
              name="certificate"
              placeholder="Web Dev"
              value={certificates.certificate || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <label className="block mt-2 mb-1">Issuer</label>
            <input
              name="issuer"
              placeholder="Udemy"
              value={certificates.issuer || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-6 relative">
        <div className="hidden md:flex flex-col absolute left-0 top-6 gap-6 px-2">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div
              key={s}
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                s === step ? "bg-blue-600 text-white" : "border-gray-400"
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="md:ml-16">
          <h2 className="text-2xl font-bold mb-1">Step {step}</h2>
          <p className="text-gray-600 mb-6">
            Please fill in the details below.
          </p>

          {renderStepForm()}

          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Back
              </button>
            )}
            {step === 6 ? (
              <button
                onClick={handleFinish}
                className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
              >
                Finish
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-gray-100 p-4 flex justify-center items-start">
        <ResumePreview />
      </div>
    </div>
  );
};

export default FreeForm;
