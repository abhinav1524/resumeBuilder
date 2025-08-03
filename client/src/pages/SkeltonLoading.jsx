import React from "react";

const SkeltonLoading = () => {
  return (
    <div className="w-full max-w-lg p-6 shadow rounded text-sm font-serif bg-white animate-pulse">
      {/* Header */}
      <h1 className="text-xl font-bold text-center h-6 bg-gray-300 rounded w-1/2 mx-auto mb-4"></h1>
      <hr className="my-4" />

      {/* Contact Section */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-28 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Skills */}
      <section className="mb-4 mt-6">
        <h2 className="font-semibold text-gray-700">Skills</h2>
        <hr className="my-4" />
        <ul className="space-y-2">
          <li className="h-4 w-32 bg-gray-300 rounded"></li>
          <li className="h-4 w-24 bg-gray-300 rounded"></li>
          <li className="h-4 w-28 bg-gray-300 rounded"></li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-4">
        <h2 className="font-semibold text-gray-700">Experience</h2>
        <hr className="my-4" />
        <div className="space-y-2">
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-4">
        <h2 className="font-semibold text-gray-700">Projects</h2>
        <hr className="my-4" />
        <div className="space-y-2">
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-4">
        <h2 className="font-semibold text-gray-700">Education</h2>
        <hr className="my-4" />
        <div className="space-y-2">
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        </div>
      </section>

      {/* Certificates */}
      <section className="mb-4">
        <h2 className="font-semibold text-gray-700">Certificate</h2>
        <hr className="my-4" />
        <div className="space-y-2">
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        </div>
      </section>
    </div>
  );
};

export default SkeltonLoading;
