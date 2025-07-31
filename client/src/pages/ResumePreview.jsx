// src/components/ResumePreview.jsx
import { useSelector } from "react-redux";
import { MapPinned, Phone, Mail, MapIcon } from "lucide-react";
export default function ResumePreview() {
  const resume = useSelector((state) => state.resume.data);
  const header = resume.header || {};
  const skills = resume.skills || [];
  const experience = resume.experience || [];
  const education = resume.education || [];
  const certificates = resume.certificates || [];
  const projects = resume.projects || [];

  return (
    <div className="w-full max-w-lg bg-white p-6 shadow rounded text-sm font-serif">
      <h1 className="text-xl font-bold text-center">
        {header.firstName} {header.lastName}
      </h1>
      <hr className="my-4" />
      <div className="flex justify-between">
        <div className="flex items-center">
          <Mail size={16} strokeWidth={1.5} />
          <p className="text-center text-gray-600 ml-1">{header.email}</p>
        </div>
        <div className="flex items-center">
          <Phone size={16} strokeWidth={1.5} />
          <p className="text-center text-gray-600 ml-1">{header.phone}</p>
        </div>
        <div className="flex items-center">
          <MapPinned size={20} strokeWidth={1.5} />
          <p className="text-center text-gray-600 ml-1">
            {header.city}, {header.state}
          </p>
        </div>
      </div>
      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-4 mt-4">
          <h2 className="font-semibold text-gray-800">Skills</h2>
          <hr className="my-4" />
          <ul className="list-disc list-inside text-gray-700 mt-1">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-4">
          <h2 className="font-semibold text-gray-800">Experience</h2>
          <hr className="my-4" />
          {experience.map((exp, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium">
                {exp.jobTitle} - {exp.company}{" "}
                <span className="text-gray-600 text-sm">({exp.duration})</span>
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
          <h2 className="font-semibold text-gray-800">Projects</h2>
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
                <p className="text-gray-600 text-sm">{proj.description}</p>
              </div>
            ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-4">
          <h2 className="font-semibold text-gray-800">Education</h2>
          <hr className="my-4" />
          {education.map((edu, i) => (
            <div key={i}>
              <p className="font-medium">{edu.degree}</p>
              <p className="text-gray-600 text-sm">
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
          <h2 className="font-semibold text-gray-800">Certificate</h2>
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
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
              </div>
            ))}
        </section>
      )}
    </div>
  );
}
