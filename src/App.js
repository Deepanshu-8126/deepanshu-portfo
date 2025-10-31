import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaInstagram, 
  FaGithub,
  FaPython, 
  FaEnvelope,
  FaArrowRight,
  FaChartLine,
  FaDownload,
  FaBars,
  FaTimes,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // EDIT YOUR INFO HERE
  const profile = {
    name: "Deepanshu Kapri",
    tagline: "Aspiring Data Scientist | BCA 2nd Year Student",
    photo: "https://i.imgur.com/QekwifX.png",
    about: "I'm a passionate BCA 2nd-year student with a deep interest in Data Science and Python programming. I love transforming raw data into meaningful insights and building analytical solutions. When I'm not coding or exploring datasets, you'll find me on the football field pursuing my other passion. Always eager to learn and grow in the field of data analytics and machine learning.",
    email: "deepanshukapri4@gmail.com",
    resume: "https://drive.google.com/file/d/YOUR-ID/view",
    linkedin: "https://www.linkedin.com/in/deepanshu-kapri-2518a5384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/deepanshu_lifftsss.05?igsh=MjE2ZWJqNzBxNnMw",
    github: "https://github.com/Deepanshu-8126"
  };

  const skills = [
    { name: "Python", level: 85, color: "bg-gradient-to-r from-blue-500 to-yellow-400" },
    { name: "NumPy", level: 80, color: "bg-gradient-to-r from-blue-400 to-blue-600" },
    { name: "Pandas", level: 75, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: "Matplotlib", level: 70, color: "bg-gradient-to-r from-green-400 to-blue-500" },
    { name: "HTML", level: 90, color: "bg-gradient-to-r from-orange-500 to-red-500" },
    { name: "CSS", level: 85, color: "bg-gradient-to-r from-blue-500 to-blue-700" }
  ];

  const tools = [
    "Jupyter Notebook",
    "Git",
    "GitHub",
    "Excel",
    "Power BI"
  ];

  const projects = [
    {
      title: "Data Analysis Dashboard",
      desc: "Interactive dashboard built with Python and Matplotlib to visualize sales data, trends, and key business metrics with real-time filtering capabilities.",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      link: "https://github.com/deepanshukapri/data-dashboard"
    },
    {
      title: "Weather Data Visualization",
      desc: "Comprehensive weather analysis tool that processes historical climate data and generates insightful visualizations for pattern recognition.",
      tags: ["Python", "API", "Data Viz"],
      link: "https://github.com/deepanshukapri/weather-viz"
    },
    {
      title: "NumPy Matrix Operations",
      desc: "Library of optimized matrix operations and linear algebra functions using NumPy, including eigenvalue computation and matrix decomposition.",
      tags: ["Python", "NumPy", "Math"],
      link: "https://github.com/deepanshukapri/numpy-ops"
    },
    {
      title: "SQL Database Manager",
      desc: "Database management system with CRUD operations, query optimization, and data migration tools for efficient data handling.",
      tags: ["SQL", "Python", "Database"],
      link: "https://github.com/deepanshukapri/sql-manager"
    }
  ];

  const achievements = [
    { title: "Data Science Bootcamp", issuer: "Coursera", year: "2024" },
    { title: "Python for Data Science", issuer: "IBM", year: "2023" },
    { title: "Best Project Award", issuer: "College Hackathon", year: "2024" }
  ];

  return (
    <div className="bg-dark min-h-screen relative overflow-x-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-dark/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DK
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#about" className="text-gray-300 hover:text-primary transition">About</a>
              <a href="#skills" className="text-gray-300 hover:text-primary transition">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-primary transition">Projects</a>
              <a href="#achievements" className="text-gray-300 hover:text-primary transition">Achievements</a>
              <a href="#contact" className="text-gray-300 hover:text-primary transition">Contact</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary transition">
                <FaGithub size={22} />
              </a>
            </div>

            {/* Mobile Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#about" onClick={() => setMenuOpen(false)} className="block text-gray-300">About</a>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="block text-gray-300">Skills</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="block text-gray-300">Projects</a>
              <a href="#achievements" onClick={() => setMenuOpen(false)} className="block text-gray-300">Achievements</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-300">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative z-10">
        <div className="text-center max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-40"></div>
              <img 
                src={profile.photo} 
                alt={profile.name}
                className="relative w-40 h-40 rounded-full border-4 border-primary shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            {profile.name}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            {profile.tagline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-3xl text-gray-400 hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="text-3xl text-gray-400 hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-3xl text-gray-400 hover:text-white transition">
              <FaGithub />
            </a>
          </motion.div>

          <a 
            href="#projects"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            <span>View My Work</span>
            <FaArrowRight />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {profile.about}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {['🎓 BCA Student', '🐍 Python Enthusiast', '⚽ Football Lover', '📊 Data Explorer'].map((tag, i) => (
                <span key={i} className="bg-primary/20 border border-primary/40 px-4 py-2 rounded-full text-sm hover:bg-primary/30 transition cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>

          {/* Skills with Progress Bars */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-primary/50 transition">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-primary font-bold text-lg">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-300">
            Tools & Technologies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {tools.map((tool, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-primary/50 transition text-center hover:scale-105 transform cursor-pointer">
                <p className="text-white font-semibold">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition hover:transform hover:scale-105 group">
                
                <div className="text-4xl text-primary mb-4">
                  <FaChartLine />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition">
                  {proj.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {proj.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary/20 hover:bg-primary/30 border border-primary px-4 py-2 rounded-lg text-sm transition"
                >
                  <FaGithub />
                  <span>View Code</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Achievements & <span className="text-primary">Certificates</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((cert, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-primary/50 transition text-center hover:scale-105 transform cursor-pointer">
                <div className="text-5xl text-primary mb-4">
                  🏆
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-primary text-sm font-semibold">{cert.year}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-secondary px-10 py-5 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>

          <p className="text-gray-400 text-lg mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-primary to-secondary px-10 py-5 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              <FaEnvelope size={24} />
              <span>Send Email</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-full text-white font-semibold text-lg transition-all"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 {profile.name}. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition">
                <FaLinkedin size={20} />
              </a>
              <a href={profile.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition">
                <FaInstagram size={20} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;