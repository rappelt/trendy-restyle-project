import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Mail, MapPin, Phone, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { VoiceChat } from "@/components/ui/voice-chat";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.successTitle'),
        description: t('contact.successDesc'),
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
            {t('common.backToHome')}
          </Link>
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Architects Hook */}
          <div className="mb-12 rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-6 sm:p-8 lg:p-10 shadow-lg">
            <div className="text-center space-y-4">
              {/* Badge with Icon inline */}
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Compass className="h-4 w-4 text-primary" />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {t('contact.architectsHookBadge')}
                </p>
              </div>
              
              {/* Title - centered */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground max-w-2xl mx-auto">
                {t('contact.architectsHookTitle')}
              </h2>
              
              {/* Main text - full width with better readability */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-4xl mx-auto text-left sm:text-center">
                {t('contact.architectsHookText')}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-muted-foreground italic">
                {t('contact.architectsHookCta')}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Compass className="h-4 w-4" />
                <span>{t('contact.architectsHookResponse')}</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-[var(--shadow-medium)]">
              <CardHeader>
                <CardTitle className="text-2xl">{t('contact.formTitle')}</CardTitle>
                <CardDescription>
                  {t('contact.formDesc')}
                  <strong className="block mt-2 text-foreground">{t('contact.commercialOnly')}</strong>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">{t('contact.firstName')} {t('common.required')}</Label>
                      <Input id="firstname" name="firstname" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">{t('contact.lastName')} {t('common.required')}</Label>
                      <Input id="lastname" name="lastname" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">{t('contact.company')} {t('common.required')}</Label>
                    <Input id="company" name="company" required placeholder={t('contact.companyPlaceholder')} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.email')} {t('common.required')}</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact.phone')}</Label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">{t('contact.projectType')} {t('common.required')}</Label>
                    <Input 
                      id="projectType" 
                      name="projectType" 
                      required 
                      placeholder={t('contact.projectTypePlaceholder')}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.message')} {t('common.required')}</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={5}
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('contact.submitting') : t('contact.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Voice Chat Widget - positioned after form */}
            <div className="space-y-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 p-8 rounded-3xl border-2 border-orange-300 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-3">
                  {t('contact.voiceChatIntro')}
                </h3>
                <p className="text-base text-orange-700 dark:text-orange-300">
                  Schnelle Antworten durch KI-gestützte Beratung
                </p>
              </div>
              <div className="max-w-xl mx-auto">
                <VoiceChat
                  agentId="agent_1601kcaqkqkwf1qrt795gjenycvr"
                  agentName={t('contact.voiceAgentName')}
                  description={t('contact.voiceAgentDesc')}
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="shadow-[var(--shadow-medium)]">
                <CardHeader>
                  <CardTitle className="text-2xl">{t('contact.contactInfo')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">{t('contact.address')}</h3>
                      <p className="text-muted-foreground">
                        Jaga Trendy<br />
                        ul. Chrobrego 79F<br />
                        Gdańsk, Polska
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">{t('contact.email')}</h3>
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
                      <h3 className="font-semibold mb-1 text-foreground">{t('contact.phone')}</h3>
                      <p className="text-muted-foreground">
                        {t('contact.phoneDesc')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-medium)] bg-primary text-primary-foreground">
                <CardHeader>
                  <Building2 className="w-10 h-10 mb-2" />
                  <CardTitle className="text-2xl">{t('contact.commercial')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opacity-90">
                    {t('contact.commercialDesc')}
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {t('contact.planning')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {t('contact.comprehensive')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {t('contact.longterm')}
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
            Jaga Trendy - Gdańsk, ul. Chrobrego 79F
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
