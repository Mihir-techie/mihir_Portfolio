import { Briefcase, Award, Building2 } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey, work experience, and accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Upskalor */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl hover-glow animate-slide-in-left relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
            <div className="flex flex-col sm:flex-row items-start gap-4 pl-4">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold">AI & Machine Learning Developer</h3>
                  <span className="text-sm text-primary font-medium mt-1 sm:mt-0">4 Months • Paid</span>
                </div>
                <p className="text-primary font-medium mb-2">Upskalor Builder Community</p>
                <p className="text-muted-foreground mb-3 text-sm sm:text-base">
                  Worked as a paid intern building AI and Machine Learning solutions. Shipped production-ready
                  ML models and contributed to real-world AI projects within the builder community.
                </p>
                <div className="border-l-2 border-primary/40 pl-3 mb-4 text-sm text-muted-foreground italic">
                  Flagship build: <span className="text-foreground font-semibold not-italic">Dual Loop</span> — an AI companion for people fighting depression and anxiety.
                  Designed a dual-feedback system: one loop captures emotional signals, the other adapts CBT-style
                  prompts using NLP and ML. Built end-to-end with Python, Flask and a clean React UI so users
                  feel heard, not analyzed.
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AI Development", "Machine Learning", "NLP", "Python", "Flask", "Mental Health AI"].map((tag) => (
                    <span key={tag} className="px-2.5 sm:px-3 py-1 bg-muted/50 rounded-md text-xs sm:text-sm hover:bg-muted transition-all duration-300 hover:scale-105">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTTC Internship */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl hover-glow animate-slide-in-right relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-primary" />
            <div className="flex flex-col sm:flex-row items-start gap-4 pl-4">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">AI/ML Intern</h3>
                <p className="text-primary font-medium mb-2">Central Tool Training Center</p>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  Gained hands-on experience in artificial intelligence and machine learning,
                  working on real-world projects and developing advanced ML models for various applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Deep Learning", "Python", "AI Solutions"].map((tag) => (
                    <span key={tag} className="px-2.5 sm:px-3 py-1 bg-muted/50 rounded-md text-xs sm:text-sm hover:bg-muted transition-all duration-300 hover:scale-105">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Freelancing */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl hover-glow animate-slide-in-left relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
            <div className="flex flex-col sm:flex-row items-start gap-4 pl-4">
              <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Freelance Full-Stack & AI Developer</h3>
                <p className="text-accent font-medium mb-2">Independent Client Work</p>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  Delivered 30+ shipping projects for paying clients — from fintech dashboards to AI-powered
                  social platforms. Each project tells a story: a real problem, a real user, real revenue.
                </p>
                <div className="space-y-2 mb-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 bg-accent rounded-full animate-pulse shrink-0" />
                    <span><span className="text-foreground font-semibold">Code of Crime</span> — crime intelligence dashboard with React + Python ML classification.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 bg-accent rounded-full animate-pulse shrink-0" style={{ animationDelay: "0.3s" }} />
                    <span><span className="text-foreground font-semibold">Annexra Tasty Food</span> — food delivery app with live tracking and REST APIs.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 bg-accent rounded-full animate-pulse shrink-0" style={{ animationDelay: "0.6s" }} />
                    <span><span className="text-foreground font-semibold">Crow Cred</span> — full social media platform with feeds, profiles & realtime engagement.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 bg-accent rounded-full animate-pulse shrink-0" style={{ animationDelay: "0.9s" }} />
                    <span><span className="text-foreground font-semibold">FiUnite</span> — financial management platform with analytics.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 bg-accent rounded-full animate-pulse shrink-0" style={{ animationDelay: "1.2s" }} />
                    <span><span className="text-foreground font-semibold">Smart Future Agriculture</span> — AI crop monitoring system.</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node", "Flask/Django", "Python", "MySQL", "Realtime", "REST APIs"].map((tag) => (
                    <span key={tag} className="px-2.5 sm:px-3 py-1 bg-muted/50 rounded-md text-xs sm:text-sm hover:bg-muted transition-all duration-300 hover:scale-105">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
