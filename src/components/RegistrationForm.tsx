
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const CounterStat = ({ 
  endValue, 
  label, 
  duration = 2000,
  prefix = '',
  suffix = ''
}: { 
  endValue: number; 
  label: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          setStarted(true);
          
          const startTime = Date.now();
          const increment = Math.ceil(endValue / (duration / 16));
          
          const timer = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            if (elapsedTime >= duration) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              const progress = elapsedTime / duration;
              const nextValue = Math.min(Math.ceil(progress * endValue), endValue);
              setCount(nextValue);
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [endValue, duration, started]);
  
  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-bold text-skillizee-blue">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
};

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    studentClass: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const scriptURL = "https://script.google.com/a/macros/cambridgecourtgroup.com/s/AKfycbyj9_27CrQXVcjIVps3laySUkZlyseao80kasOCNRqwKnA7jv5Nlc0JNoRqmh6AQDIbIg/exec";
  
    const formPayload = new FormData();
    formPayload.append("studentName", formData.studentName);
    formPayload.append("studentClass", formData.studentClass);
    formPayload.append("phone", formData.phone);
    formPayload.append("email", formData.email);
  
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
      });
  
      const result = await response.json();
  
      if (result.status === "success") {
        toast({
          title: "Registration submitted!",
          description: "Redirecting to payment page...",
        });
  
        setTimeout(() => {
          window.location.href = "https://pages.razorpay.com/skillizeewebinar02";
        }, 2000);
      } else {
        toast({
          title: "Submission failed",
          description: "Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error occurred",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setFormData({
        studentName: "",
        studentClass: "",
        phone: "",
        email: "",
      });
    }
  };
  
  

  return (
    <section id="register" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CounterStat endValue={15000} label="Students Taught" suffix="+" />
            <CounterStat endValue={98} label="Satisfaction Rate" suffix="%" />
            <CounterStat endValue={9.5} label="Student Rating" prefix="" suffix="/10" />
          </div>
        </div>
        
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
                <select
                  id="studentClass"
                  name="studentClass"
                  value={formData.studentClass}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-skillizee-blue"
                >
                  <option value="">Select Class</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter 10-digit phone number"
                  pattern="^\d{10}$"
                  title="Please enter a valid 10-digit phone number"
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
