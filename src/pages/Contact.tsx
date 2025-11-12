import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Header from "@/components/Header";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Zapytanie wysłane!",
        description: "Wkrótce się z Tobą skontaktujemy.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do strony głównej
          </Link>
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Kontakt i konsultacje
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Wspieramy klientów komercyjnych w planowaniu i realizacji projektów wyposażenia wnętrz. 
            Skontaktuj się z nami, aby uzyskać osobistą konsultację.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-[var(--shadow-medium)]">
              <CardHeader>
                <CardTitle className="text-2xl">Zapytanie o konsultację</CardTitle>
                <CardDescription>
                  Wypełnij formularz, a my skontaktujemy się z Tobą w najbliższym czasie. 
                  <strong className="block mt-2 text-foreground">Tylko dla klientów komercyjnych.</strong>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">Imię *</Label>
                      <Input id="firstname" name="firstname" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">Nazwisko *</Label>
                      <Input id="lastname" name="lastname" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Firma *</Label>
                    <Input id="company" name="company" required placeholder="Nazwa Twojej firmy" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Rodzaj projektu *</Label>
                    <Input 
                      id="projectType" 
                      name="projectType" 
                      required 
                      placeholder="np. wyposażenie biura, sala konferencyjna, restauracja"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Twoja wiadomość *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={5}
                      placeholder="Opisz swój projekt i jak możemy Ci pomóc..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-[var(--shadow-medium)]">
                <CardHeader>
                  <CardTitle className="text-2xl">Informacje kontaktowe</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Adres</h3>
                      <p className="text-muted-foreground">
                        Jaga Trendy<br />
                        ul. Chrobrego 78C<br />
                        Gdańsk, Polska
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">E-mail</h3>
                      <a 
                        href="mailto:gdansk@jagatrendy.pl" 
                        className="text-accent hover:underline"
                      >
                        gdansk@jagatrendy.pl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Telefon</h3>
                      <p className="text-muted-foreground">
                        Skontaktuj się z nami przez e-mail<br />
                        aby umówić spotkanie
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-medium)] bg-primary text-primary-foreground">
                <CardHeader>
                  <Building2 className="w-10 h-10 mb-2" />
                  <CardTitle className="text-2xl">Klienci komercyjni</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opacity-90">
                    Specjalizujemy się w projektach B2B i oferujemy profesjonalne 
                    doradztwo, planowanie i realizację dla firm, biur, hoteli, 
                    restauracji i obiektów publicznych.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Indywidualne planowanie projektu
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Kompleksowe rozwiązania z jednego źródła
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Długoterminowa współpraca
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Jaga Trendy - Gdańsk, ul. Chrobrego 78C
          </p>
          <p className="text-sm mt-2 opacity-80">
            gdansk@jagatrendy.pl
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
