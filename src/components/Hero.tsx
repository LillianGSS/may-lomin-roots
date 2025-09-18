import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import logo from "@/assets/may-lomin-logo.png";

// Import team images
import teamSlide1 from "@/assets/team-slide-1.jpg";
import teamSlide2 from "@/assets/team-slide-2.jpg";
import teamSlide3 from "@/assets/team-slide-3.jpg";
import teamSlide4 from "@/assets/team-slide-4.jpg";
import teamSlide5 from "@/assets/team-slide-5.jpg";
import teamSlide6 from "@/assets/team-slide-6.jpg";
import teamSlide7 from "@/assets/team-slide-7.jpg";

const Hero = () => {
  const [api, setApi] = useState<any>();
  
  const teamImages = [
    teamSlide1,
    teamSlide2, 
    teamSlide3,
    teamSlide4,
    teamSlide5,
    teamSlide6,
    teamSlide7
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-screen">
            {teamImages.map((image, index) => (
              <CarouselItem key={index} className="relative h-screen">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-hero/90"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Club Badge */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-club-secondary rounded-full flex items-center justify-center shadow-club p-4">
              <img src={logo} alt="May Lomin FC" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-oswald font-bold text-5xl md:text-7xl text-club-secondary mb-6 leading-tight">
            ማይሎሚን ዓብይ ዓዲ
            <span className="block text-club-accent">MAYLOMIN ABI ADI</span>
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