import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("progLang");

  const progressBar = (label, percent) => (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div
          className="bg-blue-700 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="animate-fadeInUp">
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "progLang" ? "bg-blue-500 text-white" : "bg-blue-100"
          }`}
          onClick={() => setActiveTab("progLang")}
        >
          Prog Lang
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "webDev" ? "bg-blue-500 text-white" : "bg-blue-100"
          }`}
          onClick={() => setActiveTab("webDev")}
        >
          Web Dev
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "tools" ? "bg-blue-500 text-white" : "bg-blue-100"
          }`}
          onClick={() => setActiveTab("tools")}
        >
          Tools & IDE's
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "softSkills"
              ? "bg-blue-500 text-white"
              : "bg-blue-100"
          }`}
          onClick={() => setActiveTab("softSkills")}
        >
          Soft Skills
        </button>
      </div>

      <div>
        {activeTab === "progLang" && (
          <>
            {progressBar("Java", 85)}
            {progressBar("Python", 50)}
            {progressBar("JavaScript", 70)}
          </>
        )}

        {activeTab === "webDev" && (
          <>
            {progressBar("Spring", 50)}
            {progressBar("React", 90)}
            {progressBar("Express.js", 65)}
            {progressBar("MongoDB", 60)}
            {progressBar("Node.js", 75)}
            {progressBar("Tailwind", 60)}
          </>
        )}

        {activeTab === "tools" && (
          <ul className="list-none text-center">
            <li className="bg-transparent border-2 p-5 rounded-lg">VS Code</li>
            <li className="bg-transparent border-2 p-5 rounded-lg mt-2">
              GitHub
            </li>
            <li className="bg-transparent border-2 p-5 rounded-lg mt-2">
              Spring Tool Suite
            </li>
            <li className="bg-transparent border-2 p-5 rounded-lg mt-2">
              IntelliJ IDEA
            </li>
          </ul>
        )}

        {activeTab === "softSkills" && (
          <ul className="list-none text-center">
            <li className="bg-transparent border-2 p-5 rounded-lg">
              Collaborative
            </li>
            <li className="bg-transparent border-2 p-5 rounded-lg mt-2">
              Problem Solving
            </li>
            <li className="bg-transparent border-2 p-5 rounded-lg mt-2">
              Work Efficient
            </li>
          </ul>
        )}
      </div>
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

export default Skills;
