import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-[90px] bg-white shadow flex items-center justify-between px-8 fixed top-0 z-50">
      <h1
        className="text-[30px] cursor-pointer"
        style={{ fontFamily: "Irish Grover" }}
        onClick={() => scrollToSection("home")}
      >
        Vicky.dev
      </h1>

      <div className="flex gap-8 text-sm">
        <button
          onClick={() => scrollToSection("home")}
          className="hover:text-blue-500"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-blue-500"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-blue-500"
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default Navbar;
