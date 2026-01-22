import { URL_ENUM } from "../../../enums/UrlEnum.ts";
import { useTheme } from "../../../ThemeContext.tsx";

export default function Projects() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const projects = [
    {
      title: "Hemat Kuy",
      description:
        "Hemat Kuy is a user-friendly app designed to help students and young adults manage their money better. It simplifies daily expense tracking, helps users set monthly budget limits, and provides clear reports to prevent overspending. The goal is to make financial management simple, accessible, and stress-free.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      link: URL_ENUM.HEMAT_KUY,
    },
    {
      title: "Teknologi Peentar App",
      description:
        "Company Profile - Built a professional company profile website for Teknologi Peentar to enhance its digital presence. Focused on scalable component architecture and responsive design to ensure a seamless user experience across all devices while strengthening corporate branding.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: URL_ENUM.PEENTAR,
    },
  ];

  return (
    <section
      id="projects"
      className={`flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 border-b
        ${isDarkTheme ? "border-white/50" : "border-black/50"}`}
    >
      <div className="flex flex-col justify-center items-center space-y-3 max-w-full lg:max-w-md flex-1">
        <div className="flex flex-col gap-3 h-auto w-full pb-3">
          <p
            className={`font-bold text-transparent bg-clip-text text-sm tracking-wide uppercase transition-colors duration-300 ${
              isDarkTheme
                ? "bg-gradient-to-r from-blue-400 to-purple-400"
                : "bg-gradient-to-r from-purple-600 to-blue-600"
            }`}
          >
            Portfolio
          </p>

          <p
            className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
              isDarkTheme ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Explore my latest projects where creativity meets functionality.
            Each project represents a unique challenge solved with modern web
            technologies and thoughtful design
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 lg:gap-6`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`backdrop-blur-lg rounded-2xl p-4 sm:p-6 border transform transition-all duration-300 hover:scale-105 ${
                isDarkTheme
                  ? "bg-white/10 border-white/20 hover:bg-white/15"
                  : "bg-black/5 border-black/10 hover:bg-black/10"
              }`}
            >
              <h3
                className={`font-bold text-lg sm:text-xl mb-2 transition-colors duration-300 ${
                  isDarkTheme ? "text-white" : "text-black"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`text-xs max-w-xl text-wrap sm:text-sm mb-3 sm:mb-4 leading-relaxed transition-colors duration-300 ${
                  isDarkTheme ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className={`inline-flex items-center transition-colors duration-200 text-xs sm:text-sm font-medium ${
                  isDarkTheme
                    ? "text-purple-400 hover:text-purple-300"
                    : "text-purple-600 hover:text-purple-700"
                }`}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
