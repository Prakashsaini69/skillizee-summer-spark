
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-skillizee-light-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Have Questions?
          </h2>
          <div className="w-24 h-1 bg-skillizee-orange mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help! Reach out to us with any questions or concerns about the 
            SkilliZee Summer School program.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-md flex flex-col items-center">
              <div className="bg-skillizee-blue/10 p-4 rounded-full mb-4">
                <Mail size={24} className="text-skillizee-blue" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
              <a
                href="mailto:info.skillizee@gmail.com"
                className="text-skillizee-blue hover:underline"
              >
                info.skillizee@gmail.com
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md flex flex-col items-center">
              <div className="bg-skillizee-orange/10 p-4 rounded-full mb-4">
                <Phone size={24} className="text-skillizee-orange" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
              <a
                href="tel:+919773353232"
                className="text-skillizee-orange hover:underline"
              >
                +91 9773353232
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Website</h3>
              <a
                href="https://www.skillizee.club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                www.skillizee.club
              </a>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Download Program Brochure
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Get all the detailed information about our SkilliZee Summer School program, 
              schedule, and teaching methodology in our comprehensive brochure.
            </p>
            <Button className="bg-skillizee-blue hover:bg-skillizee-blue/90 text-white px-8 py-6">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
