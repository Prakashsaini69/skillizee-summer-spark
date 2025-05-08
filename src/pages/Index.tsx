
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ParentTestimonials from "@/components/ParentTestimonials";
import RegistrationForm from "@/components/RegistrationForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ParentTestimonials />
      <RegistrationForm />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
