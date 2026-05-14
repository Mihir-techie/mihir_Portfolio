import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Dual Loop — Mental Wellness AI",
      description: "Story: Built during my Upskalor internship to help people fight depression & anxiety. A dual-loop system that listens to mood signals, runs CBT-style reflection prompts, and adapts responses with ML — turning lonely nights into guided self-care sessions.",
      tags: ["Python", "ML", "NLP", "Flask", "Mental Health AI"],
      githubUrl: "https://github.com/Mihir-techie/Dual_Loop",
      category: "AI/ML"
    },
    {
      title: "Code of Crime — Crime Intel Platform",
      description: "Story: A freelancing build for a client who wanted to visualize crime patterns. Combined a clean React UI with a Python backend that classifies, tags and maps incidents so investigators can spot hotspots in seconds.",
      tags: ["React", "Python", "Data Viz", "Backend"],
      githubUrl: "https://github.com/Mihir-techie/Code_of_crime",
      category: "Freelance"
    },
    {
      title: "Annexra Tasty Food — Delivery App",
      description: "Story: A client-based food delivery experience — from menu browsing to live order tracking. Designed an appetizing UI, wired up REST APIs, and shipped a smooth mobile-first checkout that real customers use.",
      tags: ["React", "REST API", "Tailwind", "Full Stack"],
      githubUrl: "https://github.com/Mihir-techie/annexra_testy_food",
      category: "Freelance"
    },
    {
      title: "Crow Cred — Social Media Platform",
      description: "Story: A freelancing project to launch a niche social network. Built feeds, profiles, credibility scoring and realtime interactions — a from-scratch social platform engineered for engagement.",
      tags: ["React", "Node", "Realtime", "Social"],
      githubUrl: "https://github.com/Mihir-techie/Crow_cred_67",
      category: "Freelance"
    },
    {
      title: "Weather Forecast App",
      description: "Full-stack weather forecasting application with ML-powered predictions, real-time API integration, and beautiful responsive UI.",
      tags: ["API", "Frontend", "Backend", "Machine Learning"],
      liveUrl: "https://weath-z2qn.onrender.com/",
      githubUrl: "https://github.com/Mihir-techie/weather_Forcast",
      category: "Full Stack"
    },
    {
      title: "FiUnite - Financial Platform",
      description: "A comprehensive financial management platform with advanced analytics and user management features.",
      tags: ["Python", "Flask", "MySQL", "React"],
      liveUrl: "https://fiunite.onrender.com/welcome",
      category: "Full Stack"
    },
    {
      title: "Smart Future Agriculture",
      description: "AI-powered agriculture monitoring system using machine learning for crop prediction and disease detection.",
      tags: ["ML", "Python", "Data Analysis", "Flask"],
      liveUrl: "https://smart-future-agriculture-model.onrender.com",
      category: "AI/ML"
    },
    {
      title: "Book Recommendation System",
      description: "Collaborative filtering-based recommendation engine for personalized book suggestions.",
      tags: ["Machine Learning", "Python", "Data Mining"],
      githubUrl: "https://github.com/Mihir-techie/Book-Recommendation-System",
      category: "AI/ML"
    },
    {
      title: "AI Drug Discovery",
      description: "Deep learning model for drug discovery and molecular property prediction.",
      tags: ["Deep Learning", "TensorFlow", "Bioinformatics"],
      githubUrl: "https://github.com/Mihir-techie/AI_Drug_Discovery.git",
      category: "AI/ML"
    },
    {
      title: "Uber Data Analysis",
      description: "Comprehensive analysis of Uber ride data with visualization and insights extraction.",
      tags: ["Data Analysis", "Pandas", "Visualization"],
      githubUrl: "https://github.com/Mihir-techie/Uber-Data-Analysis-Project",
      category: "Data Science"
    },
    {
      title: "Heart Disease Prediction",
      description: "Machine learning model for predicting heart disease risk using patient health metrics.",
      tags: ["ML", "Scikit-learn", "Healthcare"],
      githubUrl: "https://github.com/Mihir-techie/Heart-Disease-Prediction-",
      category: "AI/ML"
    },
    {
      title: "Water Quality Prediction",
      description: "ML model for predicting water quality based on various environmental parameters.",
      tags: ["ML", "Environmental", "Python"],
      githubUrl: "https://github.com/Mihir-techie/Water-Quality-Prediction-using-Machine-Learning",
      category: "AI/ML"
    },
    {
      title: "House Price Prediction",
      description: "Regression model for accurate house price prediction using various features.",
      tags: ["ML", "Regression", "Data Science"],
      githubUrl: "https://github.com/Mihir-techie/House-Prediction-",
      category: "AI/ML"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of machine learning, data science, and full-stack development projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card card-3d p-5 sm:p-6 rounded-2xl group animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500 pointer-events-none" />
              <div className="mb-3 sm:mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 sm:px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 sm:px-3 py-1 bg-muted/50 rounded-md text-xs font-medium hover:bg-muted transition-all duration-300 hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 sm:px-3 py-1 bg-muted/50 rounded-md text-xs font-medium">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex gap-2 sm:gap-3">
                {project.liveUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    className="gap-1.5 sm:gap-2 flex-1 text-xs sm:text-sm"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Live Demo</span>
                      <span className="sm:hidden">Demo</span>
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5 sm:gap-2 flex-1 text-xs sm:text-sm"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
