import { Code2, Database, Brain, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Data Science & ML",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Data Visualization", "Statistical Analysis"]
    },
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python OOP", "Data Structures", "Algorithms", "Problem Solving", "Code Optimization"]
    },
    {
      icon: Layers,
      title: "Backend Development",
      skills: ["Flask", "Django", "REST APIs", "MySQL", "Database Design", "Server Architecture"]
    },
    {
      icon: Database,
      title: "Frontend & Tools",
      skills: ["React", "HTML", "CSS", "JavaScript", "Git", "Jupyter Notebooks"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning data science, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl hover-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mt-1 sm:mt-2">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-muted/50 rounded-lg text-xs sm:text-sm font-medium hover:bg-muted transition-all duration-300 hover:scale-105 cursor-default"
                    style={{ animationDelay: `${index * 0.15 + skillIndex * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
