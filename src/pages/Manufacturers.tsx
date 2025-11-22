import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    categoryKey: "officeSystems",
    brands: [{ name: "LAS", url: "https://www.las.it/", logo: lasLogo }],
  },
  {
    categoryKey: "officeChairsPremium",
    brands: [
      {
        name: "Wilkhahn",
        url: "https://www.wilkhahn.com/en/",
        logo: wilkhahnLogo,
      },
    ],
  },
  {
    categoryKey: "officeChairs",
    brands: [
      { name: "Profim", url: "https://www.profim.pl/", logo: profimLogo },
      { name: "Bejot", url: "http://www.bejot.eu/", logo: bejotLogo },
    ],
  },
  {
    categoryKey: "sofas",
    brands: [
      { name: "Alias", url: "http://alias.design/", logo: aliasLogo },
      { name: "Softline", url: "http://www.softline.dk/", logo: softlineLogo },
    ],
  },
  {
    categoryKey: "woodenChairs",
    brands: [
      {
        name: "Paged",
        url: "https://www.pagedmeble.pl/pl/",
        logo: pagedLogo,
      },
      { name: "TON", url: "https://www.ton.eu/pl/krzesla/", logo: tonLogo },
    ],
  },
  {
    categoryKey: "cafeRestaurant",
    brands: [
      {
        name: "Infinity",
        url: "https://infinityoffice.com.au/",
        logo: infinityLogo,
      },
      {
        name: "Pedrali",
        url: "https://www.pedrali.it/it/",
        logo: pedraliLogo,
      },
      { name: "Magis", url: "http://www.magisdesign.com/", logo: magisLogo },
      { name: "Plust", url: "https://www.plust.com/", logo: plustLogo },
      {
        name: "Thonet",
        url: "https://www.thonet.de/",
        logo: thonetLogo,
      },
    ],
  },
];

const Manufacturers = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-background via-secondary/10 to-background pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="container mx-auto px-4 max-w-6xl space-y-6">
            <Link
              to="/"
              className="inline-flex items-center text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("common.backToHome")}
            </Link>

            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                B2B · Premium Manufacturers
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                {t("manufacturers.title")}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
                {t("manufacturers.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Manufacturers Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-6xl space-y-14 sm:space-y-16">
            {manufacturers.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    {t(`manufacturers.categories.${category.categoryKey}`)}
                  </h2>
                  {/* PREMIUM · PROJECTS · 50+ wurde hier entfernt */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                  {category.brands.map((brand, brandIdx) => (
                    <a
                      key={brandIdx}
                      href={brand.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative overflow-hidden rounded-3xl border border-border bg-background/80 shadow-sm hover:shadow-[0_18px_60px_rgba(15,23,42,0.18)] transition-all duration-300 block"
                    >
                      <div className="p-6 sm:p-7 flex flex-col h-full">
                        {/* Logo + Name */}
                        <div className="mb-6 flex-1 flex flex-col items-center text-center">
                          <div className="mb-4 w-full h-24 sm:h-28 flex items-center justify-center p-3 sm:p-4">
                            <img
                              src={brand.logo}
                              alt={brand.name}
                              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <h3 className="text-base sm:text-lg font-semibold">
                            {brand.name}
                          </h3>
                        </div>

                        {/* Infos unten */}
                        <div className="flex items-center justify-between pt-2 border-t border-border/60 mt-2">
                          <p className="text-xs text-muted-foreground">
                            {t("manufacturers.projectHintShort") ??
                              t("manufacturers.projectHint")}
                          </p>
                          <span className="ml-3 inline-flex items-center text-xs font-medium text-primary">
                            {t("manufacturers.visitWebsite")}
                            <ExternalLink className="w-3.5 h-3.5 ml-1" />
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-muted/30">
          <div className="container mx-auto px-4 py-14 sm:py-16 lg:py-20">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                JAGA TRENDY · PROJECT SUPPORT
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                {t("manufacturers.needHelp")}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                {t("manufacturers.needHelpDesc")}
              </p>

              <div className="pt-4">
                <Link to="/contact">
                  <Button size="lg" className="px-6 sm:px-8">
                    {t("home.askForConsultation")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Wenn du deinen footer verwenden willst: */}
      {/* <footer /> */}
    </div>
  );
};

export default Manufacturers;
