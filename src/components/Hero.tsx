import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.08),transparent_50%)]" />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="space-y-2">
            <p className="text-primary font-medium">Salom, men</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Asadbek Raximov
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Boshlang'ich Dasturchi & TATU Talabasi
            </p>
          </div>

          <p className="text-foreground/80 text-lg leading-relaxed max-w-lg">
            18 yoshli kompyuter fanlari talabasi, innovatsion veb-yechimlar yaratishga
            ishtiyoqli. Hozirda dasturlash olamini o'rganmoqdaman, Telegramda o'z
            tajribamni ulashaman va bo'sh vaqtimda futbol o'ynayman.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-gradient-primary shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("#contact")}
            >
              Bog'lanish
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#projects")}
              className="border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Loyihalarni Ko'rish
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 transition-colors"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 transition-colors"
              asChild
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 transition-colors"
              asChild
            >
              <a href="mailto:asadbekme2002@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl" />
          <img
            src={heroImage}
            alt="Asadbek Raximov"
            className="relative rounded-3xl shadow-card w-full h-auto object-cover animate-float"
          />
        </div>
      </div>
    </section>
  );
};
