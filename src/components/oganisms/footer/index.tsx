import { useTheme } from "../../../ThemeContext.tsx";

export default function Footer() {
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';

    return (
        <footer id="footer" className="w-full">
            <div className={`backdrop-blur-lg border-t py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
                isDarkTheme 
                    ? 'bg-black/30 border-white/20' 
                    : 'bg-black border-black/20'
            }`}>
                <div className="max-w-6xl mx-auto">
                    <p className={`text-sm sm:text-md lg:text-lg font-semibold transition-colors duration-300 text-center sm:text-left ${
                        isDarkTheme ? 'text-gray-400' : 'text-white'
                    }`}>
                        Copyright 2026. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}