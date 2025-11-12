import { Link } from "react-router-dom";
import { ArrowRight, Building2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroOffice from "@/assets/hero-office.jpg";
import heroConsultation from "@/assets/hero-consultation.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Jaga Trendy</h1>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/manufacturers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Hersteller
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Premium Büro- und Objektmöbel
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hochwertige Möbellösungen für Büros, Konferenzräume, Gastronomie und mehr.
            Ihr Partner für professionelle Einrichtungsprojekte.
          </p>
        </div>
      </section>

      {/* Split Decision Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Wie können wir Ihnen helfen?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Direct to Manufacturers */}
            <Link 
              to="/manufacturers"
              className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/90 z-10" />
              <img 
                src={heroOffice} 
                alt="Büromöbel Showroom" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <Building2 className="w-12 h-12 mb-4 text-primary-foreground" />
                <h4 className="text-3xl font-bold mb-3 text-primary-foreground">
                  Ich weiß, was ich brauche
                </h4>
                <p className="text-lg mb-6 text-primary-foreground/90">
                  Durchstöbern Sie unsere Premium-Hersteller und finden Sie die perfekten Möbel für Ihr Projekt.
                </p>
                <Button 
                  size="lg" 
                  className="self-start bg-accent hover:bg-accent/90 text-accent-foreground group-hover:translate-x-2 transition-transform"
                >
                  Zu den Herstellern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Link>

            {/* Card 2: Need Consultation */}
            <Link 
              to="/contact"
              className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/90 z-10" />
              <img 
                src={heroConsultation} 
                alt="Beratungsgespräch" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <MessageCircle className="w-12 h-12 mb-4 text-primary-foreground" />
                <h4 className="text-3xl font-bold mb-3 text-primary-foreground">
                  Ich brauche Beratung
                </h4>
                <p className="text-lg mb-6 text-primary-foreground/90">
                  Lassen Sie sich von unseren Experten beraten. Wir unterstützen gewerbliche Kunden bei jedem Projekt.
                </p>
                <Button 
                  size="lg" 
                  className="self-start bg-accent hover:bg-accent/90 text-accent-foreground group-hover:translate-x-2 transition-transform"
                >
                  Beratung anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Warum Jaga Trendy?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Premium Qualität</h4>
              <p className="text-muted-foreground">
                Ausgewählte Hersteller für höchste Ansprüche an Design und Funktionalität
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Persönliche Beratung</h4>
              <p className="text-muted-foreground">
                Individuelle Unterstützung von der Planung bis zur Umsetzung
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">B2B Spezialist</h4>
              <p className="text-muted-foreground">
                Erfahrener Partner für gewerbliche Einrichtungsprojekte jeder Größe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Jaga Trendy - Gdańsk, ul. Chrobrego 78C
          </p>
          <p className="text-sm mt-2 opacity-80">
            gdansk@jagatrendy.pl
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
