import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Base from "./components/base/Base";
import Work from "./components/work/Work";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Mobile from "./components/base/Mobile";
import Header from "./components/utils/header/Header";
import Error from "./components/error404/Error";

export class App extends Component {
  state = {
    menu: ["active_menu", "", ""],
    fullScreen: false,
  };

  activeMenu(id) {
    const newMenu = ["", "", ""];
    newMenu[id] = "active_menu";
    this.setState({ menu: newMenu });
  }

  setFullscreen(value) {
    this.setState({ fullScreen: value });
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <div className='mobile_container' id={this.state.fullScreen ? "fullscreen" : ''}>
            <Header />
            <div>
              <Routes>
                <Route
                  path='/'
                  element={<Mobile menu={this.state.menu} fullScreen={this.setFullscreen.bind(this)} />}
                />
                <Route
                  path='/work'
                  element={<Work menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />}
                />
                <Route
                  path='/resume'
                  element={<Resume menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />}
                />
                <Route
                  path='/contact'
                  element={<Contact menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />}
                />
                <Route
                  path='*'
                  element={<Error />}
                />
              </Routes>
            </div>
            <div className='social_buttons'>
              <a
                href='https://github.com/dfiredeveloper'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-github'></i>
              </a>
              <a
                href='https://twitter.com/dfiredeveloper'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/samuelachimugu?originalSubdomain=ng'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin'></i>
              </a>
              
            </div>
          </div>
          <div className='container'>
            <div className='fixed'>
              <Base menu={this.state.menu} />
            </div>
            <div className='main'>
              <div className='pages_container'>
                <Routes>
                  <Route
                    path='/'
                    element={<Work menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />}
                  />
                  <Route
                    path='/work'
                    element={<Work menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />}
                  />
                  <Route
                    path='/resume'
                    element={<Resume menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />}
                  />
                  <Route
                    path='/contact'
                    element={<Contact menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />}
                  />
                  <Route
                    path='*'
                    element={<Error />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
