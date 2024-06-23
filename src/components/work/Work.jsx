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
        title: "Title 1",
        description: "Description for project 1",
        github: "https://github.com/dfiredeveloper/project1",
        live: "https://github.com/dfiredeveloper/project1",
        stack: "React + Styled Components",
        isPrivate: false,
      },
      {
        id: uuidv4(),
        title: "Title 2",
        description: "Description for project 2",
        github: "https://github.com/dfiredeveloper/project2",
        live: "https://github.com/dfiredeveloper/project2",
        stack: "Vue + Socket.io + Express",
        isPrivate: false,
      },
      {
        id: uuidv4(),
        title: "Title 3",
        description: "Description for project 3",
        github: "https://github.com/dfiredeveloper/project3",
        live: "https://github.com/dfiredeveloper/project3",
        stack: "React",
        isPrivate: false,
      },
      {
        id: uuidv4(),
        title: "Title 4",
        description: "Description for project 4",
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
