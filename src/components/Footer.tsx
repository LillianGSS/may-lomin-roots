import { Separator } from "@/components/ui/separator";
import logo from "@/assets/may-lomin-logo.png";

const Footer = () => {
  const footerLinks = {
    club: [
      { name: "About Us", href: "#about" },
      { name: "History", href: "#about" },
      { name: "Management", href: "#about" },
      { name: "Careers", href: "#contact" }
    ],
    team: [
      { name: "First Squad", href: "#squad" },
      { name: "Academy", href: "#squad" },
      { name: "Coaching Staff", href: "#squad" },
      { name: "Youth Teams", href: "#squad" }
    ],
    fans: [
      { name: "Season Tickets", href: "#contact" },
      { name: "Match Day Info", href: "#fixtures" },
      { name: "Merchandise", href: "#contact" },
      { name: "Membership", href: "#contact" }
    ],
    media: [
      { name: "Latest News", href: "#news" },
      { name: "Press Releases", href: "#news" },
      { name: "Photo Gallery", href: "#news" },
      { name: "Videos", href: "#news" }
    ]
  };

  return (
    <footer className="bg-background-dark text-club-secondary">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Club Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-club-secondary p-1">
                <img src={logo} alt="May Lomin FC" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-oswald font-bold text-xl">May Lomin FC</h3>
                <p className="text-sm text-club-secondary/70 font-inter">Professional Football Club</p>
              </div>
            </div>
            <p className="text-club-secondary/80 font-inter mb-6 leading-relaxed">
              Established in 2019, May Lomin Football Club represents excellence, passion, and community spirit. 
              We're more than a team - we're a family united by our love for the beautiful game.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-club-secondary/10 hover:bg-club-primary transition-colors rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-club-secondary/10 hover:bg-club-primary transition-colors rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-club-secondary/10 hover:bg-club-primary transition-colors rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-sm font-bold">i</span>
              </div>
              <div className="w-10 h-10 bg-club-secondary/10 hover:bg-club-primary transition-colors rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-sm font-bold">y</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald font-bold text-lg mb-4 text-club-accent">The Club</h4>
            <ul className="space-y-2">
              {footerLinks.club.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-club-secondary/80 hover:text-club-accent transition-colors font-inter text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald font-bold text-lg mb-4 text-club-accent">Team</h4>
            <ul className="space-y-2">
              {footerLinks.team.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-club-secondary/80 hover:text-club-accent transition-colors font-inter text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald font-bold text-lg mb-4 text-club-accent">Fans</h4>
            <ul className="space-y-2">
              {footerLinks.fans.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-club-secondary/80 hover:text-club-accent transition-colors font-inter text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald font-bold text-lg mb-4 text-club-accent">Media</h4>
            <ul className="space-y-2">
              {footerLinks.media.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-club-secondary/80 hover:text-club-accent transition-colors font-inter text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <Separator className="bg-club-secondary/20" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-club-secondary/60 font-inter text-sm">
            © 2024 May Lomin Football Club. All rights reserved.
          </div>
          <div className="flex space-x-6 text-club-secondary/60 font-inter text-sm">
            <a href="#" className="hover:text-club-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-club-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-club-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;