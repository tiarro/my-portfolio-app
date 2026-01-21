import React from "react";
import "./App.css";
import Header from "./components/oganisms/header";
import Footer from "./components/oganisms/footer";
import About from "./components/oganisms/about";
import Home from "./components/oganisms/home";
import Projects from "./components/oganisms/projects";
import { Toast } from "primereact/toast";
import { SpeedDial } from "primereact/speeddial";
import { useRef } from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import Contact from "./components/oganisms/contact";

function App() {
  const toast = useRef<Toast | null>(null);
  const items = [
    {
      label: "Home",
      icon: <FaHome />,
      command: () => {
        document.getElementById("home")?.scrollIntoView({
        behavior: "smooth",
      });
      }
    },
    {
      label: "About",
      icon: <CgProfile />,
      command: () => {
        document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
      },
    },
    {
      label: "Portfolio",
      icon: <GrProjects />,
      command: () => {
        document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
      });
      },
    },
    {
      label: "Contact",
      icon: <FiPhoneCall />,
      command: () => {
        document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
      },
    },
  ];
  return (
    <main className="flex flex-col items-center min-h-screen w-full overflow-x-hidden">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <div className="fixed bottom-0 right-0 z-50 w-full h-16 flex items-center justify-center">
        <Toast ref={toast} />
        <SpeedDial
          model={items}
          direction="up"
          transitionDelay={80}
          showIcon="pi pi-bars"
          hideIcon="pi pi-times"
          className="speeddial-style right-16 bottom-10 gap-3"
          buttonClassName="p-button-outlined h-16 w-16 rounded-full"
        />
      </div>
    </main>
  );
}

export default App;
