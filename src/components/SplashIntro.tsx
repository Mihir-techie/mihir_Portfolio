import { useState, useEffect } from "react";
import achievement1 from "@/assets/achievement-1.png";
import achievement2 from "@/assets/achievement-2.png";
import achievement3 from "@/assets/achievement-3.png";
import achievement4 from "@/assets/achievement-4.png";
import achievement5 from "@/assets/achievement-5.png";
import profilePhoto from "@/assets/profile-photo.jpg";

const images = [achievement1, achievement4, achievement2, achievement5, achievement3];

const SplashIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0); // 0=photos cycling, 1=name reveal, 2=fade out
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (phase === 0) {
      if (currentImg < images.length - 1) {
        const t = setTimeout(() => setCurrentImg((p) => p + 1), 600);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase(1), 600);
        return () => clearTimeout(t);
      }
    }
    if (phase === 1) {
      const t = setTimeout(() => setPhase(2), 2000);
      return () => clearTimeout(t);
    }
    if (phase === 2) {
      const t = setTimeout(onComplete, 800);
      return () => clearTimeout(t);
    }
  }, [phase, currentImg, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-700 ${
        phase === 2 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {phase === 0 && (
        <div className="relative w-72 h-72 sm:w-96 sm:h-96">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-500 ${
                i === currentImg
                  ? "opacity-100 scale-100"
                  : i < currentImg
                  ? "opacity-0 scale-95 -translate-x-10"
                  : "opacity-0 scale-95 translate-x-10"
              }`}
              style={{
                boxShadow: i === currentImg ? "0 0 60px hsl(199 89% 48% / 0.4)" : "none",
              }}
            />
          ))}
          {/* Progress dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentImg ? "bg-primary w-6" : i < currentImg ? "bg-primary/50" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {phase === 1 && (
        <div className="text-center space-y-6 animate-fade-in">
          <div className="relative w-28 h-28 mx-auto mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-50 animate-pulse" />
            <img
              src={profilePhoto}
              alt="Mihir"
              className="relative w-full h-full object-cover rounded-full border-2 border-primary/30"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold">
            <span className="gradient-text">Mihir Kumar Panigrahi</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Data Scientist • ML Engineer • Problem Solver
          </p>
          <div className="flex justify-center gap-1 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {["30+", "Projects"].map((t, i) => (
              <span key={i} className="text-sm text-primary font-semibold">
                {t}{" "}
              </span>
            ))}
            <span className="text-sm text-muted-foreground">• Hackathon Winner • Real-World Impact</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashIntro;
