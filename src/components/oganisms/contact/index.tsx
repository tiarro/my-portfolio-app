import { URL_ENUM } from "../../../enums/UrlEnum.ts";
import { useTheme } from "../../../ThemeContext.tsx";

export default function Contact() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const contactInfo = [
    {
      icon: "pi pi-envelope",
      label: "Email",
      value: "tiarroelprida11@gmail.com",
      link: URL_ENUM.EMAIL,
    },
    {
      icon: "pi pi-whatsapp",
      label: "WhatsApp",
      value: "087898401241",
      link: URL_ENUM.WHATSAPP,
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
    >
      <div className="flex flex-col justify-center items-center w-full max-w-4xl lg:max-w-6xl flex-1">
        <div className="flex h-auto w-full mb-4 sm:mb-6">
          <p
            className={`font-bold text-transparent bg-clip-text text-xs sm:text-sm tracking-wide uppercase transition-colors duration-300 ${
              isDarkTheme
                ? "bg-gradient-to-r from-blue-400 to-purple-400"
                : "bg-gradient-to-r from-purple-600 to-blue-600"
            }`}
          >
            Contact
          </p>
        </div>

        <div className="w-full text-center">
          <h2
            className={`font-bold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 transition-colors duration-300 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Don't hesitate to get in touch !!!
          </h2>
          <p
            className={`mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
              isDarkTheme ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm always interested in hearing about new opportunities and
            exciting projects. Feel free to reach out if you'd like to
            collaborate or just have a chat!
          </p>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12`}
          >
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`backdrop-blur-lg w-full sm:w-auto rounded-xl p-4 sm:p-6 lg:p-8 border transform transition-all duration-300 hover:scale-105 group ${
                  isDarkTheme
                    ? "bg-white/10 border-white/20 hover:bg-white/15"
                    : "bg-blue-500/10 border-black/10 hover:bg-blue-700/20"
                }`}
              >
                <div
                  className={`text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-all duration-300 ${
                    isDarkTheme
                      ? "text-purple-400 group-hover:text-purple-300"
                      : "text-purple-600 group-hover:text-purple-700"
                  }`}
                >
                  <i className={contact.icon}></i>
                </div>
                <p
                  className={`text-xs sm:text-sm lg:text-base mb-1 sm:mb-2 transition-colors duration-300 ${
                    isDarkTheme ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {contact.label}
                </p>
                <p
                  className={`font-medium text-xs sm:text-sm lg:text-base break-all transition-colors duration-300 ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
