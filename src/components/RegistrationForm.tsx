
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    studentClass: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Registration submitted!",
        description: "We will contact you shortly with next steps.",
      });
      setIsSubmitting(false);
      setFormData({
        studentName: "",
        studentClass: "",
        phone: "",
        email: "",
      });
    }, 1500);
  };

  return (
    <section id="register" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Register for SkilliZee Summer School
            </h2>
            <div className="w-24 h-1 bg-skillizee-blue mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              Secure your child's spot in our interactive 5-day bootcamp and give them 
              the skills they need to thrive in the 21st century.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-skillizee-blue p-6 text-white">
              <h3 className="text-xl font-medium">Enrollment Form</h3>
              <p className="opacity-90">Fill out the details below to register</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="studentName">Student Name</Label>
                <Input 
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  placeholder="Enter student name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="studentClass">Class</Label>
                <Input 
                  id="studentClass"
                  name="studentClass"
                  value={formData.studentClass}
                  onChange={handleChange}
                  required
                  placeholder="Enter student's class"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter phone number with country code"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-skillizee-orange hover:bg-skillizee-orange/90 text-white py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Register Now"}
                </Button>
              </div>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                By registering, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
