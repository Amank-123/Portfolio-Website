import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

import { FaArrowDown } from "react-icons/fa";
import { BiMouse, BiDownload } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaMobile,
} from "react-icons/fa";
import { SiFirebase, SiGithub, SiJira, SiMysql } from "react-icons/si";

import "./App.css";
import "./contactMe.css";
import "./aboutMe.css";
import "./skill.css";
import "./projects.css";
import "./footer.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || msg.trim() === "")
      return alert("All fields must be filled");
    setLoading(true);
    const serviceID = "service_2ekadfs";
    const templateID = "template_3joz35x";
    const publicKey = "AANzsENtK-r6fbIxM";

    const senderDetailAndMessage = {
      from_name: name,
      from_email: email,
      message: msg,
    };
    emailjs
      .send(serviceID, templateID, senderDetailAndMessage, publicKey)
      .then((response) => {
        setLoading(false);
        setSuccessMsg(
          "✅ Thank you for reaching out! Your message has been sent."
        );
        setEmail("");
        setMsg("");
        setName("");
        setTimeout(() => setSuccessMsg(""), 1500);
      })
      .catch((e) => {
        setTimeout(() => setSuccessMsg(""), 1500);
      });
  };
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "#F7DF1E",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      color: "#61DAFB",
    },
    {
      name: "React Native",
      icon: <FaMobile />,
      color: "#61DAFB",
    },
    {
      name: "Java",
      icon: <FaJava />,
      color: "#ED8B00",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "#00758F",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "rgb(255, 202, 40)",
    },
    {
      name: "Github",
      icon: <SiGithub />,
      color: "rgba(10, 10, 10, 1)",
    },
    {
      name: "Jira",
      icon: <SiJira />,
      color: "rgb(0, 82, 204)",
    },
  ];

  return (
    <div id="Frame">
      <nav id="navbar">
        <text id="Aman">Aman</text>

        <ul id="navElements">
          <a href="#homePage">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#ContactMe">
            <li>Contact</li>
          </a>
        </ul>
      </nav>

      <section id="homePage">
        <div id="centralHP">
          <nav id="verticalNav">
            <a href="https://www.instagram.com/aman019451/" target="_blank">
              <IoLogoInstagram size={45} color="black" />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-kumar-a58388277/"
              target="_blank"
            >
              <IoLogoLinkedin size={45} color="black" />
            </a>
            <a href="https://github.com/Amank-123" target="_blank">
              <IoLogoGithub size={45} color="black" />
            </a>

            <a href="https://x.com/Amankum86909997" target="_blank">
              <FaSquareXTwitter size={45} color="black" />
            </a>
          </nav>
          <section id="HomeMainContent">
            <div id="HomeMainContent-text">
              <h1>Aman Kumar</h1>
              <h4>Frontend & Mobile Developer</h4>
              <p>
                <p>
                  I’m Aman Kumar, currently interning at Ninja Deliveries, with
                  skills in Core Java, React Native, Firebase, and React.js,
                  aspiring to grow as a Fullstack Developer.
                </p>
              </p>
              <a
                href="public/portfolioResume.pdf"
                download="Aman_Kumar_Resume.pdf"
              >
                <button className="primary-button">
                  <BiDownload size={"3vmin"} color="white" />
                  Download Resume
                </button>
              </a>

              {/* White Button with Mouse + Scroll Down + Arrow */}

              <a href="#aboutMe">
                <button className="secondary-button">
                  <BiMouse size={"3.5vmin"} color="black" />
                  Scroll down
                  <FaArrowDown size={"2vmin"} color="black" />
                </button>
              </a>
            </div>
            <div id="HomeMainContent-image">
              <img src="public/profile.jpg" alt="Example" />
            </div>
          </section>
        </div>
      </section>
      <section id="about">
        <div class="about-container">
          <div class="about-text-section">
            <h2 class="about-heading">About Me</h2>

            <p class="about-paragraph">
              Hello! I'm Aman Kumar, a frontend and mobile developer passionate
              about creating practical, user-focused applications. Currently
              interning at Ninja Deliveries, I’ve contributed to
              production-ready apps by building features like coupon systems,
              rider dashboards, and QR-based order management using React
              Native, React.js, Firebase, and Firestore.
            </p>

            <p class="about-paragraph">
              My journey began with a strong foundation in Core Java, where I
              explored concepts like OOP, multithreading, and Java 8 features.
              Over time, I transitioned into modern frontend and mobile
              development, gaining hands-on experience with real-world projects
              that involve database integration, CRUD operations, and scalable
              UI design.
            </p>

            <div class="about-stats-grid">
              <div class="stat-card">
                <i class="fas fa-graduation-cap stat-icon"></i>
                <h4 class="stat-title">Education</h4>
                <p class="stat-description">
                  Bachelor of computer applications
                </p>
              </div>

              <div class="stat-card">
                <i class="fas fa-code stat-icon"></i>
                <h4 class="stat-title">Experience</h4>
                <p class="stat-description">
                  Frontend Development + firebase Intern
                </p>
              </div>
            </div>
          </div>

          <div class="about-cards-section">
            <div class="feature-card">
              <i class="fas fa-laptop-code feature-icon"></i>
              <h3 class="feature-title">What I Do</h3>
              <ul class="feature-list">
                <li>Mobile App Development with React Native & Expo</li>
                <li>Web Development using React.js & modern JavaScript</li>
                <li>Database & Backend Integration with Firebase Firestore</li>
              </ul>
            </div>

            <div class="goal-card">
              <div class="goal-card-content">
                <i class="fas fa-rocket goal-icon"></i>
                <h3 class="goal-title">My Goal</h3>
                <p class="goal-description">
                  To become a skilled Full-Stack Developer and contribute to
                  innovative projects that make a positive impact on people's
                  lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="skills">
        <div className="skills-header">
          <h2 className="skills-title">Skills</h2>
          <p className="skills-subtitle">
            Building amazing things with these technologies
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-box"
              style={{
                "--skill-color": skill.color,
                "--skill-gradient": skill.gradient,
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="skill-box-inner">
                <div className="skill-icon-container">
                  <div className="skill-icon">{skill.icon}</div>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar">
                  <div className="skill-progress"></div>
                </div>
              </div>
              <div className="skill-glow"></div>
            </div>
          ))}
        </div>
      </div>
      <div
        id="projects"
        style={{ padding: "100px 2rem", background: "#f8f9fa" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              color: "#2c3e50",
              position: "relative",
              display: "inline-block",
            }}
          >
            My Projects
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                background: "linear-gradient(45deg, #667eea, #764ba2)",
                borderRadius: "2px",
              }}
            ></div>
          </h2>
          <p
            style={{ fontSize: "1.1rem", color: "#555", marginBottom: "3rem" }}
          >
            A selection of projects I’ve worked on — showcasing my skills in
            frontend development and problem-solving.
          </p>

          {/* Projects Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Project 1 */}
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src="public/portfolio.png"
                alt="Project 1"
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1.5rem", textAlign: "left" }}>
                <h3 style={{ color: "#2c3e50", marginBottom: "0.5rem" }}>
                  Portfolio Website
                </h3>
                <p
                  style={{
                    color: "#666",
                    marginBottom: "1rem",
                    fontSize: "0.95rem",
                  }}
                >
                  A responsive personal portfolio website built with React.js to
                  showcase skills, projects, and contact information.
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#999",
                    marginBottom: "1rem",
                  }}
                >
                  Tech: React.js, CSS, EmailJS
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href="https://github.com/Amank-123"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 14px",
                      background: "#f0f0f0",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      color: "#333",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <img
                src="public/Todo.jpg"
                alt="Project 2"
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1.5rem", textAlign: "left" }}>
                <h3 style={{ color: "#2c3e50", marginBottom: "0.5rem" }}>
                  ToDo App
                </h3>
                <p
                  style={{
                    color: "#666",
                    marginBottom: "1rem",
                    fontSize: "0.95rem",
                  }}
                >
                  A cross-platform mobile application built with React Native
                  and Expo, integrated with Firebase Firestore for real-time
                  data storage.
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#999",
                    marginBottom: "1rem",
                  }}
                >
                  Tech: React Native, Firebase, expo
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 14px",
                      background: "#f0f0f0",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      color: "#333",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <img
                src="public/NinjaRider.jpg"
                alt="Project 3"
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1.5rem", textAlign: "left" }}>
                <h3 style={{ color: "#2c3e50", marginBottom: "0.5rem" }}>
                  Ninja Rider App
                </h3>
                <p
                  style={{
                    color: "#666",
                    marginBottom: "1rem",
                    fontSize: "0.95rem",
                  }}
                >
                  Rider App @ ninja deliveries (internship) – Built Referral,
                  Dashboard, Profile, Transactions, Scanner & Checklist pages
                  with Firebase backend support.
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#999",
                    marginBottom: "1rem",
                  }}
                >
                  Tech: React native, Firebase, expo
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 14px",
                      background: "#f0f0f0",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      color: "#333",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* Project 4 */}
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <img
                src="public/NinjaDeliveries.jpg"
                alt="Project 3"
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1.5rem", textAlign: "left" }}>
                <h3 style={{ color: "#2c3e50", marginBottom: "0.5rem" }}>
                  Ninja Deliveries App
                </h3>
                <p
                  style={{
                    color: "#666",
                    marginBottom: "1rem",
                    fontSize: "0.95rem",
                  }}
                >
                  Customer app @ ninja deliveries (internship) – reward section
                  with Firebase backend support.
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#999",
                    marginBottom: "1rem",
                  }}
                >
                  Tech: React native, Firebase, expo
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 14px",
                      background: "#f0f0f0",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      color: "#333",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ninjadeliveries.customer"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 14px",
                      background: "linear-gradient(135deg, #667eea, #764ba2)",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    App Link
                  </a>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <img
                src="public/TealogyMenu.png"
                alt="Project 3"
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1.5rem", textAlign: "left" }}>
                <h3 style={{ color: "#2c3e50", marginBottom: "0.5rem" }}>
                  Tealogy Menu
                </h3>
                <p
                  style={{
                    color: "#666",
                    marginBottom: "1rem",
                    fontSize: "0.95rem",
                  }}
                >
                  A menu for food item for frenchisy holder of ninja deliveries
                  (internship) – simple menu page with html css to show menu
                  using qr code
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#999",
                    marginBottom: "1rem",
                  }}
                >
                  Tech: HTML, CSS
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href="https://github.com/Amank-123/tealogy-by-ninja-deliveries"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 14px",
                      background: "#f0f0f0",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      color: "#333",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://amank-123.github.io/tealogy-by-ninja-deliveries/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 14px",
                      background: "linear-gradient(135deg, #667eea, #764ba2)",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Project 6 */}
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <img
                src="public/pwrldg.png"
                alt="Project 3"
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1.5rem", textAlign: "left" }}>
                <h3 style={{ color: "#2c3e50", marginBottom: "0.5rem" }}>
                  Powerledger- Electricity billing system
                </h3>
                <p
                  style={{
                    color: "#666",
                    marginBottom: "1rem",
                    fontSize: "0.95rem",
                  }}
                >
                  Build this desktop application as final project in college –
                  it conatin login ,signup for customer and admin both and used
                  MYSQL for local database using mysql workbench
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#999",
                    marginBottom: "1rem",
                  }}
                >
                  Tech: Java(swing & AWT), Mysql ,JDBC
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href="https://github.com/Amank-123/Powerledger-Electricity-Billing-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 14px",
                      background: "#f0f0f0",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      color: "#333",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="ContactMe">
        <h1 id="LetsConnect">
          Contact Me <h5 id="LetsConnectSub">Get in touch</h5>
        </h1>

        <div id="ContactPage">
          <img src="public/contact-me.svg" alt="" />
          <form id="inputFields" type="submit" onSubmit={handleSubmit}>
            <h2>Write your comment here </h2>

            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label for="email">Mail</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label for="message">message</label>
            <textarea
              id="message"
              placeholder="Message....."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>

            <button type="submit">
              {loading ? "Sending Msg." : " Send Message"}

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>

        {successMsg && (
          <p
            style={{
              position: "fixed", // stays fixed even if you scroll
              top: "20px", // distance from top
              left: "50%", // center horizontally
              transform: "translateX(-50%)", // adjust to exact center
              color: "green",
              fontWeight: "bold",
              background: "#e6ffed",
              padding: "12px 20px",
              borderRadius: "8px",
              border: "1px solid #b2f5cb",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              zIndex: 1000, // always on top
            }}
          >
            {successMsg}
          </p>
        )}
      </div>
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-logo">
            <h2>Portfolio</h2>
            <p>
              Delivering reliable, scalable, and user-focused software
              solutions.
            </p>
          </div>

          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#homePage">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#ContactMe">Contact</a>
              </li>
            </ul>
          </div>

          <div class="footer-contact">
            <h4>Contact</h4>
            <p>Email: akaman0055@gmail.com</p>
            <p>Phone: +91 7807812126</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2025 Aman_Kumar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
