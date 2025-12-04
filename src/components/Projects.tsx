import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import foodImage from "@/assets/project-food.jpg";
import medicalImage from "@/assets/project-medical.jpg";
import createxImage from "@/assets/project-createx.jpg";

const projects = [
  {
    title: "Ovqat Veb-sayti",
    description:
      "Zamonaviy ovqat buyurtma platformasi: intuitiv menyu tizimi, savatcha funksiyasi va adaptiv dizayn. Foydalanuvchi tajribasi va toza UI ga e'tibor qaratilgan.",
    image: foodImage,
    technologies: ["HTML", "CSS", "JavaScript", "Adaptiv Dizayn"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Tibbiy Yordam Veb-sayti",
    description:
      "Bemorlarni tibbiy xizmatlar bilan bog'laydigan sog'liqni saqlash platformasi. Uchrashuvni band qilish, shifokor profillari va sog'liq ma'lumotlari resurslari.",
    image: medicalImage,
    technologies: ["React", "CSS", "API Integratsiya", "Formalar"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Createx Landing Page",
    description:
      "Qurilish kompaniyasi uchun korporativ landing sahifa. Xizmatlar, portfolio va kompaniya ma'lumotlarini zamonaviy dizayn tamoyillari bilan namoyish etadi.",
    image: createxImage,
    technologies: ["HTML", "CSS", "JavaScript", "Animatsiya"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tanlangan Loyihalar</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Amaliy loyihalar orqali so'nggi ishlarim va o'rganish yo'limni namoyish qilaman
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden border-border hover:shadow-card transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/5"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Kod
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-primary hover:shadow-glow"
                  asChild
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
