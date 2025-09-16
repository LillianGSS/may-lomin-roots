import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users } from "lucide-react";
import heroImage from "@/assets/hero-football.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Club Badge */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-club">
              <span className="text-club-secondary font-bold text-4xl font-oswald">ML</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-oswald font-bold text-5xl md:text-7xl text-club-secondary mb-6 leading-tight">
            MAY LOMIN
            <span className="block text-club-accent">FOOTBALL CLUB</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-club-secondary/90 mb-8 font-inter">
            Passion • Excellence • Victory
          </p>

          <p className="text-lg text-club-secondary/80 mb-12 max-w-2xl mx-auto font-inter">
            Professional football club dedicated to developing talent, competing at the highest level, 
            and bringing glory to our community.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-club-primary hover:bg-club-primary-dark text-club-secondary font-inter font-semibold px-8 py-3">
              <Calendar className="mr-2 h-5 w-5" />
              View Fixtures
            </Button>
            <Button variant="outline" size="lg" className="border-club-secondary text-club-secondary hover:bg-club-secondary hover:text-background-dark font-inter font-semibold px-8 py-3">
              <Users className="mr-2 h-5 w-5" />
              Meet the Squad
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-club-accent font-oswald mb-2">
                2019
              </div>
              <div className="text-club-secondary/80 font-inter">
                Founded
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-club-accent font-oswald mb-2">
                <Trophy className="inline-block w-8 h-8 mr-2" />
                12
              </div>
              <div className="text-club-secondary/80 font-inter">
                Trophies Won
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-club-accent font-oswald mb-2">
                25K+
              </div>
              <div className="text-club-secondary/80 font-inter">
                Supporters
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-club-secondary/60">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-club-secondary/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-club-secondary/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;