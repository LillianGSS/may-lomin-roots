import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import teamPhoto1 from "@/assets/team-photo-1.jpg";
import teamPhoto2 from "@/assets/team-photo-2.jpg";
import teamPhoto3 from "@/assets/team-photo-3.jpg";
import teamPhoto4 from "@/assets/team-photo-4.jpg";
import teamPhoto5 from "@/assets/team-photo-5.jpg";

const Squad = () => {
  const players = [
    {
      id: 1,
      name: "Marcus Johnson",
      position: "Goalkeeper",
      number: 1,
      age: 28,
      nationality: "England"
    },
    {
      id: 2,
      name: "Diego Rodriguez",
      position: "Defender",
      number: 4,
      age: 26,
      nationality: "Spain"
    },
    {
      id: 3,
      name: "James Mitchell",
      position: "Defender",
      number: 5,
      age: 24,
      nationality: "Scotland"
    },
    {
      id: 4,
      name: "Alessandro Costa",
      position: "Midfielder",
      number: 8,
      age: 29,
      nationality: "Italy"
    },
    {
      id: 5,
      name: "Kevin O'Brien",
      position: "Midfielder",
      number: 10,
      age: 27,
      nationality: "Ireland"
    },
    {
      id: 6,
      name: "Thierry Dubois",
      position: "Forward",
      number: 9,
      age: 25,
      nationality: "France"
    },
    {
      id: 7,
      name: "Lucas Silva",
      position: "Forward",
      number: 11,
      age: 23,
      nationality: "Brazil"
    },
    {
      id: 8,
      name: "Ahmed Hassan",
      position: "Midfielder",
      number: 6,
      age: 30,
      nationality: "Egypt"
    }
  ];

  const getPositionColor = (position: string) => {
    switch (position) {
      case "Goalkeeper":
        return "bg-club-warning text-white";
      case "Defender":
        return "bg-club-primary text-white";
      case "Midfielder":
        return "bg-club-success text-white";
      case "Forward":
        return "bg-club-danger text-white";
      default:
        return "bg-muted text-foreground";
    }
  };

  return (
    <section id="squad" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-foreground mb-4">
            OUR SQUAD
          </h2>
          <p className="text-lg text-foreground-muted font-inter max-w-2xl mx-auto">
            Meet the talented players who represent May Lomin FC with pride and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player) => (
            <Card key={player.id} className="group hover:shadow-club hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6 text-center">
                {/* Player Avatar */}
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-club-secondary font-oswald">
                  {player.number}
                </div>

                {/* Player Info */}
                <h3 className="font-oswald font-bold text-xl text-foreground mb-2">
                  {player.name}
                </h3>
                
                <Badge className={`mb-3 ${getPositionColor(player.position)}`}>
                  {player.position}
                </Badge>

                <div className="space-y-1 text-sm text-foreground-muted font-inter">
                  <div>Age: {player.age}</div>
                  <div>Nationality: {player.nationality}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Photos Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-oswald font-bold text-3xl md:text-4xl text-foreground mb-4">
              TEAM IN ACTION
            </h3>
            <p className="text-lg text-foreground-muted font-inter max-w-2xl mx-auto">
              Capturing moments of passion, dedication, and teamwork on and off the field
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative group">
                    <img 
                      src={teamPhoto1} 
                      alt="May Lomin FC team celebration after match"
                      className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-club"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="font-oswald font-bold text-xl mb-2">Team Celebration</h4>
                      <p className="font-inter text-sm opacity-90">Victory brings us together</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative group">
                    <img 
                      src={teamPhoto2} 
                      alt="May Lomin FC players lineup before match"
                      className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-club"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="font-oswald font-bold text-xl mb-2">Pre-Match Lineup</h4>
                      <p className="font-inter text-sm opacity-90">Ready for battle</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative group">
                    <img 
                      src={teamPhoto3} 
                      alt="May Lomin FC team in red jerseys"
                      className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-club"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="font-oswald font-bold text-xl mb-2">Home Colors</h4>
                      <p className="font-inter text-sm opacity-90">Proud in our red jerseys</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative group">
                    <img 
                      src={teamPhoto4} 
                      alt="May Lomin FC training session"
                      className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-club"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="font-oswald font-bold text-xl mb-2">Training Session</h4>
                      <p className="font-inter text-sm opacity-90">Building strength and skill</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative group">
                    <img 
                      src={teamPhoto5} 
                      alt="May Lomin FC team training drills"
                      className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-club"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="font-oswald font-bold text-xl mb-2">Team Unity</h4>
                      <p className="font-inter text-sm opacity-90">Training together, winning together</p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl text-center max-w-2xl mx-auto">
            <h3 className="font-oswald font-bold text-2xl text-club-secondary mb-4">
              JOIN OUR ACADEMY
            </h3>
            <p className="text-club-secondary/90 font-inter mb-6">
              Discover your potential and develop your skills with our professional training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-club-secondary text-club-primary px-6 py-3 rounded-lg font-semibold hover:bg-club-secondary/90 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Squad;