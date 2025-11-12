import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Anfrage gesendet!",
        description: "Wir werden uns in Kürze bei Ihnen melden.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              Jaga Trendy
            </Link>
            <nav className="flex items-center gap-6">
              <Link to="/manufacturers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Hersteller
              </Link>
              <Link to="/contact" className="text-sm font-medium text-foreground">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Kontakt & Beratung
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Wir unterstützen gewerbliche Kunden bei der Planung und Realisierung ihrer Einrichtungsprojekte. 
            Kontaktieren Sie uns für eine persönliche Beratung.
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
                <CardTitle className="text-2xl">Beratungsanfrage</CardTitle>
                <CardDescription>
                  Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen. 
                  <strong className="block mt-2 text-foreground">Nur für gewerbliche Kunden.</strong>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">Vorname *</Label>
                      <Input id="firstname" name="firstname" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">Nachname *</Label>
                      <Input id="lastname" name="lastname" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Firma *</Label>
                    <Input id="company" name="company" required placeholder="Ihr Firmenname" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Art des Projekts *</Label>
                    <Input 
                      id="projectType" 
                      name="projectType" 
                      required 
                      placeholder="z.B. Büroeinrichtung, Konferenzraum, Restaurant"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Ihre Nachricht *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={5}
                      placeholder="Beschreiben Sie Ihr Projekt und wie wir Sie unterstützen können..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-[var(--shadow-medium)]">
                <CardHeader>
                  <CardTitle className="text-2xl">Kontaktinformationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Adresse</h3>
                      <p className="text-muted-foreground">
                        Jaga Trendy<br />
                        ul. Chrobrego 78C<br />
                        Gdańsk, Polen
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">E-Mail</h3>
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
                        Kontaktieren Sie uns per E-Mail<br />
                        für Terminvereinbarungen
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-medium)] bg-primary text-primary-foreground">
                <CardHeader>
                  <Building2 className="w-10 h-10 mb-2" />
                  <CardTitle className="text-2xl">Gewerbliche Kunden</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opacity-90">
                    Wir spezialisieren uns auf B2B-Projekte und bieten professionelle 
                    Beratung, Planung und Umsetzung für Unternehmen, Büros, Hotels, 
                    Restaurants und öffentliche Einrichtungen.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Individuelle Projektplanung
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Komplettlösungen aus einer Hand
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Langfristige Partnerschaft
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
