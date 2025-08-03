// src/components/ResumeTemplate.jsx
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumeTemplate = ({ resumeData }) => {
  const printRef = useRef();

  const handleDownloadPDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", [
      canvas.width * 0.264583,
      canvas.height * 0.264583,
    ]);
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("resume.pdf");
  };

  if (!resumeData) return <p>No resume data found.</p>;

  return (
    <>
      <div
        ref={printRef}
        className="w-full max-w-lg p-6 shadow rounded text-sm font-serif"
        style={{ backgroundColor: "#ffff" }}
      >
        <h1 className="text-2xl font-bold text-center">
          {resumeData.name || "Name not provided"}
        </h1>
        <hr className="my-4" />
        <div className="flex justify-between">
          <div className="flex items-center">
            <i className="fa-solid fa-envelope"></i>
            <p className="text-center ml-1">
              {resumeData.email}
            </p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-phone"></i>
            <p className="text-center ml-1">
              {resumeData.phone}
            </p>
          </div>
          <div className="flex items-center">
            <i class="fa-solid fa-location-dot"></i>
            <p className="text-center ml-1">
              {resumeData.address}
            </p>
          </div>
        </div>

       {resumeData.skills && (
  <section className="mb-4">
    <h2 className="font-semibold mt-4">Skills</h2>
    <hr className="my-4" />

    {/* Technical Skills */}
    {Array.isArray(resumeData.skills["Technical skills"]) &&
  resumeData.skills["Technical skills"].length > 0 && (
    <div className="mb-4">
      <h3 className="font-semibold">Technical Skills</h3>
      <p className="capitalize">{resumeData.skills["Technical skills"].join(", ")}</p>
    </div>
  )}


    {/* Soft Skills */}
    {Array.isArray(resumeData.skills["Soft Skills"]) &&
      resumeData.skills["Soft Skills"].length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold">Soft Skills</h3>
          <ul className="list-disc list-inside">
            {resumeData.skills["Soft Skills"].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
  </section>
)}


        {Array.isArray(resumeData.experience) &&
          resumeData.experience.length > 0 && (
            <section className="mb-4">
              <h2 className="font-semibold mt-4">Experience</h2>
              <hr className="my-4" />
              {resumeData.experience.map((exp, index) => (
                <div key={index}>
                  <p>
                    <strong>{exp.role || "Role not provided"}</strong> at{" "}
                    {exp.company || "Company not provided"} (
                    {exp.duration || "Years not specified"})
                  </p>
                  <p>{exp.description || "No description provided"}</p>
                </div>
              ))}
            </section>
          )}

        {Array.isArray(resumeData.projects) &&
          resumeData.projects.length > 0 && (
            <section className="mb-4">
              <h2 className="font-semibold mt-4">Projects</h2>
              <hr className="my-4" />
              {resumeData.projects.map((project, index) => (
                <div key={index} className="mb-2">
                  <p className="font-semibold">
                    {project.title || "Untitled Project"} <span className="font-medium uppercase">({project.techStack})</span>
                  </p>
                  <p>{project.description || "No description available."}</p>
                </div>
              ))}
            </section>
          )}

        {resumeData.education && Array.isArray(resumeData.education) && (
          <section className="mb-4">
            <h2 className="font-semibold mt-4">Education</h2>
            <hr className="my-4" />
            {resumeData.education.map((edu, index) => (
              <p key={index}>
                {edu.degree || "Degree not specified"} -{" "}
                {edu.university || "University not specified"} ({edu.year})
              </p>
            ))}
          </section>
        )}

        {resumeData.certificates?.length > 0 && (
          <section className="mb-4">
            <h2 className="font-semibold mt-4">Certificate</h2>
            <hr className="my-4" />
            {resumeData.certificates.map((cert, idx) => (
              <p key={idx}>
                {cert.title || "Certificate"} - {cert.issuer || "Issuer"} (
                {cert.duration || " "})
              </p>
            ))}
          </section>
        )}
      </div>
      <button
        onClick={handleDownloadPDF}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download as PDF
      </button>
    </>
  );
};

export default ResumeTemplate;
