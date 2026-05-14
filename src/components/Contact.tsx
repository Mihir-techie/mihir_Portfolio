import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-12 rounded-2xl animate-scale-in">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <a
                href="mailto:mihirkumarpanigrahi2002@gmail.com"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all hover-glow group"
              >
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium text-sm sm:text-base truncate">mihirkumarpanigrahi2002@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919778436806"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all hover-glow group"
              >
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-medium text-sm sm:text-base">+91 9337964941</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/mihir-kumar-panigrahi-9b4b6627a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all hover-glow group"
              >
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <p className="font-medium text-sm sm:text-base">Mihir Kumar Panigrahi</p>
                </div>
              </a>

              <a
                href="https://github.com/Mihir-techie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all hover-glow group"
              >
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">GitHub</p>
                  <p className="font-medium text-sm sm:text-base">@Mihir-techie</p>
                </div>
              </a>
            </div>

            <div className="text-center pt-6 sm:pt-8 border-t border-border/50">
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Open to exciting opportunities in Data Science, Machine Learning, and AI
              </p>
              <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
                <a href="mailto:mihirkumarpanigrahi2002@gmail.com">
                  <Mail className="w-5 h-5" />
                  Send Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
