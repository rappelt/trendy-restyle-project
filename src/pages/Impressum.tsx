const Impressum = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-6">Impressum</h1>

      <p className="mb-4">
        Angaben gemäß polnischem Recht (Ustawa o świadczeniu usług drogą elektroniczną)
        sowie gemäß EU-Richtlinien.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Unternehmen</h2>
      <p>
        JAGA Trendy Sp. z o.o.<br />
        ul. Przykładowa 10<br />
        00-000 Warszawa<br />
        Polska (Poland)
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Vertretungsberechtigt</h2>
      <p>Geschäftsführer: Jan Kowalski</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Kontakt</h2>
      <p>
        E-Mail: kontakt@jagatrendy.pl<br />
        Telefon: +48 123 456 789
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Registrierung</h2>
      <p>
        Eingetragen im KRS (Krajowy Rejestr Sądowy): 0000000000<br />
        REGON: 000000000<br />
        NIP (VAT-ID): PL0000000000
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Haftungshinweis</h2>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
        für externe Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
        deren Betreiber verantwortlich.
      </p>
    </div>
  );
};

export default Impressum;
