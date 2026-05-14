import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const CVTemplate = () => {
  return (
    <div id="cv-template" className="bg-white text-gray-900 p-12 max-w-[210mm] mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div className="border-b-4 border-indigo-600 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Mihir Kumar Panigrahi</h1>
        <p className="text-xl text-indigo-600 font-semibold mb-4">Data Scientist & ML Engineer</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>mihirkumarpanigrahi2002@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 9337964941</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <span>linkedin.com/in/mihir-kumar-panigrahi</span>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <span>github.com/Mihir-techie</span>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-indigo-600 pb-1">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          Passionate Data Scientist and ML Engineer specializing in Machine Learning, Deep Learning, and AI solutions. 
          Experienced in transforming complex data into actionable insights and building intelligent systems that solve 
          real-world problems. Proven track record in backend development with Python frameworks and full-stack project delivery.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-indigo-600 pb-1">Technical Skills</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-indigo-600 mb-2">Data Science & ML</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Python, Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, Data Visualization, Statistical Analysis
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-indigo-600 mb-2">Programming</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Python OOP, Data Structures, Algorithms, Problem Solving, Code Optimization
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-indigo-600 mb-2">Backend Development</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Flask, Django, REST APIs, MySQL, Database Design, Server Architecture
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-indigo-600 mb-2">Frontend & Tools</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              React, HTML, CSS, JavaScript, Git, Jupyter Notebooks
            </p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-indigo-600 pb-1">Experience</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-gray-900">AI & Machine Learning Developer</h3>
            <span className="text-sm text-gray-600">4 Months (Paid)</span>
          </div>
          <p className="text-indigo-600 font-semibold mb-2">Upskalor Builder Community</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Built <strong>Dual Loop</strong> — an AI companion for depression & anxiety using NLP, ML and a dual-feedback CBT engine (Python, Flask, React)</li>
            <li>Shipped production-ready AI / ML solutions for the builder community</li>
            <li>Owned features end-to-end: data pipeline, model, API and UI</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-gray-900">AI/ML Intern</h3>
            <span className="text-sm text-gray-600">2023 - 2024</span>
          </div>
          <p className="text-indigo-600 font-semibold mb-2">Central Tool Training Center</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Developed and implemented machine learning models for real-world applications</li>
            <li>Worked on deep learning projects using TensorFlow and PyTorch</li>
            <li>Collaborated with team on AI-driven solutions for industry problems</li>
            <li>Gained hands-on experience in model deployment and optimization</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-gray-900">Freelance Data Scientist & Full-Stack Developer</h3>
            <span className="text-sm text-gray-600">2023 - Present</span>
          </div>
          <p className="text-indigo-600 font-semibold mb-2">Self-Employed</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Delivered <strong>Code of Crime</strong> — crime intelligence dashboard (React + Python ML)</li>
            <li>Built <strong>Annexra Tasty Food</strong> — full client food-delivery app with REST APIs</li>
            <li>Launched <strong>Crow Cred</strong> — social media platform with realtime engagement</li>
            <li>Shipped FiUnite (fintech) and Smart Future Agriculture (AI) for paying clients</li>
            <li>30+ projects delivered with 100% client satisfaction</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-indigo-600 pb-1">Key Projects</h2>
        
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-gray-900">Dual Loop — Mental Wellness AI (Upskalor)</h3>
            <p className="text-sm text-gray-700 mb-1">AI companion for depression & anxiety using a dual-feedback CBT engine</p>
            <p className="text-xs text-indigo-600">Tech: Python, Flask, NLP, Machine Learning, React • github.com/Mihir-techie/Dual_Loop</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Code of Crime — Crime Intelligence Platform (Freelance)</h3>
            <p className="text-sm text-gray-700 mb-1">Crime classification & visualization dashboard for investigators</p>
            <p className="text-xs text-indigo-600">Tech: React, Python, Data Visualization • github.com/Mihir-techie/Code_of_crime</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Annexra Tasty Food — Delivery App (Freelance)</h3>
            <p className="text-sm text-gray-700 mb-1">Client food-delivery platform with live tracking and REST APIs</p>
            <p className="text-xs text-indigo-600">Tech: React, REST APIs, Tailwind, Full Stack • github.com/Mihir-techie/annexra_testy_food</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Crow Cred — Social Media Platform (Freelance)</h3>
            <p className="text-sm text-gray-700 mb-1">From-scratch social network with feeds, profiles & realtime interactions</p>
            <p className="text-xs text-indigo-600">Tech: React, Node, Realtime • github.com/Mihir-techie/Crow_cred_67</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Weather Forecast Application</h3>
            <p className="text-sm text-gray-700 mb-1">Full-stack weather forecasting app with ML-powered predictions and real-time API integration</p>
            <p className="text-xs text-indigo-600">Technologies: API Integration, React, Flask, Machine Learning</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">FiUnite - Financial Technology Platform</h3>
            <p className="text-sm text-gray-700 mb-1">Full-stack financial management platform with ML-powered insights</p>
            <p className="text-xs text-indigo-600">Technologies: Flask, React, Machine Learning, MySQL</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Smart Future Agriculture Model</h3>
            <p className="text-sm text-gray-700 mb-1">AI-driven agricultural prediction system for crop optimization</p>
            <p className="text-xs text-indigo-600">Technologies: Deep Learning, Python, Flask, Data Visualization</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">AI Drug Discovery System</h3>
            <p className="text-sm text-gray-700 mb-1">Machine learning model for pharmaceutical compound analysis</p>
            <p className="text-xs text-indigo-600">Technologies: TensorFlow, Scikit-learn, Pandas, NumPy</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Book Recommendation System</h3>
            <p className="text-sm text-gray-700 mb-1">Collaborative filtering-based recommendation engine</p>
            <p className="text-xs text-indigo-600">Technologies: Python, Machine Learning, Data Analysis</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Predictive Analytics Suite</h3>
            <p className="text-sm text-gray-700 mb-1">Heart Disease, Water Quality, and House Price prediction models</p>
            <p className="text-xs text-indigo-600">Technologies: Scikit-learn, Pandas, Statistical Analysis, Flask</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">Uber Data Analysis Project</h3>
            <p className="text-sm text-gray-700 mb-1">Large-scale data analysis and visualization of ride-sharing patterns</p>
            <p className="text-xs text-indigo-600">Technologies: Python, Pandas, Data Visualization, Statistical Analysis</p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-indigo-600 pb-1">Achievements</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>🥇 1st Place — National Level Hackathon (Agastya & Synopsys Organisation)</li>
          <li>🥇 1st Place — Inter-College Hackathon</li>
          <li>🥈 2nd Place — Inter-College Hackathon (Solo ML & Backend Development)</li>
          <li>🏆 Top 5 Finalist — AIoT Hackathon 2026 (Trident Academy, Cisco & Nasscom)</li>
          <li>🏆 Top 9 — Google Developer Hackathon (out of 24 teams)</li>
          <li>Developed 30+ projects and still solving real-world problems</li>
        </ul>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-indigo-600 pb-1">Education</h2>
        <div>
          <h3 className="font-bold text-gray-900">Bachelor's Degree in Computer Science</h3>
          <p className="text-sm text-gray-700">Specialization in Data Science and Machine Learning</p>
        </div>
      </div>
    </div>
  );
};

export default CVTemplate;
