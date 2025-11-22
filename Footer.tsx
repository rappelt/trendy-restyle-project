// src/components/Footer.tsx
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 py-6 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>Jaga Trendy – Gdańsk, ul. Chrobrego 79F</p>
          <p className="opacity-80">gdansk@jagatrendy.pl</p>
        </div>
        <p className="opacity-60">
          © {year} Jaga Trendy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
