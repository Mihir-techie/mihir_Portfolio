import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text">Mihir Kumar Panigrahi</span>
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Data Scientist & ML Engineer passionate about building intelligent solutions
              that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#skills" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://github.com/Mihir-techie"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 glass-card rounded-full hover-glow transition-all"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mihir-kumar-panigrahi-9b4b6627a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 glass-card rounded-full hover-glow transition-all"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:mihirkumarpanigrahi2002@gmail.com"
                className="p-2 sm:p-3 glass-card rounded-full hover-glow transition-all"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border/50 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            <span>© {currentYear} Mihir Kumar Panigrahi.</span>
            <span className="hidden sm:inline flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-primary fill-primary inline" /> using React & Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
