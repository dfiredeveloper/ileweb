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
        showLive: true,
      },
      {
        id: uuidv4(),
        title: "PayDex",
        description: "PayDex is a mobile app designed for effortless financial management. It offers seamless money transactions, bill payments, and more, ensuring security and convenience. PayDex is redefining the way users handle their finances.",
        github: "https://github.com/dfiredeveloper/project2",
        live: "https://paydex.ng",
        stack: "Flutter + PHP + React + Js",
        isPrivate: true,
        showLive: true,
      },
      {
        id: uuidv4(),
        title: "Bari Chatbot",
        description: "Bari is a chatbot developed to discourage infatuation.",
        github: "https://github.com/dfiredeveloper/baribot",
        live: "https://baribot.vercel.app/",
        stack: "JavaScript + HTML + CSS",
        isPrivate: false,
        showLive: true,
      },
      {
        id: uuidv4(),
        title: "react-ts-utils",
        description: "A TypeScript library for type safety in React.",
        github: "https://github.com/dfiredeveloper/react-ts-utils",
        live: "https://github.com/dfiredeveloper/react-ts-utils",
        stack: "React + SASS",
        isPrivate: false,
        showLive: false,
      },
      {
        id: uuidv4(),
        title: "BlueMoon",
        description: "A fashion web and mobile app",
        github: "https://github.com/dfiredeveloper/project5",
        live: "https://bluemoon.ng",
        stack: "Flutter + PHP + MySql + React",
        isPrivate: true,
        showLive: true,
      },
      {
        id: uuidv4(),
        title: "Wazobia Market",
        description: "Wazobia connects food producers and consumers.",
        github: "https://github.com/dfiredeveloper/project6",
        live: "https://wazobiamkt.com",
        stack: "Sass + Javsacript + PHP",
        isPrivate: true,
        showLive: true,
      }, 
      {
        id: uuidv4(),
        title: "Wavio",
        description: "Eco-friendly, and Professional Digital Business Cards",
        github: "https://github.com/dfiredeveloper/project6",
        live: "https://wavio.ng",
        stack: "Laravel + Javsacript + PHP",
        isPrivate: true,
        showLive: true,
      },
      {
        id: uuidv4(),
        title: "KogiJobs",
        description: "Kogi state indigenous job searching portal and platform.",
        github: "https://github.com/dfiredeveloper/project6",
        live: "https://kogijobs.com.ng",
        stack: "Laravel + Javsacript + PHP + MySQL",
        isPrivate: true,
        showLive: true,
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

        <div className='gap'></div> 

        <div className='portfolio_showcase'>
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
