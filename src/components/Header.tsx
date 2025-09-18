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

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1); // Remove the # from href
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

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
                ማይሎሚን ዓብይ ዓዲ Maylomin Abi Adi FC
              </h1>
              <p className="text-xs text-foreground-muted font-inter">
                Professional Football Club
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-club-secondary hover:text-club-accent transition-colors font-inter font-medium bg-transparent border-none cursor-pointer"
              >
                {item.name}
              </button>
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
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-2 text-club-secondary hover:text-club-accent hover:bg-club-primary/10 transition-colors font-inter bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;