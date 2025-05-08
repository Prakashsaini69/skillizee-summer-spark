
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check system preference and saved preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-skillizee-blue dark:text-skillizee-blue">
            SkilliZee
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            onClick={() => scrollToSection('about')} 
            className="text-gray-700 dark:text-gray-300 hover:text-skillizee-blue dark:hover:text-skillizee-blue cursor-pointer"
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection('skills')} 
            className="text-gray-700 dark:text-gray-300 hover:text-skillizee-blue dark:hover:text-skillizee-blue cursor-pointer"
          >
            Skills
          </a>
          <a 
            onClick={() => scrollToSection('testimonials')} 
            className="text-gray-700 dark:text-gray-300 hover:text-skillizee-blue dark:hover:text-skillizee-blue cursor-pointer"
          >
            Testimonials
          </a>
          <a 
            onClick={() => scrollToSection('register')} 
            className="text-gray-700 dark:text-gray-300 hover:text-skillizee-blue dark:hover:text-skillizee-blue cursor-pointer"
          >
            Register
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-700 dark:text-gray-300 hover:text-skillizee-blue dark:hover:text-skillizee-blue cursor-pointer"
          >
            Contact
          </a>
          
          <div className="flex items-center space-x-2 ml-2">
            <Sun size={18} className={`text-yellow-500 ${!isDarkMode ? 'opacity-100' : 'opacity-50'}`} />
            <Switch 
              checked={isDarkMode}
              onCheckedChange={toggleDarkMode}
              className="data-[state=checked]:bg-skillizee-blue"
            />
            <Moon size={18} className={`text-gray-700 dark:text-white ${isDarkMode ? 'opacity-100' : 'opacity-50'}`} />
          </div>
          
          <Button 
            onClick={() => scrollToSection('register')}
            className="bg-skillizee-orange hover:bg-skillizee-orange/90 text-white dark:bg-skillizee-orange dark:hover:bg-skillizee-orange/90 dark:text-white"
          >
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <div className="flex items-center mr-4">
            <Switch 
              checked={isDarkMode}
              onCheckedChange={toggleDarkMode}
              className="data-[state=checked]:bg-skillizee-blue"
            />
            {isDarkMode ? (
              <Moon size={18} className="ml-2 text-white" />
            ) : (
              <Sun size={18} className="ml-2 text-yellow-500" />
            )}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 w-full py-4 px-6 shadow-md">
          <div className="flex flex-col space-y-4">
            <a
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-skillizee-blue dark:hover:text-skillizee-blue cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-skillizee-blue dark:hover:text-skillizee-blue cursor-pointer"
            >
              Skills
            </a>
            <a
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 dark:text-gray-300 hover:text-skillizee-blue dark:hover:text-skillizee-blue cursor-pointer"
            >
              Testimonials
            </a>
            <a
              onClick={() => scrollToSection('register')}
              className="text-gray-700 dark:text-gray-300 hover:text-skillizee-blue dark:hover:text-skillizee-blue cursor-pointer"
            >
              Register
            </a>
            <a
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-skillizee-blue dark:hover:text-skillizee-blue cursor-pointer"
            >
              Contact
            </a>
            <Button
              className="bg-skillizee-orange hover:bg-skillizee-orange/90 text-white dark:bg-skillizee-orange dark:hover:bg-skillizee-orange/90 dark:text-white w-full"
              onClick={() => scrollToSection('register')}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
