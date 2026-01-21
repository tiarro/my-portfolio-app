import { Image } from "primereact/image";
import { LaptopCoding } from "../../../assets/img/index.ts";
import { useTheme } from "../../../ThemeContext.tsx";

export default function About() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <section
      id="about"
className={`flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 border-b
        ${isDarkTheme ? "border-white/50" : "border-black/50"}`}
    >
      <div
        className={`flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 backdrop-blur-lg rounded-3xl shadow-xl border max-w-6xl mx-auto w-full ${
          isDarkTheme
            ? "bg-white/10 border-white/20"
            : "bg-gray-100 border-black/20"
        }`}
      >
        <div className="flex flex-col space-y-3 max-w-full lg:max-w-md text-center lg:text-left flex-1">
          <p
            className={`font-bold text-transparent bg-clip-text text-sm tracking-wide uppercase transition-colors duration-300 ${
              isDarkTheme
                ? "bg-gradient-to-r from-blue-400 to-purple-400"
                : "bg-gradient-to-r from-purple-600 to-blue-600"
            }`}
          >
            ABOUT ME
          </p>
          <h1
            className={`font-bold text-xl sm:text-2xl md:text-3xl leading-tight transition-colors duration-300 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            A Dedicated Front-end Web Developer
          </h1>
          <p
            className={`text-xs sm:text-sm md:text-base leading-relaxed transition-colors duration-300 mt-2 md:mt-4 ${
              isDarkTheme ? "text-gray-200" : "text-gray-700"
            }`}
          >
            As a mid-level Frontend Web Developer with 4 years of professional
            experience building responsive and user-friendly web applications
            using React, Next.js, and TypeScript. Experienced in applying modern
            state management patterns such as React Hooks, Zustand, and MobX to
            handle complex UI logic. Skilled in integrating backend APIs,
            implementing real-time updates, optimizing functionality for better
            performance, parsing uploaded Excel files and visualizing extracted
            data into dynamic tables. Focused on clean code, performance, and
            user-centered web solutions
          </p>
        </div>

        <div className="relative group flex-shrink-0">
          <Image
            src={LaptopCoding}
            alt="Logo"
            width="400"
            height="400"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
