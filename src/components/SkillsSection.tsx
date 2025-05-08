import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";
import img6 from "@/assets/6.png";

const SkillsSection = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  const images = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (current === images.length - 1) {
        api.scrollTo(0); // Go back to first slide
      } else {
        api.scrollNext(); // Continue scrolling
      }
    }, 3000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      clearInterval(interval);
      api.off("select");
    };
  }, [api, current]);

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Bootcamp Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are 6 snapshots of the skills in action – each slide brings our bootcamp to life!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="p-2 flex justify-center">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="rounded-lg max-h-[500px] w-auto object-contain shadow-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
