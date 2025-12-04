import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Xabar yuborildi!",
        description: "Bog'langaningiz uchun rahmat. Tez orada javob beraman!",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bog'lanish</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Savolingiz bormi yoki birga ishlashni xohlaysizmi? Bemalol bog'laning!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Aloqa Ma'lumotlari</h3>

            <Card className="border-border hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        className="text-muted-foreground hover:text-primary transition-colors"
                        href="mailto:asadbekme2002@gmail.com"
                      >
                        asadbekme2002@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Joylashuv</h4>
                      <p className="text-muted-foreground">
                        Urganch, O'zbekiston
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telegram</h4>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        href="https://t.me/asadbekodev"
                      >
                        @asadbekodev
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-gradient-hero">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Javob Vaqti</h4>
                <p className="text-sm text-foreground/80">
                  Odatda 24-48 soat ichida javob beraman. Sizdan xabar kutaman!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="border-border shadow-card">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ism
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ismingiz"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sizning.email@misol.com"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Xabar
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Loyihangiz yoki savolingiz haqida yozing..."
                      required
                      rows={5}
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Yuborilmoqda..."
                    ) : (
                      <>
                        Xabar Yuborish
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
