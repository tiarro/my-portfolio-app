import { MyImage } from "../../../assets/img";
import { useTheme } from "../../../ThemeContext";
import { Image } from "primereact/image";
import { FaLinkedin, FaGithub, FaReact, FaSass, FaDownload } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { URL_ENUM } from "../../../enums/UrlEnum";
import { Button } from "primereact/button";

export default function Home() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <section
      id="home"
      className={`flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 border-b
        ${isDarkTheme ? "border-white/50" : "border-black/50"}`}
    >
      <div
        className={`flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 backdrop-blur-lg max-w-6xl mx-auto w-full ${
          isDarkTheme ? "bg-transparent" : "bg-transparent"
        }`}
      >
        <div className="relative group flex-shrink-0 mx-auto lg:mx-0">
          <div
            className={`absolute -inset-4 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 scale-125 ${
              isDarkTheme
                ? "bg-gradient-to-r from-purple-600 to-pink-600"
                : "bg-gradient-to-r from-blue-600 to-purple-600"
            }`}
          ></div>
          <Image
            src={MyImage}
            alt="Logo"
            width="155"
            height="155"
            className={`relative rounded-full border-4 shadow-xl w-42 h-42 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-cover transition-colors duration-300 ${
              isDarkTheme ? "border-white/50" : "border-black/50"
            }`}
          />
        </div>

        <div className="flex flex-col space-y-4 sm:space-y-6 max-w-full lg:max-w-xl text-center lg:text-left flex-1">
          <h1
            className={`font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight transition-colors duration-300 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Front-End Web Developer
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 ${
              isDarkTheme ? "text-gray-200" : "text-gray-600"
            }`}
          >
            Hi, I'm <strong>Tiarro Elprida Tamba</strong>. A passionate Front-End Web Developer{" "}
            <br className="hidden sm:block" />
            with 4 years of professional experience building responsive and{" "}
            <br className="hidden sm:block" />
            user-friendly web applications.
          </p>

          <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
            <FaLinkedin className={`text-2xl sm:text-3xl transition-colors duration-300 cursor-pointer ${
              isDarkTheme ? "text-white hover:text-blue-400" : "text-black hover:text-blue-800"
            }`} onClick={() => window.open(URL_ENUM.LINKEDIN, "_blank")} />
            <FaGithub className={`text-2xl sm:text-3xl transition-colors duration-300 cursor-pointer ${
              isDarkTheme ? "text-white hover:text-gray-400" : "text-black hover:text-gray-800"
            }`} onClick={() => window.open(URL_ENUM.GITHUB, "_blank")} />
            <Button 
              className={`gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isDarkTheme 
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0" 
                  : "bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white border-0"
              }`}
              onClick={() => window.open(URL_ENUM.RESUME_PDF, "_blank")}
            >
              <FaDownload className="text-sm sm:text-base lg:text-lg" />
              Lihat CV
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 backdrop-blur-lg max-w-4xl lg:max-w-6xl mx-auto w-full ${
          isDarkTheme ? "bg-white/10 border-white/20 rounded-2xl sm:rounded-3xl" : "bg-transparent"
        }`}
      >
            <span className={`font-bold text-base sm:text-lg lg:text-xl ${
              isDarkTheme ? "text-white" : "text-black"
            }`}>Tech Stack</span>
            <span className={`hidden sm:block ${
              isDarkTheme ? "text-white/50" : "text-black/50"
            }`}>|</span>
            <div className="flex gap-4 sm:gap-6 lg:gap-7 flex-wrap justify-center">
                <FaReact className="text-2xl sm:text-3xl lg:text-4xl text-blue-500 hover:text-blue-800 transition-colors duration-300" />
                <RiNextjsFill className={`text-2xl sm:text-3xl lg:text-4xl transition-colors duration-300 ${
                  isDarkTheme ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"
                }`}/>
                <DiJavascript className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 hover:text-blue-800 transition-colors duration-300"/>
                <SiTypescript className="text-2xl sm:text-3xl lg:text-4xl text-blue-500 hover:text-blue-800 transition-colors duration-300"/>
                <FaSass className="text-2xl sm:text-3xl lg:text-4xl text-pink-500 hover:text-pink-800 transition-colors duration-300"/>
                <SiTailwindcss className="text-2xl sm:text-3xl lg:text-4xl text-blue-500 hover:text-blue-800 transition-colors duration-300"/>
            </div>
        </div>
    </section>
  );
}
