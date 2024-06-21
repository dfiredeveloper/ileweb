import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import Project from "../utils/project/Project";
import uuid from 'uuid/package.json';

export class Work extends Component {
  state = {
    projects: [

      {
        id: uuid(),
        title: "Title",
        description: "Description Here",
        github: "https://github.com/dfiredeveloper",
        live: "https://github.com/dfiredeveloper",
        stack: "React + Styled Components",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Title",
        description: "Description Here",
        github: "https://github.com/dfiredeveloper",
        live: "https://github.com/dfiredeveloper",
        stack: "Vue + Socket.io + Express",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Title",
        description: "Description Here",
        github: "https://github.com/dfiredeveloper",
        live: "https://github.com/dfiredeveloper",
        stack: "React",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Title",
        description: "Description Here",
        github: "https://github.com/dfiredeveloper",
        live: "https://github.com/dfiredeveloper",
        stack: "React + SASS",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Title",
        description: "Description Here",
        github: "https://github.com/dfiredeveloper",
        live: "https://github.com/dfiredeveloper",
        stack: "React",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Title",
        description: "Mobile App landing page",
        github: "https://github.com/dfiredeveloper",
        live: "https://github.com/dfiredeveloper",
        stack: "Sass + Javsacript + PHP",
        isPrivate: false,
      }, 
    ],
  };

  componentDidMount() {
    this.props.activeMenu(0);
  }

  render() {
    return (
      <div className='work'>
        <div className='portfolio_showcase'>
          {this.state.projects.map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </div>

        <div className='go_button_container'>
          <Link to='/'>
            <button>
              <span class='material-icons'>arrow_left</span> Home
            </button>
          </Link>
          <Link to='/contact'>
            <button>
              Contact <span class='material-icons'>arrow_right</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Work;