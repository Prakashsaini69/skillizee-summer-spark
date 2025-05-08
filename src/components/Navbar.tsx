
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-skillizee-blue">
            SkilliZee
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-700 hover:text-skillizee-blue">
            About
          </a>
          <a href="#skills" className="text-gray-700 hover:text-skillizee-blue">
            Skills
          </a>
          <a href="#register" className="text-gray-700 hover:text-skillizee-blue">
            Register
          </a>
          <a href="#contact" className="text-gray-700 hover:text-skillizee-blue">
            Contact
          </a>
          <Button className="bg-skillizee-orange hover:bg-skillizee-orange/90 text-white">
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-6 shadow-md">
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-gray-700 hover:text-skillizee-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-skillizee-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#register"
              className="text-gray-700 hover:text-skillizee-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-skillizee-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              className="bg-skillizee-orange hover:bg-skillizee-orange/90 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
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
