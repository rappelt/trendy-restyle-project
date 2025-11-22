import { Link } from "react-router-dom";
import { ArrowRight, Building2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import heroOffice from "@/assets/hero-office.jpg";
import heroConsultation from "@/assets/hero-consultation.jpg";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="container mx-auto px-4 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
            {/* Text Column */}
            <div className="space-y-6">
              {/* B2B Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                B2B · Architects & Planners
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                {t("home.heroTitle")}
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                {t("home.heroSubtitle")}
              </p>

              <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                {t("home.heroSubline")}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg">
                  <Link to="/manufacturers">
                    {t("home.discoverManufacturers")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border"
                >
                  <Link to="/contact">{t("home.requestProject")}</Link>
                </Button>
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-muted/40 shadow-xl shadow-black/5">
                <img
                  src={heroOffice}
                  alt="Premium office furniture"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl border border-border bg-background/90 px-4 py-3 shadow-lg shadow-black/10">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  B2B · OBJECT FURNITURE
                </p>
                <p className="text-sm font-medium">
                  {t("home.directToPartners")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How can we help / Two main paths */}
        <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              JAGA TRENDY
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              {t("home.howCanWeHelp")}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {t("home.directToPartnersDesc")}
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Card 1: Direct to Manufacturers */}
            <Link
              to="/manufacturers"
              className="group relative overflow-hidden rounded-3xl border border-border bg-black/70 text-white shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
            >
              <img
                src={heroOffice}
                alt="Office showroom"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10 bg-gradient-to-t from-black/80 via-black/65 to-black/30">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>{t("home.directToPartners")}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {t("home.toManufacturers")}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 max-w-md">
                    {t("home.directToPartnersDesc")}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-sm font-medium">
                  <span className="mr-2">{t("home.discoverManufacturers")}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Card 2: Need Consultation / Project request */}
            <Link
              to="/contact"
              className="group relative overflow-hidden rounded-3xl border border-border bg-background shadow-[0_18px_60px_rgba(15,23,42,0.18)]"
            >
              <img
                src={heroConsultation}
                alt="Project consultation"
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10 bg-gradient-to-t from-background via-background/85 to-background/40">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-3 py-1 text-xs text-secondary-foreground">
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>{t("home.needConsultation")}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {t("home.needConsultation")}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-md">
                    {t("home.needConsultationDesc")}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-sm font-medium">
                  <span className="mr-2">{t("home.askForConsultation")}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Projects / References Teaser */}
        <section className="border-t border-border bg-muted/20">
          <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
            {/* Text Column */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("home.projectsLabel") ?? "REFERENZEN · REALISIERTE PROJEKTE"}
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                {t("home.projectsTitle") ??
                  "Ausgewählte Referenzen für anspruchsvolle Raumkonzepte"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                {t("home.projectsSubtitle") ??
                  "Von Hospitality über Büro bis Retail: JAGA Trendy begleitet Projekte von der ersten Idee bis zur Umsetzung – mit geprüften Premium-Herstellern und B2B-Erfahrung."}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center rounded-full bg-secondary/20 px-3 py-1 text-xs text-secondary-foreground">
                  Hospitality & Gastronomie
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary/20 px-3 py-1 text-xs text-secondary-foreground">
                  Büro & Workspace
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary/20 px-3 py-1 text-xs text-secondary-foreground">
                  Retail & Showrooms
                </span>
              </div>

              <Button asChild size="lg" className="mt-4">
                <Link to="/projects">
                  {t("home.projectsCta") ?? "Referenzen ansehen"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Small project cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm flex flex-col justify-between min-h-[150px]">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">
                    Hospitality
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold mb-1">
                    Hard Rock Cafe – Seating & Lounge
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Premium-Sitzlösungen für hohe Besucherfrequenz – in enger
                    Abstimmung mit Architektur und CI.
                  </p>
                </div>
                <p className="mt-3 text-[11px] text-muted-foreground">
                  Fokus: Langlebigkeit · Design · B2B-Service
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm flex flex-col justify-between min-h-[150px]">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">
                    Office
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold mb-1">
                    Modernes Büro-Konzept
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Arbeitswelten mit ergonomischen Lösungen, Akustik und
                    repräsentativen Meeting-Zonen.
                  </p>
                </div>
                <p className="mt-3 text-[11px] text-muted-foreground">
                  Fokus: Ergonomie · Raumwirkung · Planungssicherheit
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm sm:col-span-2 flex flex-col justify-between min-h-[150px]">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">
                    Retail / Konzeptflächen
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold mb-1">
                    Showroom- und Filialflächen
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Einheitliche Markenpräsenz über mehrere Standorte – mit
                    skalierbaren Möbelkonzepten und klaren Zuständigkeiten im
                    Projekt.
                  </p>
                </div>
                <p className="mt-3 text-[11px] text-muted-foreground">
                  Fokus: Marke · Skalierung · Premium-Partner
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Jaga Trendy */}
        <section className="border-t border-border bg-muted/30">
          <div className="container mx-auto px-4 py-14 sm:py-16 lg:py-20">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("home.whyJagaTrendy")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                {t("home.whyJagaTrendy")}
              </h2>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 text-secondary-foreground text-lg font-semibold">
                  1
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {t("home.premiumQuality")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("home.premiumQualityDesc")}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 text-secondary-foreground text-lg font-semibold">
                  2
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {t("home.personalAdvice")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("home.personalAdviceDesc")}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 text-secondary-foreground text-lg font-semibold">
                  3
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {t("home.b2bSpecialist")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("home.b2bSpecialistDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer />
    </div>
  );
};

export default Index;
