// src/components/Footer.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background/90">
      <div className="container mx-auto px-4 py-8 text-xs sm:text-sm text-muted-foreground flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>
            © {new Date().getFullYear()} JAGA TRENDY. {t("footer.allRightsReserved")}
          </p>
          <p>{t("footer.trademarkNotice")}</p>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <a href="#impressum" className="hover:text-foreground underline-offset-4 hover:underline">
            {t("footer.imprint")}
          </a>
          <span className="text-border">·</span>
          <a href="#datenschutz" className="hover:text-foreground underline-offset-4 hover:underline">
            {t("footer.privacy")}
          </a>
          <span className="text-border">·</span>
          <a href="#markenrecht" className="hover:text-foreground underline-offset-4 hover:underline">
            {t("footer.trademark")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
