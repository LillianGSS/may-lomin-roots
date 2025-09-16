import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/may-lomin-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Fixtures", href: "#fixtures" },
    { name: "Squad", href: "#squad" },
    { name: "News", href: "#news" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-background-dark/95 backdrop-blur-md fixed w-full top-0 z-50 border-b border-club-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-club-secondary p-1">
              <img src={logo} alt="May Lomin FC" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="font-oswald font-bold text-xl text-club-secondary">
                May Lomin FC
              </h1>
              <p className="text-xs text-foreground-muted font-inter">
                Professional Football Club
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-club-secondary hover:text-club-accent transition-colors font-inter font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-club-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background-dark border-t border-club-primary/20">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-club-secondary hover:text-club-accent hover:bg-club-primary/10 transition-colors font-inter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;