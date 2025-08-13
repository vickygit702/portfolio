import React from "react";
export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
      style={{
        scrollMarginTop: "120px",
        marginTop: "120px",
        marginLeft: "0",
        marginRight: "0",
      }}
    >
      <div className="flex flex-col justify-between p-4 w-full md:w-[450px] h-auto md:h-[250px]">
        <div>
          <h2 className="text-[28px] md:text-[40px]">Full Stack Developer👋</h2>
          <p className="text-[16px] md:text-[20px] text-justify">
            a passionate website developer specializing in building modern,
            scalable web applications using the MERN stack.
          </p>
        </div>

        <div className="flex items-center justify-evenly mt-4 md:mt-0">
          <img
            src="/react.svg"
            alt=""
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <img
            src="/node.svg"
            alt=""
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <img
            src="/MongoDB.svg"
            alt=""
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <img
            src="/tailwind.svg"
            alt=""
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
        </div>
      </div>

      <div
        className="flex items-center justify-center rounded-full p-2 md:p-[10px] w-[250px] h-[250px] md:w-[300px] md:h-[300px]"
        style={{ backgroundColor: "#010053" }}
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
}
