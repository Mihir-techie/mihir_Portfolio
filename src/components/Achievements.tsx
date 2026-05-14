import { Trophy, Medal, Star, Target, Award } from "lucide-react";
import achievement1 from "@/assets/achievement-1.png";
import achievement2 from "@/assets/achievement-2.png";
import achievement3 from "@/assets/achievement-3.png";
import achievement4 from "@/assets/achievement-4.png";
import achievement5 from "@/assets/achievement-5.png";
import { useState } from "react";

const achievements = [
  {
    title: "🥇 1st Place — National Level Hackathon",
    org: "Agastya & Synopsys Organisation",
    desc: "Won 1st position at a National Level Hackathon, developing a complete ML and Backend solution solo. Received ₹8,000 appreciation prize.",
    image: achievement4,
    icon: Trophy,
    color: "text-yellow-400",
    glow: "shadow-yellow-400/20",
  },
  {
    title: "🥇 1st Place — Inter-College Hackathon",
    org: "Inter-College Competition",
    desc: "Secured 1st position by building a full-stack ML-powered application with robust backend architecture.",
    image: achievement5,
    icon: Medal,
    color: "text-yellow-400",
    glow: "shadow-yellow-400/20",
  },
  {
    title: "🥈 2nd Place — Inter-College Hackathon",
    org: "Inter-College Competition",
    desc: "Achieved 2nd position by developing a proper ML model with complete Backend infrastructure — all done solo.",
    image: achievement1,
    icon: Award,
    color: "text-gray-300",
    glow: "shadow-gray-300/20",
  },
  {
    title: "🏆 Finalist — AIoT Hackathon 2026",
    org: "Trident Academy, Cisco & Nasscom Foundation",
    desc: "Reached Top 5 finalist at the AIoT Hackathon — where AI meets Internet of Things.",
    image: achievement2,
    icon: Target,
    color: "text-primary",
    glow: "shadow-primary/20",
  },
  {
    title: "🏆 Top 9 — Google Developer Hackathon",
    org: "Google Developer Group",
    desc: "Out of 24 teams, made it to the final 9 teams in the Google Developer Hackathon.",
    image: achievement3,
    icon: Star,
    color: "text-accent",
    glow: "shadow-accent/20",
  },
];

const Achievements = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span> & Awards
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hackathon victories and recognitions — 30+ projects built, still solving real-world problems
          </p>
        </div>

        {/* Achievement cards - Hotstar-style horizontal scroll on mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className={`glass-card rounded-2xl overflow-hidden hover-glow group cursor-pointer animate-scale-in transition-all duration-500 ${
                  selected === i ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => setSelected(selected === i ? null : i)}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className={`absolute top-3 right-3 p-2 glass-card rounded-xl ${a.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-sm sm:text-base mb-1 group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-xs text-primary/80 font-medium mb-2">{a.org}</p>
                  <p
                    className={`text-xs text-muted-foreground leading-relaxed transition-all duration-300 ${
                      selected === i ? "max-h-40" : "max-h-10 overflow-hidden"
                    }`}
                  >
                    {a.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
