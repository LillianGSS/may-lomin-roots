import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fixtures from "@/components/Fixtures";
import Squad from "@/components/Squad";
import News from "@/components/News";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Fixtures />
        <Squad />
        <News />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
