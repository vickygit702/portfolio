import React from "react";

const Education = () => {
  return (
    <div className="animate-fadeInUp  px-2 ">
      <img
        src="/psnacollege.png"
        alt="Education"
        className="w-full rounded-lg"
        style={{ height: "200px" }}
      />
      <div
        className="text-center text-lg flex flex-col justify-evenly items-center"
        style={{ height: "100px" }}
      >
        <h4 className="text-blue-600 font-bold">
          PSNA College of Engineering & Technology
        </h4>

        <p className="text-pink-700 ">
          Bachelore of Technology
          <span className="font-medium"> - IT</span>
        </p>

        <p className="text-green-700">
          <span className="font-medium">Year:</span> 2022 - 2025
        </p>
      </div>

      {/* Extra line */}
      <p className="mt-2 text-sm text-gray-500 italic text-center ">
        Graduated in 2025 with a strong foundation in software development and
        modern web technologies.
      </p>
      {/* Inline styles */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Education;
