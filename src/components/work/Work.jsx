import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "./Work.css";
import Project from "../utils/project/Project";

export class Work extends Component {
  state = {
    projects: [
      {
        id: uuidv4(),
        title: "Stasha",
        description: "Stasha is a blockchain ecosystem that aims to revolutionize the world of decentralized finance (DeFi) and digital assets.",
        github: "https://github.com/dfiredeveloper/project1",
        live: "https://stasha.io",
        stack: "React + Styled Components",
        isPrivate: true,
      },
      {
        id: uuidv4(),
        title: "PayDex",
        description: "PayDex is a mobile app designed for effortless financial management. It offers seamless money transactions, bill payments, and more, ensuring security and convenience. PayDex is redefining the way users handle their finances.",
        github: "https://github.com/dfiredeveloper/project2",
        live: "https://paydex.ng",
        stack: "Flutter + PHP + React + Js",
        isPrivate: true,
      },
      {
        id: uuidv4(),
        title: "Bari Chatbot",
        description: "Bari is a chatbot developed to discourage infatuation.",
        github: "https://github.com/dfiredeveloper/baribot",
        live: "https://baribot.vercel.app/",
        stack: "JavaScript + HTML + CSS",
        isPrivate: false,
      },
      {
        id: uuidv4(),
        title: "react-ts-utils",
        description: "A TypeScript library for type safety in React.",
        github: "https://github.com/dfiredeveloper/project4",
        live: "https://github.com/dfiredeveloper/project4",
        stack: "React + SASS",
        isPrivate: false,
      },
      {
        id: uuidv4(),
        title: "Title 5",
        description: "Description for project 5",
        github: "https://github.com/dfiredeveloper/project5",
        live: "https://github.com/dfiredeveloper/project5",
        stack: "React",
        isPrivate: false,
      },
      {
        id: uuidv4(),
        title: "Title 6",
        description: "Mobile App landing page",
        github: "https://github.com/dfiredeveloper/project6",
        live: "https://github.com/dfiredeveloper/project6",
        stack: "Sass + Javsacript + PHP",
        isPrivate: false,
      }, 
      {
        id: uuidv4(),
        title: "Title 6",
        description: "Mobile App landing page",
        github: "https://github.com/dfiredeveloper/project6",
        live: "https://github.com/dfiredeveloper/project6",
        stack: "Sass + Javsacript + PHP",
        isPrivate: false,
      },
      {
        id: uuidv4(),
        title: "Title 6",
        description: "Mobile App landing page",
        github: "https://github.com/dfiredeveloper/project6",
        live: "https://github.com/dfiredeveloper/project6",
        stack: "Sass + Javsacript + PHP",
        isPrivate: false,
      },
    ],
  };

  componentDidMount() {
    this.props.activeMenu(0);
  }

  render() {
    const { projects } = this.state;

    return (
      <div className='work'>
        <div className='portfolio_showcase portfolio_showcase_full'>
          <h2 className="title">MOST RECENT</h2>
          <div className='portfolio_showcase'>
            {projects.slice(0, 2).map((project) => (
              <Project key={project.id} data={project} listMode />
            ))}
          </div>
        </div>

        <div className='gap'></div> {/* Add a gap between sections */}

        <div className='other_projects'>
          <h2 className="title">OTHER PROJECTS</h2>
          <div className='portfolio_showcase'>
            {projects.slice(2).map((project) => (
              <Project key={project.id} data={project} />
            ))}
          </div>
        </div>

        <div className='go_button_container'>
          <Link to='/'>
            <button>
              <span className='material-icons'>arrow_left</span> Home
            </button>
          </Link>
          <Link to='/resume'>
            <button>
              Resume <span className='material-icons'>arrow_right</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Work;
