import { Code2, Newspaper, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const interests = [
  {
    icon: Code2,
    title: "Dasturlash",
    description: "Yangi texnologiyalarni o'rganish va innovatsion yechimlar yaratishga ishtiyoqli.",
  },
  {
    icon: Newspaper,
    title: "Telegram Blog",
    description: "Texnologiya ishqibozlari jamoasiga o'z tajribam va fikrlarimni ulashaman.",
  },
  {
    icon: Trophy,
    title: "Futbol",
    description: "Sevimli sportim orqali faol bo'lib, jamoa bo'lib ishlash ko'nikmalarini rivojlantiraman.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Men Haqimda</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mening tariximni, qiziqishlarimni va meni oldinga haydovchi narsalarni bilib oling
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Bio */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-1 bg-gradient-primary rounded-full" />
                <div>
                  <h3 className="text-2xl font-bold">Asadbek Raximov</h3>
                  <p className="text-muted-foreground">18 yosh</p>
                </div>
              </div>

              <div className="space-y-3 text-foreground/80">
                <p className="leading-relaxed">
                  Men Toshkent Axborot Texnologiyalari Universitetining (TATU) 1-kurs
                  talabasiman, bu yerda kompyuter fanlari va dasturiy ta'minot
                  ishlab chiqish bo'yicha bilim olmoqdaman.
                </p>
                <p className="leading-relaxed">
                  Dasturlashga bo'lgan qiziqishim qiziquvchanlikdan boshlangan va haqiqiy
                  mazmunli raqamli tajribalar yaratishga ishtiyoqqa aylandi. Men doimiy
                  o'rganish va texnik hamda shaxsiy jihatdan o'sish uchun chegaralarimni
                  kengaytirishga ishonaman.
                </p>
                <p className="leading-relaxed">
                  Kod yozmaganim paytlari Telegramda texnologiya bo'yicha fikrlarimni
                  ulashaman yoki yaxshi futbol o'yinidan zavqlanaman. Maqsadlarimga
                  intilgan holda muvozanatli hayot tarzini saqlashga ishonaman.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Joylashuv</p>
                <p className="font-medium">Urganch, O'zbekiston</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Ta'lim</p>
                <p className="font-medium">TATU - 1-kurs</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Holat</p>
                <p className="font-medium">Loyihalarga tayyor</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Tillar</p>
                <p className="font-medium">O'zbek, Ingliz</p>
              </div>
            </div>
          </div>

          {/* Right Side - Interests */}
          <div className="space-y-4 animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6">Qiziqishlarim</h3>
            {interests.map((interest, index) => (
              <Card
                key={interest.title}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
