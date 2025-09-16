import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "May Lomin FC Secures Victory Against City United",
      excerpt: "An impressive 2-1 victory at home showcases the team's determination and skill as they continue their winning streak this season.",
      category: "Match Report",
      author: "Sports Desk",
      date: "2024-09-14",
      featured: true
    },
    {
      id: 2,
      title: "New Training Facility Opens Next Month", 
      excerpt: "State-of-the-art training complex will enhance player development and community programs starting October 2024.",
      category: "Club News",
      author: "Club Management",
      date: "2024-09-12",
      featured: true
    },
    {
      id: 3,
      title: "Youth Academy Welcomes New Talents",
      excerpt: "Exciting young prospects join our development program, bringing fresh energy and potential to the club's future.",
      category: "Academy",
      author: "Academy Director",
      date: "2024-09-10",
      featured: false
    },
    {
      id: 4,
      title: "Community Outreach Program Launched",
      excerpt: "May Lomin FC partners with local schools to promote football and healthy living among young people in the community.",
      category: "Community",
      author: "Community Relations",
      date: "2024-09-08",
      featured: false
    },
    {
      id: 5,
      title: "Season Ticket Renewals Now Available",
      excerpt: "Secure your seat for another exciting season of football with exclusive member benefits and priority booking.",
      category: "Tickets",
      author: "Ticket Office",
      date: "2024-09-05",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Match Report":
        return "bg-club-success text-white";
      case "Club News":
        return "bg-club-primary text-white";
      case "Academy":
        return "bg-club-accent text-background-dark";
      case "Community":
        return "bg-club-warning text-white";
      case "Tickets":
        return "bg-club-danger text-white";
      default:
        return "bg-muted text-foreground";
    }
  };

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <section id="news" className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-foreground mb-4">
            LATEST NEWS
          </h2>
          <p className="text-lg text-foreground-muted font-inter max-w-2xl mx-auto">
            Stay updated with the latest happenings at May Lomin FC
          </p>
        </div>

        {/* Featured News */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredNews.map((item) => (
            <Card key={item.id} className="group hover:shadow-elevated transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-primary"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-sm text-foreground-muted">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="font-oswald text-xl group-hover:text-club-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted font-inter mb-4">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-sm text-foreground-muted">
                  <User className="w-4 h-4 mr-1" />
                  {item.author}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regular News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regularNews.map((item) => (
            <Card key={item.id} className="group hover:shadow-club hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(item.category)} variant="secondary">
                    {item.category}
                  </Badge>
                </div>
                <CardTitle className="font-oswald text-lg group-hover:text-club-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted font-inter text-sm mb-4">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-foreground-muted">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {item.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
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

export default News;