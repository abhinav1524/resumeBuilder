import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { MapPinned, Phone, Mail } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumePreview = () => {
  const resume = useSelector((state) => state.resume.data);
  const header = resume.header || {};
  const skills = resume.skills || [];
  const experience = resume.experience || [];
  const education = resume.education || [];
  const certificates = resume.certificates || [];
  const projects = resume.projects || [];

  const printRef = useRef();

  const handleDownloadPDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div id="main_content" className="flex flex-col items-center justify-center min-h-screen py-10" style={{ backgroundColor: "#f3f4f6" }}>
      <div
        ref={printRef}
        className="w-full max-w-xl p-6 shadow rounded text-sm font-serif"
        style={{backgroundColor: "#ffff"}}
      >
        <h1 className="text-xl font-bold text-center">
          {header.firstName} {header.lastName}
        </h1>
        <hr className="my-4" />

        <div className="flex justify-between" style={{display:"flex",justifyContent:"space-between"}}>
          <div className="flex items-center" style={{display:"flex",justifyContent:"center"}}>
            <i className="fa-solid fa-envelope"></i>
            <p className="text-center ml-1" style={{ color: "#4B5563" }}>{header.email}</p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-phone"></i>
            <p className="text-center ml-1" style={{ color: "#4B5563" }}>{header.phone}</p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-location-dot"></i>
            <p className="text-center ml-1" style={{ color: "#4B5563" }}>
              {header.city}, {header.state}
            </p>
          </div>
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <section className="mb-4 mt-4">
            <h2 className="font-bold" style={{ color: "#1F2937" }}>Skills</h2>
            <hr className="my-4" />
            <ul className="list-disc list-inside mt-1" style={{ color: "#374151" }}>
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-4">
            <h2 className="font-bold" style={{ color: "#1F2937" }}>Experience</h2>
            <hr className="my-4" />
            {experience.map((exp, i) => (
              <div key={i} className="mb-2">
                <p className="font-medium">
                  {exp.jobTitle} - {exp.company}{" "}
                  <span className="text-sm" style={{ color: "#4B5563" }}>
                    ({exp.duration})
                  </span>
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects.filter((p) => p.projectTitle || p.description).length > 0 && (
          <section className="mb-4">
            <h2 className="font-bold" style={{ color: "#1F2937" }}>Projects</h2>
            <hr className="my-4" />
            {projects
              .filter((p) => p.projectTitle || p.description)
              .map((proj, i) => (
                <div key={i} className="mb-2">
                  <p className="font-medium">{proj.projectTitle}</p>
                  <p className="text-sm" style={{ color: "#4B5563" }}>{proj.description}</p>
                </div>
              ))}
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section className="mb-4">
            <h2 className="font-bold" style={{ color: "#1F2937" }}>Education</h2>
            <hr className="my-4" />
            {education.map((edu, i) => (
              <div key={i}>
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm" style={{ color: "#4B5563" }}>
                  {edu.institution} ({edu.year})
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Certificates */}
        {certificates.filter((c) => c.certificate || c.issuer).length > 0 && (
          <section className="mb-4">
            <h2 className="font-bold" style={{ color: "#1F2937" }}>Certificate</h2>
            <hr className="my-4" />
            {certificates
              .filter((c) => c.certificate || c.issuer)
              .map((cert, i) => (
                <div key={i}>
                  <p className="font-medium">{cert.certificate}</p>
                  <p className="text-sm" style={{ color: "#4B5563" }}>{cert.issuer}</p>
                </div>
              ))}
          </section>
        )}
      </div>

      <button
        onClick={handleDownloadPDF}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      >
        Download PDF
      </button>
    </div>
  );
};

export default ResumePreview;
