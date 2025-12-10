import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Briefcase, GraduationCap, ChevronDown, Menu, X, Award, GitPullRequest } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Revenue System Optimization",
      description: "Designed a Python-based microservice to analyze business logic, summarize data from multiple DB points, and expose it via APIs. Refactored Node.js and Laravel applications for scalable data access and faster reporting.",
      tech: ["Python", "MySQL", "Node.js", "Laravel", "REST APIs"],
      impact: "20% faster processing"
    },
    {
      title: "Load Balancer Migration",
      description: "Migrated from GCP Load Balancer to Envoy, configuring YAML routing rules and conducting load testing at 100K RPM. Achieved improved health checks, session-based routing, and fault tolerance.",
      tech: ["Envoy", "GCP", "Prometheus", "Grafana", "Node.js"],
      impact: "Reduced cloud cost & latency"
    },
    {
      title: "ML & OCR Pipeline",
      description: "Built NSFW content detection pipeline by collaborating with ML team to combine OCR and Image Classification. Converted models to TFLite (Android) and mlpackage (iOS) for mobile inference.",
      tech: ["Python", "TensorFlow", "OCR", "TFLite", "CoreML"],
      impact: "Enhanced content moderation"
    },
    {
      title: "Automation & Reporting Pipeline",
      description: "Developed automation pipeline with Google App Script and GCS to read and clean Excel data from emails, store in buckets, and connect to Trino for analytics with real-time monitoring dashboard.",
      tech: ["Google App Script", "GCS", "Trino", "Node.js"],
      impact: "30% operations efficiency gain"
    },
    {
      title: "AI Integration with Langflow",
      description: "Integrated Langflow-based AI automation for metadata extraction and sales insights. Built custom flows for generating titles from images and exposed via Node.js APIs for real-time content suggestions.",
      tech: ["Langflow", "Python", "Node.js", "REST APIs"],
      impact: "Intelligent content automation"
    },
    {
      title: "Xpresso - Interactive News Feature",
      description: "Co-developed reel-based interactive news feature integrating ad-serving logic within reels for targeted placements, significantly boosting user engagement metrics.",
      tech: ["Node.js", "React", "REST APIs"],
      impact: "18% engagement increase"
    },
    {
      title: "Security & Scalability Enhancement",
      description: "Replaced auto-increment primary keys with UUIDs across Node.js and Laravel applications, migrated environment variables to Google Secret Manager, and implemented Nginx upgrades for enhanced security.",
      tech: ["Node.js", "Laravel", "UUID", "MySQL", "Google Secret Manager"],
      impact: "Zero downtime deployment"
    },
    {
      title: "Version Targeting System",
      description: "Built custom rule-based targeting system modeled after Google's rule evaluation format for dynamic feature access. Simplified configuration using React and Node.js.",
      tech: ["React", "Node.js", "REST APIs"],
      impact: "50% faster dev cycles"
    }
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "Python", "PHP", "Java", "C++"],
    "Frontend Development": ["React", "Redux Toolkit", "Vue.js", "HTML5", "CSS3", "Bootstrap"],
    "Backend Development": ["Node.js", "Express.js", "Laravel", "REST API Design"],
    "Databases": ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Mongoose"],
    "Cloud & DevOps": ["Google Cloud Platform", "Docker", "Kafka", "Nginx", "GCS", "Google App Script"],
    "AI & Machine Learning": ["Langflow", "TensorFlow", "OCR", "Gen AI", "TFLite", "CoreML"],
    "Tools & Others": ["Git", "GitHub", "GitLab", "Postman", "JIRA", "Linux"]
  };

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "Dailyhunt (Verse Innovation)",
      period: "Oct 2023 - Present",
      location: "Bangalore, India",
      highlights: [
        "Optimized revenue system reducing transaction processing time by 20%",
        "Migrated infrastructure to Envoy reducing cloud costs and improving latency",
        "Built ML/OCR pipeline for NSFW content detection on mobile platforms",
        "Integrated AI automation using Langflow for intelligent content generation"
      ]
    },
    {
      role: "Software Engineer",
      company: "Dailyhunt (Verse Innovation)",
      period: "Feb 2023 - Sept 2023",
      location: "Bangalore, India",
      highlights: [
        "Developed version targeting system reducing dev cycles by 50%",
        "Built ad-serving pipeline for Dailyhunt MENA and Public Vibe apps",
        "Co-developed Xpresso feature increasing user engagement by 18%",
        "Enhanced security by migrating to Google Secret Manager"
      ]
    }
  ];

  const openSource = {
    project: "FreeCodeCamp JavaScript Course",
    role: "Open Source Contributor",
    description: "Contributed to improving curriculum quality and code formatting standards",
    contributions: [
      {
        title: "Fixed forEach method formatting",
        pr: "#52988",
        description: "Resolved formatting issues with the forEach method in the Todo app project"
      },
      {
        title: "Enhanced project documentation",
        pr: "#52928",
        description: "Updated descriptions and hint texts for Todo App project, improving clarity and instructional quality"
      }
    ]
  };

  const education = {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science and Engineering",
    university: "Dr. APJ Abdul Kalam Technical University",
    college: "Ajay Kumar Garg Engineering College, Ghaziabad",
    year: "2020",
    grade: "72.77%"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              VS
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Open Source', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-purple-400 transition-colors duration-200"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['Home', 'About', 'Experience', 'Projects', 'Open Source', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block py-2 hover:text-purple-400 transition-colors duration-200"
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <img 
                src="vikas_resume.jpg" 
                alt="Vikas Singh" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Vikas Singh
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4">Senior Software Engineer</p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Building scalable systems, optimizing performance, and integrating AI solutions at Dailyhunt
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://github.com/vikas-1729" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-all duration-200 hover:scale-105">
              <Github size={20} /> GitHub
            </a>
            <a href="https://linkedin.com/in/vikassingh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-200 hover:scale-105">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="mailto:vikas.17299271@gmail.com" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-200 hover:scale-105">
              <Mail size={20} /> Email
            </a>
          </div>

          <a href="#about" className="inline-block animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-500/20">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              Senior Software Engineer with 33 months of experience at Dailyhunt (Verse Innovation), specializing in building high-performance systems, revenue optimization, and AI integration. Passionate about creating scalable solutions that drive business impact.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              My expertise spans full-stack development, cloud infrastructure, and machine learning pipelines. I've successfully improved system performance by 20%, reduced operational costs through infrastructure optimization, and increased user engagement by 18% through innovative features.
            </p>
            
            {/* Education */}
            <div className="mt-8 p-6 bg-slate-700/30 rounded-xl border border-purple-500/10">
              <div className="flex items-start gap-3 mb-4">
                <GraduationCap className="text-purple-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-bold mb-2">Education</h3>
                  <p className="text-gray-300">{education.degree} in {education.major}</p>
                  <p className="text-gray-400 text-sm mt-1">{education.college}</p>
                  <p className="text-gray-400 text-sm">{education.university}</p>
                  <p className="text-gray-400 text-sm mt-1">{education.year} • {education.grade}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <MapPin className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400">Bangalore, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400">+91 8851321638</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400 break-all">vikas.17299271@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Github className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a href="https://github.com/vikas-1729" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">@vikas-1729</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 p-3 rounded-lg flex-shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-purple-400 mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-2 sm:gap-4 text-sm text-gray-400 mb-4">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm sm:text-base text-gray-300 flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Key Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-3 mb-4">
                  <Code className="text-purple-400 mt-1 flex-shrink-0" size={24} />
                  <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <span className="text-xs sm:text-sm font-semibold text-green-400">✓ {project.impact}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-purple-600/30 px-3 py-1 rounded-full border border-purple-500/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section id="open-source" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Open Source Contributions
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-500/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                <GitPullRequest size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{openSource.project}</h3>
                <p className="text-green-400 mb-3">{openSource.role}</p>
                <p className="text-gray-300 mb-6">{openSource.description}</p>
                
                <div className="space-y-4">
                  {openSource.contributions.map((contribution, index) => (
                    <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-purple-500/10">
                      <div className="flex items-start gap-3">
                        <Award className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="font-semibold text-gray-200 mb-1">{contribution.title}</h4>
                          <p className="text-sm text-gray-400 mb-2">{contribution.description}</p>
                          <a 
                            href={`https://github.com/freeCodeCamp/freeCodeCamp/pull/${contribution.pr.replace('#', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-purple-400 hover:text-purple-300 font-mono"
                          >
                            Pull Request {contribution.pr} →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-500/20">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-purple-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="text-sm bg-slate-700 px-3 py-1 rounded-lg hover:bg-purple-600/30 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-12">
            I'm always open to discussing new opportunities, interesting projects, or tech collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:vikas.17299271@gmail.com" className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 text-base sm:text-lg">
              <Mail size={24} /> Email Me
            </a>
            <a href="https://linkedin.com/in/vikassingh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 text-base sm:text-lg">
              <Linkedin size={24} /> LinkedIn
            </a>
            <a href="https://github.com/vikas-1729" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 text-base sm:text-lg">
              <Github size={24} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p className="text-sm sm:text-base">© 2025 Vikas Singh. All rights reserved.</p>
          <p className="text-xs sm:text-sm mt-2">Senior Software Engineer • Open Source Contributor</p>
        </div>
      </footer>
    </div>
  );
}