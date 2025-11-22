import { ArrowRight, Building2, MapPin, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroOffice from "@/assets/hero-office.jpg";
import heroConsultation from "@/assets/hero-consultation.jpg";

const projects = [
  {
    id: "hardrock-cafe",
    name: "Hard Rock Cafe – Lounge & Dining",
    location: "Warsaw, PL",
    segment: "Hospitality",
    units: "200+ seats & bar stools",
    descriptionKey: "projects.hardrock.description",
    manufacturers: ["PAGED Meble", "Fameg"],
    image: heroOffice,
  },
  {
    id: "premium-office",
    name: "Premium Office – Open Space & Meeting",
    location: "Berlin, DE",
    segment: "Office",
    units: "120+ workstations & meeting areas",
    descriptionKey: "projects.premiumOffice.description",
    manufacturers: ["PAGED Meble"],
    image: heroConsultation,
  },
  {
    id: "boutique-hotel",
    name: "Boutique Hotel – Lobby & Breakfast Area",
    location: "Kraków, PL",
    segment: "Hospitality",
    units: "80+ chairs & lounge furniture",
    descriptionKey: "projects.boutiqueHotel.description",
    manufacturers: ["Fameg"],
    image: heroOffice,
  },
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero / Intro Section */}
        <section className="border-b border-border bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 max-w-5xl">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
              {t("projects.badge") || "REALIZED PROJECTS"}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              {t("projects.title") || "Referenzprojekte & realisierte Objekte"}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mb-6">
              {t("projects.subtitle") ||
                "Ausgewählte Projekte aus Hotellerie, Gastronomie und modernen Office-Konzepten – realisiert mit unseren Premium-Partnern im Objektmöbelbereich."}
            </p>

            <div className="inline-flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/80 px-3 py-1 bg-background/70">
                <Building2 className="h-3.5 w-3.5" />
                <span>
                  {t("projects.badgeSegments") ||
                    "Hospitality · Office · Retail"}
                </span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 bg-background/60">
                <span>Premium B2B</span>
              </span>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 max-w-6xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-[0_18px_60px_rgba(15,23,42,0.16)] hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.25)] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                  <div className="absolute left-4 bottom-4 right-4 flex flex-col gap-1 text-white">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center rounded-full bg-white/12 px-2.5 py-1 text-[11px] font-medium">
                        {project.segment}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px]">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold leading-snug">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 px-4 py-4 sm:px-5 sm:py-5">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {t(project.descriptionKey) ||
                      "Umfassendes Objektmöbel-Konzept vom Erstentwurf bis zur finalen Bestuhlung – inklusive Abstimmung mit Architekten und Betreiber."}
                  </p>

                  <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs text-muted-foreground">
                    <span className="inline-flex items-center rounded-full bg-secondary/20 px-2.5 py-1 text-secondary-foreground">
                      {project.units}
                    </span>
                    {project.manufacturers.map((m) => (
                      <span
                        key={m}
                        className="inline-flex items-center rounded-full border border-border/80 px-2.5 py-1"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="px-0 text-xs sm:text-sm font-medium hover:text-primary"
                    >
                      <span className="mr-2">
                        {t("projects.ctaDetails") ||
                          "Projektanfrage mit ähnlichem Umfang"}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Bereich unten */}
          <div className="mt-10 sm:mt-12 lg:mt-14 max-w-4xl mx-auto rounded-3xl border border-dashed border-border bg-muted/40 px-6 py-6 sm:px-8 sm:py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("projects.ctaBadge") || "LARGER SCOPE · 100% B2B"}
              </p>
              <h2 className="text-base sm:text-lg font-semibold">
                {t("projects.ctaTitle") ||
                  "Sie planen ein größeres Objekt- oder Filialprojekt?"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
                {t("projects.ctaSubtitle") ||
                  "Ab einer gewissen Projektgröße unterstützen wir Sie bei Herstellerwahl, Bemusterung und Objektbestuhlung – inkl. direktem Kontakt zu den Premium-Partnern."}
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:items-end">
              <Button asChild size="sm" className="w-full sm:w-auto">
                <a href="/contact">
                  {t("projects.ctaButton") || "Projekt anfragen"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors"
                onClick={() =>
                  window.open("https://paged.pl/en/", "_blank", "noreferrer")
                }
              >
                <ExternalLink className="h-3 w-3" />
                <span>
                  {t("projects.ctaManufacturers") ||
                    "Direkt zu ausgewählten Premium-Herstellern"}
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer />
    </div>
  );
};

export default Projects;
