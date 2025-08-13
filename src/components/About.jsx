import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  const [selected, setSelected] = useState("education");

  return (
    <div id="about" className="mt-40" style={{ scrollMarginTop: "120px" }}>
      <div className="flex items-center justify-center mb-8">
        <div className="flex-1 border-t border-gray-400"></div>
        <h2 className="mx-4 text-2xl font-semibold text-center">About Me</h2>
        <div className="flex-1 border-t border-gray-400"></div>
      </div>

      <div className="flex items-center justify-evenly  mt-25">
        <div
          className="bg-white shadow-lg rounded-xl p-6  border border-gray-200"
          style={{ width: "600px", height: "400px" }}
        >
          {selected === "education" ? <Education /> : <Skills />}
        </div>

        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="aboutOption"
              value="education"
              checked={selected === "education"}
              onChange={() => setSelected("education")}
            />
            Education
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="aboutOption"
              value="skills"
              checked={selected === "skills"}
              onChange={() => setSelected("skills")}
            />
            Skills
          </label>
        </div>
      </div>
    </div>
  );
};

export default About;
