import React from "react";
export default function Hero() {
  return (
    <div
      id="home"
      className=" flex items-center justify-between"
      style={{
        scrollMarginTop: "280px",
        marginTop: "280px",
        marginLeft: "70px",
        marginRight: "70px",
      }}
    >
      <div
        className="flex flex-col justify-between p-4"
        style={{ width: "450px", height: "250px" }}
      >
        <div>
          <h2 className="text-[40px]">Full Stack Developer👋</h2>
          <p className="text-[20px] text-justify">
            a passionate website developer specializing in building modern,
            scalable web applications using the MERN stack.
          </p>
        </div>

        <div className="flex items-center justify-evenly">
          <img src="/react.svg" alt="" className="w-10 h-10 object-contain" />
          <img src="/node.svg" alt="" className="w-10 h-10 object-contain" />
          <img src="/MongoDB.svg" alt="" className="w-10 h-10 object-contain" />
          <img
            src="/tailwind.svg"
            alt=""
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>

      <div
        className=" items-center rounded-full p-[10px]"
        style={{ width: "300px", height: "300px", backgroundColor: "#010053" }}
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
