import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import { downloadCV } from "@/utils/downloadCV";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50" />
      {/* Hero grid */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* Floating orbs with more animation */}
      <div className="absolute top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-base sm:text-lg md:text-xl text-primary font-medium animate-fade-in">Hi, I'm</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Mihir Kumar{" "}
                <span className="gradient-text">Panigrahi</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Data Scientist & ML Engineer
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Specializing in Machine Learning, Deep Learning, and AI solutions. 
              Transforming data into actionable insights and building intelligent systems 
              that solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="default" size="lg" className="gap-2 hover-glow w-full sm:w-auto" onClick={downloadCV}>
                <Download className="w-5 h-5" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a 
                href="https://github.com/Mihir-techie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover-glow transition-all"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mihir-kumar-panigrahi-9b4b6627a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover-glow transition-all"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="mailto:mihirkumarpanigrahi2002@gmail.com"
                className="p-3 glass-card rounded-full hover-glow transition-all"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          
          {/* Right - Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right order-first lg:order-last">
            <div className="relative animate-tilt">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-accent to-primary rounded-full blur-2xl opacity-40 animate-pulse-glow" />
              <div className="absolute -inset-2 rounded-full border border-primary/30 animate-spin-slow" />
              <div className="absolute -inset-6 rounded-full border border-accent/20 animate-spin-slow" style={{ animationDirection: "reverse" }} />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 glass-card hover-glow">
                <img
                  src={profilePhoto}
                  alt="Mihir Kumar Panigrahi"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
