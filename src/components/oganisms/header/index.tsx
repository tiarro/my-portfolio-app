import React, { useState } from "react";
import ButtonProps from "../../atoms/button";
import { useTheme } from "../../../ThemeContext.tsx";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDarkTheme = theme === 'dark';

  return (
    <header id="header" className={`fixed top-0 left-0 right-0 z-50 w-full flex flex-row items-center justify-between px-4 py-4 md:px-8 transition-colors duration-300 ${
      isDarkTheme ? 'bg-blue-600 backdrop-blur-lg' : 'bg-blue-700/70 backdrop-blur-lg'
    }`}>
      <div className="flex items-center">
        <p className={`font-bold tracking-wider text-lg md:text-xl transition-colors duration-300 ${
          isDarkTheme ? 'text-white' : 'text-white'
        }`}>Tiarro.dev</p>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        <ButtonProps 
          text 
          icon={isDarkTheme ? "pi pi-sun" : "pi pi-moon"} 
          onClick={toggleTheme} 
          className={`rounded-full font-bold transition-all duration-300 ${
            isDarkTheme 
              ? 'bg-transparent text-white hover:bg-white/10' 
              : 'bg-transparent text-white hover:bg-black/10'
          }`} 
        />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2">
        <ButtonProps 
          text 
          icon={isDarkTheme ? "pi pi-sun" : "pi pi-moon"} 
          onClick={toggleTheme} 
          className={`rounded-full text-sm transition-all duration-300 ${
            isDarkTheme 
              ? 'bg-transparent text-white hover:bg-white/10' 
              : 'bg-transparent text-white hover:bg-black/10'
          }`} 
        />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-lg transition-colors duration-300 ${
            isDarkTheme 
              ? 'text-white hover:bg-white/10' 
              : 'text-white hover:bg-black/10'
          }`}
        >
          <i className={`pi ${isMenuOpen ? 'pi-times' : 'pi-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`absolute top-full left-0 right-0 backdrop-blur-lg border-t md:hidden z-50 transition-colors duration-300 ${
          isDarkTheme 
            ? 'bg-black/90 border-white/20' 
            : 'bg-white/90 border-black/20'
        }`}>
          <div className="flex flex-col p-4 space-y-2">
            <a href="#about" className={`py-2 transition-colors ${
              isDarkTheme 
                ? 'text-white hover:text-purple-400' 
                : 'text-black hover:text-purple-600'
            }`}>About</a>
            <a href="#projects" className={`py-2 transition-colors ${
              isDarkTheme 
                ? 'text-white hover:text-purple-400' 
                : 'text-black hover:text-purple-600'
            }`}>Projects</a>
            <a href="#contact" className={`py-2 transition-colors ${
              isDarkTheme 
                ? 'text-white hover:text-purple-400' 
                : 'text-black hover:text-purple-600'
            }`}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
