
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-skillizee-light-blue/30 to-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              SkilliZee Summer School
            </h1>
            <div className="bg-skillizee-orange/10 inline-block rounded-lg px-4 py-2 mb-6">
              <p className="text-xl md:text-2xl font-medium text-skillizee-orange">
                Bootcamp like never before – 5 Days, 5 Skills
              </p>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              An engaging online experience designed to equip students aged 8-16 with 
              essential 21st-century meta skills through fun, interactive sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-skillizee-blue hover:bg-skillizee-blue/90 text-white px-8 py-6 text-lg">
                Register Now
              </Button>
              <Button variant="outline" className="border-skillizee-blue text-skillizee-blue hover:bg-skillizee-blue/10 px-8 py-6 text-lg">
                Download Brochure
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              {/* Video placeholder - will be replaced with actual video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">Introductory Video</p>
                  <p className="text-gray-400 text-sm">(Coming Soon)</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-skillizee-yellow rounded-full -z-10 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-skillizee-green rounded-full -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
