import React, { useState, useEffect } from "react";
import "./index.css";

import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaBars,
  FaTimes,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiC,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const projects = [
    {
      id: 1,
      name: "OpportUnity",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
      short:
        "AI-powered job recommendation platform for specially-abled individuals.",

      tech: ["React.js", "TailwindCSS", "MongoDB", "Firebase"],

      details: [
        "Users can specify disabilities, skills, preferred location and salary expectations.",
        "Government-issued PwD certificate verification.",
        "AI-powered personalized job matching.",
        "Built-in resume generator.",
        "Accessible user interface focused on inclusivity.",
        "Secure profile management and authentication.",
      ],
    },

    {
      id: 2,
      name: "GatherLink",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200",

      short:
        "Campus engagement platform connecting clubs and students.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
      ],

      details: [
        "Clubs can post stories, highlights and announcements.",
        "Students can react, comment and bookmark posts.",
        "Instant downloadable event certificates.",
        "Real-time chat using Socket.IO.",
        "JWT authentication and Bcrypt security.",
        "Centralized dashboard for engagement.",
      ],
    },

    {
      id: 3,
      name: "FinPredict",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200",

      short:
        "AI-powered financial market prediction system.",

      tech: ["Python", "FastAPI", "FinBERT", "Docker", "MongoDB"],

      details: [
        "Microservices architecture.",
        "Financial news crawler.",
        "FinBERT sentiment analysis.",
        "Financial signal generation.",
        "REST API architecture.",
        "Scalable and interpretable market insights.",
      ],
    },
  ];

  const skills = [
    {
      title: "Languages",
      items: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C", icon: <SiC /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Socket.IO", icon: <SiSocketdotio /> },
      ],
    },
    {
      title: "Database & Tools",
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
  ];

  return (
    <div className="app">
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      {/* NAVBAR */}

      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Preetham B</h2>

          <div
            className={`nav-links ${
              menuOpen ? "active" : ""
            }`}
          >
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className="menu-btn"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </nav>

      {/* HERO */}

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>
            Building
            <br />
            <span className="gradient-text">
              AI-Powered Digital Experiences
            </span>
          </h1>

          <p>
            Full Stack Developer passionate about
            building scalable web applications,
            AI-powered platforms and modern user
            experiences.
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="primary-btn"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Hire Me
            </a>
          </div>

          <div className="stats">
            <div>
              <h2>8.74</h2>
              <p>CGPA</p>
            </div>

            <div>
              <h2>3rd</h2>
              <p>Hackathon Winner</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills">
        <h2 className="section-title">
          Skills & Technologies
        </h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="glass-card skill-card"
            >
              <h3>{skill.title}</h3>

              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span
                    key={item.name}
                    className="tag skill-tag"
                  >
                    <span className="skill-icon">
                      {item.icon}
                    </span>

                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects">
        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card"
              onClick={() =>
                setSelectedProject(project)
              }
            >
              <img
                src={project.image}
                alt={project.name}
              />

              <h3>{project.name}</h3>

              <p>{project.short}</p>

              <button
                className="view-btn"
                aria-label={`View ${project.name}`}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}

      <section id="education">
        <h2 className="section-title">
          Education
        </h2>

        <div className="glass-card education-card">
          <h3>
            National Institute Of Engineering,
            Mysuru
          </h3>

          <p>B.E Information Science</p>

          <span>
            2022 - 2026 | CGPA 8.74
          </span>
        </div>
      </section>

      {/* ACHIEVEMENTS */}

      <section>
        <h2 className="section-title">
          Achievements
        </h2>

        <div className="achievements-grid">
          <div className="glass-card">
            <h3>🏆 Hackfest'25 Finalist</h3>

            <p>
              Selected among 600 teams at
              national-level hackathon.
            </p>
          </div>

          <div className="glass-card">
            <h3>🥉 HaccVerse'25</h3>

            <p>
              Secured 3rd Place in Open
              Innovation Category.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="contact"
      >
        <h2 className="section-title">
          Let's Connect
        </h2>

        <div className="contact-buttons">
          <a href="mailto:bpreetham58@gmail.com">
            Email
          </a>

          <a href="tel:+918073797732">
            Call
          </a>

          <a
            href="https://www.linkedin.com/in/preetham-b-9b8671263/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* MODAL */}

      {selectedProject && (
        <div
          className="project-modal"
          onClick={() =>
            setSelectedProject(null)
          }
        >
          <div
            className="modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="close-btn"
              onClick={() =>
                setSelectedProject(null)
              }
            >
              ✕
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
            />

            <h2>
              {selectedProject.name}
            </h2>

            <p>
              {selectedProject.short}
            </p>

            <h3>Key Features</h3>

            <ul>
              {selectedProject.details.map(
                (item) => (
                  <li key={item}>
                    {item}
                  </li>
                )
              )}
            </ul>

            <div className="tech-tags">
              {selectedProject.tech.map(
                (tech) => (
                  <span
                    key={tech}
                    className="tag"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
