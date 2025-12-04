import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Men Haqimda", href: "#about" },
    { label: "Ko'nikmalar", href: "#skills" },
    { label: "Loyihalar", href: "#projects" },
    { label: "Bog'lanish", href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Asadbek Raximov
            </h3>
            <p className="text-sm text-muted-foreground">
              Mazmunli raqamli tajribalar yaratayotgan boshlang'ich dasturchi. Hozirda
              TATUda o'qiyapman va loyihalar orqali ko'nikmalarimni rivojlantirmoqdaman.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Tezkor Havolalar</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Ijtimoiy Tarmoqlar</h4>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10"
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
                className="rounded-full hover:bg-primary/10"
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
                className="rounded-full hover:bg-primary/10"
                asChild
              >
                <a href="mailto:asadbekme2002@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Asadbek Raximov. Barcha huquqlar himoyalangan.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Heart className="h-4 w-4 text-red-500 fill-red-500" /> bilan va React yordamida yaratilgan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
