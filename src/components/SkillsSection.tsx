
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const SkillsSection = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      clearInterval(interval);
      api.off("select");
    };
  }, [api]);

  const skills = [
    {
      day: "Day 1",
      title: "Critical Thinking",
      description: "Learn to analyze information, question assumptions, and develop reasoned arguments through fun problem-solving activities.",
      color: "bg-skillizee-blue",
      lightColor: "bg-skillizee-light-blue"
    },
    {
      day: "Day 2",
      title: "Creativity",
      description: "Unlock innovative thinking techniques and explore different ways to generate and express ideas through creative challenges.",
      color: "bg-skillizee-orange",
      lightColor: "bg-skillizee-yellow"
    },
    {
      day: "Day 3",
      title: "Collaboration",
      description: "Develop teamwork skills, effective communication, and learn how to leverage diverse perspectives in group projects.",
      color: "bg-green-500",
      lightColor: "bg-skillizee-green"
    },
    {
      day: "Day 4",
      title: "Communication",
      description: "Master the art of expressing ideas clearly, listening actively, and adapting communication styles for different audiences.",
      color: "bg-purple-500",
      lightColor: "bg-skillizee-purple"
    },
    {
      day: "Day 5",
      title: "Confidence",
      description: "Build self-assurance through public speaking, decision-making exercises, and learning to embrace challenges as opportunities.",
      color: "bg-pink-500",
      lightColor: "bg-pink-100"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            5 Days, 5 Essential Skills
          </h2>
          <div className="w-24 h-1 bg-skillizee-orange mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each day of our bootcamp focuses on developing a specific 21st-century skill 
            that will help students excel both academically and personally.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <Carousel 
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {skills.map((skill, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="border-none shadow-lg overflow-hidden h-full">
                      <div className={`h-2 ${skill.color}`}></div>
                      <CardContent className="pt-6">
                        <div className={`inline-block px-3 py-1 rounded-full mb-4 ${skill.lightColor} text-gray-800 font-medium text-sm`}>
                          {skill.day}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{skill.title}</h3>
                        <p className="text-gray-600">{skill.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex md:justify-center mt-4 gap-1">
              {skills.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    current === index ? "bg-skillizee-blue" : "bg-gray-300"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why These Skills Matter</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            These five core skills are repeatedly identified by educators and employers as 
            essential for success in the modern world. They form the foundation that helps 
            children excel in any subject area or career path they choose.
          </p>
          
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl">
              <blockquote className="italic text-gray-700">
                "The jobs of the future will prioritize human skills that can't be 
                automated: creativity, critical thinking, communication, collaboration, and confidence."
              </blockquote>
              <div className="mt-4 font-medium text-skillizee-blue">
                - World Economic Forum Skills Report
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
