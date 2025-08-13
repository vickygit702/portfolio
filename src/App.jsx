import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { Github, Download, PhoneIcon, MailIcon } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [showPhone, setShowPhone] = useState(false);
  const [showMail, setShowMail] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col relative ">
      <Navbar />

      <main className="flex-1 px-[250px]">
        <div className="fixed" style={{ top: "250px", left: "85px" }}>
          <a href="https://github.com/vickygit702" target="blank">
            <Github size={35} color="black" />
          </a>
        </div>
        <div className="fixed" style={{ top: "350px", left: "85px" }}>
          <a href="/resume.pdf" download="Vignesh_Resume.pdf">
            <Download size={35} color="green" />
          </a>
        </div>

        <div
          className="fixed flex items-center"
          style={{ top: "450px", left: "85px" }}
          onMouseEnter={() => setShowPhone(true)}
          onMouseLeave={() => setShowPhone(false)}
        >
          <PhoneIcon size={35} color="blue" />

          {showPhone && (
            <span className="ml-3 bg-white border border-gray-300 shadow-lg px-3 py-1 rounded text-sm">
              +91 9514232364
            </span>
          )}
        </div>

        <div
          className="fixed flex items-center"
          style={{ top: "550px", left: "85px" }}
          onMouseEnter={() => setShowMail(true)}
          onMouseLeave={() => setShowMail(false)}
        >
          <MailIcon size={35} color="red" />

          {showMail && (
            <span className="ml-3 bg-white border border-gray-300 shadow-lg px-3 py-1 rounded text-sm">
              vigneshhari702@gmail.com
            </span>
          )}
        </div>

        <section className="my-12">
          <Hero />
          <About />
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
}
