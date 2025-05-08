import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
      <div className="flex items-center">
        <img
          src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1746163040/SkilliZee_Blue_Logo_r0lzx2.svg" // ← Replace with your actual logo URL
          alt="SkilliZee Logo"
          className="h-10 w-auto"
        />
      </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {["about", "skills", "testimonials", "register", "contact"].map((section) => (
            <a
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-700 hover:text-skillizee-blue cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <Button
            onClick={() => scrollToSection("register")}
            className="bg-skillizee-orange hover:bg-skillizee-orange/90 text-white"
          >
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
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
            {["about", "skills", "testimonials", "register", "contact"].map((section) => (
              <a
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-skillizee-blue cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection("register")}
              className="bg-skillizee-orange hover:bg-skillizee-orange/90 text-white w-full"
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
