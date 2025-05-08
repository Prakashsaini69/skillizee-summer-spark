
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What is SkilliZee Summer School?
          </h2>
          <div className="w-24 h-1 bg-skillizee-blue mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A transformative 5-day online bootcamp designed to equip young minds with 
            essential skills needed to thrive in an ever-evolving world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
            <div className="h-2 bg-skillizee-blue"></div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Interactive Learning</h3>
              <p className="text-gray-600">
                Engaging online sessions designed to keep children motivated and excited about learning 
                through games, challenges, and collaborative activities.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
            <div className="h-2 bg-skillizee-orange"></div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Guidance</h3>
              <p className="text-gray-600">
                Led by experienced educators who specialize in developing 21st-century skills
                in young learners through proven teaching methodologies.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
            <div className="h-2 bg-green-500"></div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Practical Application</h3>
              <p className="text-gray-600">
                Beyond theory, students will immediately apply their new skills through 
                real-world projects they can continue developing after the bootcamp.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 bg-skillizee-purple/30 rounded-xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">What Makes Us Unique</h3>
              <p className="text-gray-600">
                Our approach focuses on building meta-skills rather than just subject knowledge.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                <div className="bg-skillizee-blue/20 rounded-full p-2 text-skillizee-blue font-bold">
                  01
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Skill-Focused</h4>
                  <p className="text-sm text-gray-600">Emphasis on developing transferable skills rather than memorizing facts</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                <div className="bg-skillizee-orange/20 rounded-full p-2 text-skillizee-orange font-bold">
                  02
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Age-Appropriate</h4>
                  <p className="text-sm text-gray-600">Content tailored specifically for 8-16 year olds' developmental needs</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-2 text-green-600 font-bold">
                  03
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Project-Based</h4>
                  <p className="text-sm text-gray-600">Learning through creating rather than passive consumption</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                <div className="bg-purple-100 rounded-full p-2 text-purple-600 font-bold">
                  04
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Community-Driven</h4>
                  <p className="text-sm text-gray-600">Collaborative environment where students learn from each other</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
