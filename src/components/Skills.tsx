import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Database, Globe, MessageSquare, Lightbulb } from "lucide-react";

const technicalSkills = [
  {
    icon: Code2,
    name: "HTML & CSS",
    level: 85,
    color: "from-orange-500 to-pink-500",
  },
  {
    icon: Palette,
    name: "JavaScript",
    level: 75,
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Globe,
    name: "React",
    level: 70,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    name: "Ma'lumotlar Bazasi",
    level: 60,
    color: "from-green-500 to-emerald-500",
  },
];

const softSkills = [
  { icon: MessageSquare, name: "Muloqot Qobiliyati" },
  { icon: Lightbulb, name: "Muammolarni Hal Qilish" },
  { icon: Code2, name: "Tafsilotlarga E'tibor" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ko'nikmalar va Tajriba</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O'qishim va loyihalarim orqali rivojlantirmoqda bo'lgan texnik va shaxsiy ko'nikmalarim
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Texnik Ko'nikmalar</h3>
            {technicalSkills.map((skill, index) => (
              <Card
                key={skill.name}
                className="border-border hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                      <skill.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6">Shaxsiy Ko'nikmalar</h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <skill.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="font-medium text-lg">{skill.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info Card */}
            <Card className="border-primary/30 bg-gradient-hero">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 text-lg">Hozirda O'rganmoqdaman</h4>
                <p className="text-sm text-foreground/80">
                  Men onlayn kurslar, universitet loyihalari va shaxsiy tajribalar orqali
                  doimiy ravishda ko'nikmalarimni kengaytirmoqdaman. Asosiy e'tiborim zamonaviy
                  veb-dasturlash texnologiyalari va eng yaxshi amaliyotlarni o'zlashtirishda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
