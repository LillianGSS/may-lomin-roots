import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Trophy,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from player development to fan experience."
    },
    {
      icon: Users,
      title: "Unity",
      description: "Our strength comes from working together as one team, one family, one community."
    },
    {
      icon: Target,
      title: "Ambition",
      description: "We set bold goals and work tirelessly to achieve them, never settling for mediocrity."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Football is more than a game to us - it's our heart, our soul, and our way of life."
    }
  ];

  const achievements = [
    { year: "2023", title: "Regional Championship Winners", description: "Dominated the regional league with outstanding performance" },
    { year: "2022", title: "Youth Development Award", description: "Recognized for excellence in nurturing young talent" },
    { year: "2021", title: "Community Club of the Year", description: "Honored for outstanding community engagement" },
    { year: "2020", title: "Fair Play Award", description: "Celebrated for exemplary sportsmanship and integrity" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-foreground mb-4">
            ABOUT MAY LOMIN FC
          </h2>
          <p className="text-lg text-foreground-muted font-inter max-w-3xl mx-auto">
            More than just a football club - we're a symbol of excellence, community, and unwavering passion for the beautiful game
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-gradient-primary text-club-secondary p-8">
            <CardContent className="p-0">
              <h3 className="font-oswald font-bold text-3xl mb-6 text-center">Our Story</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="font-inter text-lg leading-relaxed mb-4">
                    Founded in 2019, May Lomin Football Club emerged from a shared vision of creating something extraordinary in the world of football. What started as a dream among passionate football enthusiasts has evolved into a professional club that represents excellence, community, and sporting achievement.
                  </p>
                  <p className="font-inter text-lg leading-relaxed">
                    Our journey has been marked by dedication, hard work, and an unwavering commitment to developing not just skilled players, but well-rounded individuals who embody the values of sportsmanship and integrity.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-club-secondary/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-6xl font-bold font-oswald">ML</span>
                  </div>
                  <p className="font-inter text-sm opacity-90">Est. 2019</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="font-oswald font-bold text-3xl text-center text-foreground mb-12">
            OUR VALUES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-club hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-club-secondary" />
                  </div>
                  <h4 className="font-oswald font-bold text-xl text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-foreground-muted font-inter text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="font-oswald font-bold text-3xl text-center text-foreground mb-12">
            OUR ACHIEVEMENTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-club-accent text-background-dark rounded-full w-12 h-12 flex items-center justify-center font-oswald font-bold">
                      {achievement.year.slice(-2)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-oswald font-bold text-lg text-foreground mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-foreground-muted font-inter text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;