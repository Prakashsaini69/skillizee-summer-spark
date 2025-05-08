
import { Instagram, Linkedin, Youtube } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1746694511/Skillizee_WHITE_logo1_f5hpbh.png" // ← Replace with your actual logo URL
              alt="SkilliZee Logo"
              className="h-10 w-auto"
            />
          </div>
            <p className="text-gray-300 mb-4">
              Building essential 21st-century skills in young minds through interactive 
              and engaging online learning experiences.
            </p>
            <div className="flex space-x-4">
            <a
              href="https://instagram.com/skillizee.club"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com/company/skillizee" // <-- Update with actual URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.youtube.com/@SkilliZee-UpskillingYoungMinds" // <-- Update with actual URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>

          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About SkilliZee</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Our Programs</a>
              </li>
              <li>
                <a href="#register" className="hover:text-white transition-colors">Register Now</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info.skillizee@gmail.com</li>
              <li>Phone: +91 9773353232</li>
              <li>Website: www.skillizee.club</li>
              <li>Social: @skillizee.club</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SkilliZee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
