import { Link } from "react-router-dom";
import logo from "@/assets/jaga-logo.webp";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Languages, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { languageNames, Language } from "@/translations";
import { useState } from "react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img src={logo} alt="Jaga Trendy" className="h-14 sm:h-12" />
        </Link>
        
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              {t('nav.home')}
            </NavLink>
            <NavLink 
              to="/manufacturers" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              {t('nav.manufacturers')}
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              {t('nav.contact')}
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden h-9 w-9 p-0">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <nav className="flex flex-col gap-6 mt-8">
                <NavLink 
                  to="/" 
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                  activeClassName="text-foreground font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.home')}
                </NavLink>
                <NavLink 
                  to="/manufacturers" 
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                  activeClassName="text-foreground font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.manufacturers')}
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                  activeClassName="text-foreground font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.contact')}
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 h-9 sm:h-10">
                <Languages className="h-5 w-5 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">{languageNames[language]}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {(Object.keys(languageNames) as Language[]).map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={language === lang ? "bg-accent" : ""}
                >
                  {languageNames[lang]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
