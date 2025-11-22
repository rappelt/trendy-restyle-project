import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-10">
      <div className="container mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {/* Unternehmensinfo */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">JAGA Trendy</h4>
          <p className="text-sm text-muted-foreground">
            Premium B2B Furniture Solutions<br />
            Based in Poland – Serving EU customers
          </p>
        </div>

        {/* Rechtliche Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Information</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/impressum" className="hover:text-foreground">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-foreground">Datenschutz</Link></li>
            <li><Link to="/markenrecht" className="hover:text-foreground">Markenrechtlicher Hinweis</Link></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Kontakt</h4>
          <p className="text-sm text-muted-foreground">
            JAGA Trendy Sp. z o.o.<br />
            ul. Przykładowa 10<br />
            00-000 Warszawa<br />
            Poland<br />
          </p>
          <p className="text-sm text-muted-foreground">
            E-Mail: kontakt@jagatrendy.pl
          </p>
        </div>

        {/* EU / rechtliches */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">EU-Hinweis</h4>
          <p className="text-sm text-muted-foreground">
            Diese Webseite richtet sich ausschließlich an gewerbliche Kunden
            innerhalb der Europäischen Union.
          </p>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} JAGA Trendy — All rights reserved.
      </div>
    </footer>
  );
};

export default footer;
