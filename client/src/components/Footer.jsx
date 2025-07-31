import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white p-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SmartResumeAI — Made with ❤️ in India
      </footer>
    </>
  );
};

export default Footer;
