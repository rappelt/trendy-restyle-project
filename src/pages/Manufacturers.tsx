import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import lasLogo from "@/assets/logos/las.png";
import wilkhahnLogo from "@/assets/logos/wilkhahn.svg";
import profimLogo from "@/assets/logos/profim.png";
import bejotLogo from "@/assets/logos/bejot.png";
import aliasLogo from "@/assets/logos/alias.svg";
import softlineLogo from "@/assets/logos/softline.png";
import pagedLogo from "@/assets/logos/paged.png";
import tonLogo from "@/assets/logos/ton.png";
import infinityLogo from "@/assets/logos/infinity.png";
import pedraliLogo from "@/assets/logos/pedrali.png";
import magisLogo from "@/assets/logos/magis.png";
import plustLogo from "@/assets/logos/plust.png";
import thonetLogo from "@/assets/logos/thonet.png";

const manufacturers = [
  {
    category: "Meble Biurowe",
    brands: [
      { name: "LAS", url: "http://las.it/", logo: lasLogo }
    ]
  },
  {
    category: "Krzesła i Fotele Biurowe Premium",
    brands: [
      { name: "Wilkhahn", url: "https://www.wilkhahn.com/en/", logo: wilkhahnLogo }
    ]
  },
  {
    category: "Krzesła i Fotele Biurowe",
    brands: [
      { name: "Profim", url: "https://www.profim.pl/", logo: profimLogo },
      { name: "Bejot", url: "http://www.bejot.eu/", logo: bejotLogo }
    ]
  },
  {
    category: "Sofy",
    brands: [
      { name: "Alias", url: "http://alias.design/", logo: aliasLogo },
      { name: "Softline", url: "http://www.softline.dk/", logo: softlineLogo }
    ]
  },
  {
    category: "Krzesła Drewniane",
    brands: [
      { name: "Paged", url: "https://www.pagedmeble.pl/pl/", logo: pagedLogo },
      { name: "TON", url: "https://www.ton.eu/pl/krzesla/", logo: tonLogo }
    ]
  },
  {
    category: "Kawiarnia / Restauracja",
    brands: [
      { name: "Infinity", url: "https://infinityoffice.com.au/", logo: infinityLogo },
      { name: "Pedrali", url: "https://www.pedrali.it/it/", logo: pedraliLogo },
      { name: "Magis", url: "http://www.magisdesign.com/", logo: magisLogo },
      { name: "Plust", url: "https://www.plust.it/en/products/", logo: plustLogo }
    ]
  },
  {
    category: "Sale Konferencyjne",
    brands: [
      { name: "Thonet", url: "https://www.thonet.com/", logo: thonetLogo }
    ]
  }
];

const Manufacturers = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('common.backToHome')}
          </Link>
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            {t('manufacturers.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {t('manufacturers.subtitle')}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.brands.map((brand, brandIdx) => (
                  <Card 
                    key={brandIdx} 
                    className="group hover:shadow-[var(--shadow-medium)] transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-6 sm:p-8 flex flex-col items-center justify-center min-h-[260px] sm:min-h-[240px]">
                      <div className="mb-6 w-full h-40 sm:h-36 flex items-center justify-center p-4">
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
                          {t('manufacturers.visitWebsite')}
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
            {t('manufacturers.needHelp')}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t('manufacturers.needHelpDesc')}
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {t('home.askForConsultation')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Jaga Trendy - Gdańsk, ul. Chrobrego 79F
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
