
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ParentTestimonials = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      relation: "Parent of Alex, 10",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL - replace with actual video
      quote: "SkilliZee has transformed my child's learning experience. The skills they've gained are incredible!",
    },
    {
      id: 2,
      name: "Michael Thompson",
      relation: "Father of Emma, 12",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL - replace with actual video
      quote: "I've never seen my daughter so excited about learning. The program is worth every penny!",
    },
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 bg-skillizee-yellow/30 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Parent Testimonials
          </h2>
          <div className="w-24 h-1 bg-skillizee-orange mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear what parents have to say about the impact our program has had on their children's learning journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <div className="w-full h-0 pb-[56.25%] relative">
                <iframe
                  src={testimonials[currentVideo].videoUrl}
                  title={`Testimonial from ${testimonials[currentVideo].name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-4">
                "{testimonials[currentVideo].quote}"
              </p>
              <p className="font-semibold text-gray-800 dark:text-white">
                {testimonials[currentVideo].name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonials[currentVideo].relation}
              </p>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-skillizee-blue/10 dark:hover:bg-skillizee-blue/20"
                onClick={prevVideo}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentVideo === index 
                      ? "bg-skillizee-blue" 
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  onClick={() => setCurrentVideo(index)}
                />
              ))}
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-skillizee-blue/10 dark:hover:bg-skillizee-blue/20"
                onClick={nextVideo}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentTestimonials;
