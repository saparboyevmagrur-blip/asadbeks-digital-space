import { Code2, Newspaper, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const interests = [{
  icon: Code2,
  title: "Programming",
  description: "Passionate about learning new technologies and building innovative solutions."
}, {
  icon: Newspaper,
  title: "Telegram Blogging",
  description: "Sharing my journey and insights with a growing community of tech enthusiasts."
}, {
  icon: Trophy,
  title: "Football",
  description: "Staying active and building teamwork skills through my favorite sport."
}];
export const About = () => {
  return <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my background, interests, and what drives me forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Bio */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-1 bg-gradient-primary rounded-full" />
                <div>
                  <h3 className="text-2xl font-bold">Asadbek Rakhimov</h3>
                  <p className="text-muted-foreground">18 years old</p>
                </div>
              </div>

              <div className="space-y-3 text-foreground/80">
                <p className="leading-relaxed">
                  I'm a first-year student at Tashkent University of Information
                  Technologies (TATU), where I'm pursuing my passion for computer
                  science and software development.
                </p>
                <p className="leading-relaxed">
                  My journey into programming started with curiosity and has evolved
                  into a genuine passion for creating meaningful digital experiences.
                  I believe in continuous learning and pushing my boundaries to grow
                  both technically and personally.
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you can find me sharing my tech insights on
                  Telegram or enjoying a good football match. I believe in maintaining
                  a balanced lifestyle while pursuing my goals.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Urgench, Uzbekistan</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="font-medium">TATU - 1st Year</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-medium">Available for Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Languages</p>
                <p className="font-medium">Uzbek, English</p>
              </div>
            </div>
          </div>

          {/* Right Side - Interests */}
          <div className="space-y-4 animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6">My Interests</h3>
            {interests.map((interest, index) => <Card key={interest.title} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <interest.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{interest.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};