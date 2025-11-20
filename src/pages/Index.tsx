import { Link } from "react-router-dom";
import { ArrowRight, Building2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import heroOffice from "@/assets/hero-office.jpg";
import heroConsultation from "@/assets/hero-consultation.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Meble biurowe i obiektowe premium
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Wysokiej jakości rozwiązania meblowe dla biur, sal konferencyjnych, gastronomii i innych obiektów.
            Twój partner w profesjonalnych projektach wyposażenia wnętrz.
          </p>
        </div>
      </section>

      {/* Split Decision Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Jak możemy Ci pomóc?
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
                alt="Salon mebli biurowych" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <Building2 className="w-12 h-12 mb-4 text-primary-foreground" />
                <h4 className="text-3xl font-bold mb-3 text-primary-foreground">
                  Bezpośrednio do naszych partnerów premium
                </h4>
                <p className="text-lg mb-6 text-primary-foreground/90">
                  Przejrzyj naszych producentów premium i znajdź idealne meble do swojego projektu.
                </p>
                <Button 
                  size="lg" 
                  className="self-start bg-accent hover:bg-accent/90 text-accent-foreground group-hover:translate-x-2 transition-transform"
                >
                  Do producentów
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
                alt="Spotkanie konsultacyjne" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <MessageCircle className="w-12 h-12 mb-4 text-primary-foreground" />
                <h4 className="text-3xl font-bold mb-3 text-primary-foreground">
                  Potrzebuję konsultacji
                </h4>
                <p className="text-lg mb-6 text-primary-foreground/90">
                  Skorzystaj z doradztwa naszych ekspertów. Wspieramy klientów komercyjnych w każdym projekcie.
                </p>
                <Button 
                  size="lg" 
                  className="self-start bg-accent hover:bg-accent/90 text-accent-foreground group-hover:translate-x-2 transition-transform"
                >
                  Zapytaj o konsultację
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
            Dlaczego Jaga Trendy?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Jakość premium</h4>
              <p className="text-muted-foreground">
                Wyselekcjonowani producenci spełniający najwyższe standardy designu i funkcjonalności
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Osobiste doradztwo</h4>
              <p className="text-muted-foreground">
                Indywidualne wsparcie od planowania po realizację
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Specjalista B2B</h4>
              <p className="text-muted-foreground">
                Doświadczony partner dla komercyjnych projektów wyposażenia wnętrz każdej wielkości
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Jaga Trendy - Gdańsk, ul. Chrobrego 78F
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
