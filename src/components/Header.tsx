import { Link } from "react-router-dom";
import logo from "@/assets/jaga-logo.webp";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img src={logo} alt="Jaga Trendy" className="h-12" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground font-medium"
          >
            Home
          </NavLink>
          <NavLink 
            to="/manufacturers" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground font-medium"
          >
            Producenci
          </NavLink>
          <NavLink 
            to="/contact" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground font-medium"
          >
            Kontakt
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
