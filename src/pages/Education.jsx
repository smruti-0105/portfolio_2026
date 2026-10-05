import React from "react";

const Education = () => {
  return (
    <section className="min-h-screen pt-32 px-6">
      <div className="max-w-3xl mt-10 h-7">
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-medium">B.Tech in Computer Science</h2>

          <p className="text-gray-600 mt-2">
            Gandhi Institute of Excellent Technocrats
          </p>

          <p className="text-gray-500 mt-2">2023 – 2027</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-medium">Higher Secondary Education</h2>

          <p className="text-gray-600 mt-2">Science Stream</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
