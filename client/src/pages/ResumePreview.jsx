// src/components/ResumePreview.jsx
import { useSelector } from "react-redux";
export default function ResumePreview() {
  const resume = useSelector((state) => state.resume.data);
  const header = resume.header || {};
  const skills = resume.skills || [];
  const experience = resume.experience || [];
  const education = resume.education || [];
  const certificates = resume.certificates || [];
  const projects = resume.projects || [];

  return (
    <div className="w-full max-w-lg p-6 shadow rounded text-sm font-serif" style={{ backgroundColor: "#ffff" }}>
      <h1 className="text-xl font-bold text-center">
        {header.firstName} {header.lastName}
      </h1>
      <hr className="my-4" />
      <div className="flex justify-between">
        <div className="flex items-center">
          <i className="fa-solid fa-envelope"></i>
          <p className="text-center ml-1" style={{ color: "#4B5563" }}>{header.email}</p>
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-phone"></i>
          <p className="text-center ml-1" style={{ color: "#4B5563" }}>{header.phone}</p>
        </div>
        <div className="flex items-center">
          <i class="fa-solid fa-location-dot"></i>
          <p className="text-center ml-1" style={{ color: "#4B5563" }}>
            {header.city}, {header.state}
          </p>
        </div>
      </div>
      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-4 mt-4">
          <h2 className="font-semibold" style={{ color: "#1F2937" }}>Skills</h2>
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
          <h2 className="font-semibold" style={{ color: "#1F2937" }}>Experience</h2>
          <hr className="my-4" />
          {experience.map((exp, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium">
                {exp.jobTitle} - {exp.company}{" "}
                <span className="text-sm" style={{ color: "#4B5563" }}>({exp.duration})</span>
              </p>
              {/* <p className="text-gray-600 text-sm">{exp.duration}</p> */}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.filter(
        (p) =>
          (p.projectTitle && p.projectTitle.trim() !== "") ||
          (p.description && p.description.trim() !== "")
      ).length > 0 && (
        <section className="mb-4">
          <h2 className="font-semibold" style={{ color: "#1F2937" }}>Projects</h2>
          <hr className="my-4" />
          {projects
            .filter(
              (p) =>
                (p.projectTitle && p.projectTitle.trim() !== "") ||
                (p.description && p.description.trim() !== "")
            )
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
          <h2 className="font-semibold" style={{ color: "#1F2937" }}>Education</h2>
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
      {certificates.filter(
        (cert) =>
          (cert.certificate && cert.certificate.trim() !== "") ||
          (cert.issuer && cert.issuer.trim() !== "")
      ).length > 0 && (
        <section className="mb-4">
          <h2 className="font-semibold" style={{ color: "#1F2937" }}>Certificate</h2>
          <hr className="my-4" />
          {certificates
            .filter(
              (cert) =>
                (cert.certificate && cert.certificate.trim() !== "") ||
                (cert.issuer && cert.issuer.trim() !== "")
            )
            .map((cert, i) => (
              <div key={i}>
                <p className="font-medium">{cert.certificate}</p>
                <p className="text-sm" style={{ color: "#4B5563" }}>{cert.issuer}</p>
              </div>
            ))}
        </section>
      )}
    </div>
  );
}
