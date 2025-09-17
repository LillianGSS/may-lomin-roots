import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

const Fixtures = () => {
  const fixtures = [
    {
      id: 1,
      opponent: "Shul Shire",
      date: "2024-09-20",
      time: "15:00",
      venue: "Home Stadium",
      isHome: true,
      status: "upcoming"
    },
    {
      id: 2,
      opponent: "Adwa Soloda",
      date: "2024-09-27",
      time: "18:30",
      venue: "Adwa Stadium",
      isHome: false,
      status: "upcoming"
    },
    {
      id: 3,
      opponent: "Mekelle 7 Enderta",
      date: "2024-09-13",
      time: "16:00",
      venue: "Home Stadium",
      isHome: true,
      status: "played",
      result: { home: 0, away: 0, outcome: "draw" }
    },
    {
      id: 4,
      opponent: "Aksum",
      date: "2024-09-06",
      time: "20:00",
      venue: "Aksum Stadium",
      isHome: false,
      status: "played",
      result: { home: 0, away: 0, outcome: "draw" }
    }
  ];

  const getResultBadge = (result: any) => {
    if (result.outcome === "win") {
      return <Badge className="bg-club-success text-white">W</Badge>;
    } else if (result.outcome === "draw") {
      return <Badge className="bg-club-warning text-white">D</Badge>;
    } else {
      return <Badge className="bg-club-danger text-white">L</Badge>;
    }
  };

  return (
    <section id="fixtures" className="py-20 bg-background-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-foreground mb-4">
            FIXTURES & RESULTS
          </h2>
          <p className="text-lg text-foreground-muted font-inter max-w-2xl mx-auto">
            Stay updated with our upcoming matches and recent results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {fixtures.map((fixture) => (
            <Card key={fixture.id} className="hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-oswald text-xl">
                    {fixture.status === "upcoming" ? "UPCOMING" : "RESULT"}
                  </CardTitle>
                  {fixture.status === "played" && getResultBadge(fixture.result)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Match Details */}
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <div className="font-oswald font-bold text-lg text-club-primary">
                        May Lomin FC
                      </div>
                      {fixture.status === "played" && (
                        <div className="text-2xl font-bold text-foreground mt-1">
                          {fixture.isHome ? fixture.result.home : fixture.result.away}
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center px-4">
                      <div className="text-sm text-foreground-muted font-inter">
                        {fixture.status === "upcoming" ? "VS" : "FT"}
                      </div>
                    </div>
                    
                    <div className="text-center flex-1">
                      <div className="font-oswald font-bold text-lg text-foreground">
                        {fixture.opponent}
                      </div>
                      {fixture.status === "played" && (
                        <div className="text-2xl font-bold text-foreground mt-1">
                          {fixture.isHome ? fixture.result.away : fixture.result.home}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Match Info */}
                  <div className="flex items-center justify-center space-x-6 text-sm text-foreground-muted border-t pt-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {fixture.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {fixture.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {fixture.isHome ? "Home" : "Away"}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fixtures;