import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { Github, Download, PhoneIcon, MailIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [showPhone, setShowPhone] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <Navbar />

      <main className="flex-1 px-4 md:px-8 lg:px-[250px]">
        {/* Desktop Side Icons */}
        {!isMobile && (
          <>
            <div className="fixed" style={{ top: "250px", left: "30px" }}>
              <a
                href="https://github.com/vickygit702"
                target="blank"
                rel="noopener noreferrer"
              >
                <Github size={35} color="black" />
              </a>
            </div>
            <div className="fixed" style={{ top: "350px", left: "30px" }}>
              <a href="/resume.pdf" download="Vignesh_Resume.pdf">
                <Download size={35} color="green" />
              </a>
            </div>

            <div
              className="fixed flex items-center"
              style={{ top: "450px", left: "30px" }}
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
              style={{ top: "550px", left: "30px" }}
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
          </>
        )}

        <section className="my-12">
          <Hero />

          {/* Mobile Icons Below Profile Pic */}
          {isMobile && (
            <div className="flex justify-center gap-8 mt-6 mb-12">
              <a
                href="https://github.com/vickygit702"
                target="blank"
                rel="noopener noreferrer"
              >
                <Github size={30} color="black" />
              </a>
              <a href="/resume.pdf" download="Vignesh_Resume.pdf">
                <Download size={30} color="green" />
              </a>
              <div
                className="relative"
                onClick={() => setShowPhone(!showPhone)}
              >
                <PhoneIcon size={30} color="blue" />
                {showPhone && (
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-300 shadow-lg px-3 py-1 rounded text-sm whitespace-nowrap">
                    +91 9514232364
                  </span>
                )}
              </div>
              <div className="relative" onClick={() => setShowMail(!showMail)}>
                <MailIcon size={30} color="red" />
                {showMail && (
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-300 shadow-lg px-3 py-1 rounded text-sm whitespace-nowrap">
                    vigneshhari702@gmail.com
                  </span>
                )}
              </div>
            </div>
          )}

          <About />
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
}
