import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

export class Resume extends Component {
  componentDidMount() {
    this.props.activeMenu(1);
  }

  render() {
    const experience = [
      {
        company: "Lems Technologies",
        position: "CEO/CTO",
        started: "Feb 2021",
        ended: "Present",
        description:
          "I Joined the engineering team in building numerous applications for clients.",
        achievements: [
          "launched 3 products under my management",
          "Oversea the the development of more than 10 web3 / mobile apps for client",
          "Effective team collaboration and mentorship to drive project success",
        ],
      },

      {
        company: "J-Pipsicles",
        position: "Software Developer [Contract]",
        started: "September 2020",
        ended: "August 2021",
        description:
          "I worked with the Project 2 product team on a contract basis to build a web application for an investment startup",
        achievements: [
          "Transformed figma prototypes to functional UIs using react js, react context and sass",
          "Made use of tools like Notion & Usepastel for task management and feedback",
          "Interacted with GraphQL apis from the client side using Apollo GraphQL",
        ],
      },

      {
        company: "Investnaira",
        position: "Frontend Developer",
        started: "Feb 2018",
        ended: "Nov 2019",
        description:
          "I contributed in developing user interfaces for quite a number of products within three months.",
        achievements: [
          "Worked with node.js developers to build a the core admin dashboard",
          "Headed the frontend department of my team to revamp the complete user application for version 2 launch",
          "Built an open source micro API project alongside python (Django) Developers using Jinja template engine on the frontend",
        ],
      },
    ];

    return (
      <div className="resume">
        <div className="resume_container">
          <div className="top_row">
            <h2>Ilemona Achimugu</h2>
            <div className="buttons">
              <a
                href="https://ng.linkedin.com/in/samuelachimugu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fab fa-linkedin"></i> <span>Linked In</span>
                </small>
              </a>
              <a
                href="https://drive.google.com/file/d/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fas fa-download"></i> <span>Download </span>
                </small>
              </a>
            </div>
          </div>

          <p className="subheading">Software Developer</p>

          <div className="summary">
            <p>
            I'm a passionate software developer with extensive experience in blockchain, health, and financial technologies, I excel in crafting robust web and mobile applications. My passion lies in translating conceptual ideas into scalable products that prioritize exceptional user experiences.


            </p>
          </div>

          <div className="divider">
            <p>Core Technologies</p>
            <span></span>
          </div>

          <div className="skills">
            <p>
              HTML/CSS, SASS, Javascript [ES6], React Js, Next Js, Vue Js,
              CSS-in-JS, GraphQL, Redux, Firebase, PHP, Laravel, Dart, MySQL.
            </p>
          </div>

          <div className="divider">
            <p>Familiar With</p>
            <span></span>
          </div>

          <div className="skills">
            <p>
              Typescript, Flux, Node Js, Express, Web Sockets, PWAs, Wordpress,
              SEO.
            </p>
          </div>

          <div className="divider">
            <p>On The Job</p>
            <span></span>
          </div>

          <div className="skills">
            <p>Scrum, CI/CD, Version Control, Best Practices</p>
          </div>

          <div className="divider">
            <p>Experience</p>
            <span></span>
          </div>

          <div className="exp_container">
            {experience.map((exp, index) => (
              <section className="experience" key={index}>
                <p className="title">
                  {exp.company} - <i>{exp.position}</i>
                  <span>
                    <br /> {exp.started.toUpperCase()} -{" "}
                    {exp.ended === null ? "PRESENT" : exp.ended.toUpperCase()}
                  </span>
                </p>

                <article className="description">
                  <p> {exp.description} </p>
                  {exp.achievements.map((achievement, index) => (
                    <p key={index}>
                      <span>■</span> {achievement}
                    </p>
                  ))}
                </article>
              </section>
            ))}
          </div>

          <div className="divider">
            <p>Education</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <p className="title">
                Federal Polytechnic Idah — OND,
                Computer Science
                <span>
                  <br /> 2017-2019
                </span>
              </p>
            </section>
          </div>

          <div className="divider">
            <p>Projects</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <article className="description">
                <p>
                  Links to my works can be found on <span> </span>{" "}
                  <Link to="/work">lems.dev/work</Link>{" "}
                </p>
              </article>
            </section>
          </div>
        </div>

        <div className="go_button_container">
          <Link to="/">
            <button>
              <span class="material-icons">arrow_left</span> Home
            </button>
          </Link>
          <Link to="/contact">
            <button>
              Contact <span class="material-icons">arrow_right</span>{" "}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Resume;