import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";

const manufacturers = [
  {
    category: "Meble Biurowe",
    brands: [
      { name: "LAS", url: "http://las.it/", logo: "https://jagatrendy.pl/images/las.png" }
    ]
  },
  {
    category: "Krzesła i Fotele Biurowe Premium",
    brands: [
      { name: "Wilkhahn", url: "https://www.wilkhahn.com/en/", logo: "https://jagatrendy.pl/images/Wilkhahn.png" }
    ]
  },
  {
    category: "Krzesła i Fotele Biurowe",
    brands: [
      { name: "Profim", url: "https://www.profim.pl/", logo: "https://jagatrendy.pl/images/profim.png" },
      { name: "Bejot", url: "http://www.bejot.eu/", logo: "https://jagatrendy.pl/images/bejot.png" }
    ]
  },
  {
    category: "Sofy",
    brands: [
      { name: "Alias", url: "http://alias.design/", logo: "https://jagatrendy.pl/images/alias.png" },
      { name: "Softline", url: "http://www.softline.dk/", logo: "https://jagatrendy.pl/images/softline.png" }
    ]
  },
  {
    category: "Krzesła Drewniane",
    brands: [
      { name: "Paged", url: "https://www.pagedmeble.pl/pl/", logo: "https://jagatrendy.pl/images/paged.png" },
      { name: "TON", url: "https://www.ton.eu/pl/krzesla/", logo: "https://jagatrendy.pl/images/ton.png" }
    ]
  },
  {
    category: "Kawiarnia / Restauracja",
    brands: [
      { name: "Infinity", url: "https://infinityoffice.com.au/", logo: "https://jagatrendy.pl/images/infinity.png" },
      { name: "Pedrali", url: "https://www.pedrali.it/it/", logo: "https://jagatrendy.pl/images/pedrali.png" },
      { name: "Magis", url: "http://www.magisdesign.com/", logo: "https://jagatrendy.pl/images/magis.png" },
      { name: "Plust", url: "https://www.plust.it/en/products/", logo: "https://jagatrendy.pl/images/plus.png" }
    ]
  },
  {
    category: "Sale Konferencyjne",
    brands: [
      { name: "Thonet", url: "https://www.thonet.com/", logo: "https://jagatrendy.pl/images/thonet.png" }
    ]
  }
];

const Manufacturers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do strony głównej
          </Link>
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Nasi producenci
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Współpracujemy wyłącznie z renomowanymi producentami, 
            którzy gwarantują najwyższą jakość, innowacyjny design i trwałość.
          </p>
        </div>
      </section>

      {/* Manufacturers Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl space-y-16">
          {manufacturers.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b border-border pb-3">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.brands.map((brand, brandIdx) => (
                  <Card 
                    key={brandIdx} 
                    className="group hover:shadow-[var(--shadow-medium)] transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-8 flex flex-col items-center justify-center min-h-[240px]">
                      <div className="mb-6 w-full h-24 flex items-center justify-center">
                        <img 
                          src={brand.logo} 
                          alt={brand.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <a
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center"
                      >
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          Odwiedź stronę
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Potrzebujesz pomocy w wyborze?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Nasi eksperci chętnie doradzą przy wyborze odpowiednich mebli do Twojego projektu.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Zapytaj o konsultację
            </Button>
          </Link>
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

export default Manufacturers;
