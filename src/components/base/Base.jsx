import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Base.css";
import avi from "../../assets/img/biglems.png";
import navLine from "../../assets/svgs/menu-line.svg";
import logo from "../../assets/img/smallavi.png";
import arrow from "../../assets/svgs/arrow.svg";

export class Base extends Component {
  render() {
    return (
      <div className='base_container'>
        <div className='hero'>
          <div className='intro_box'>
            <h1>
              Hello, I'm <br /> Ilemona Achimugu(Lems).
            </h1>
            <div className='avi'>
              <img src={avi} alt='avatar' />
            </div>
          </div>

          <div className='description'>
            <p>
              <span>
                A <span className='highlight'>leading software developer</span> renowned for unparalleled <span className="highlight two">expertise</span> in creating cutting-edge <span className="highlight">web and mobile applications.</span> I excel at refining <span className="highlight two">smart contracts</span> and designing <span className="highlight">decentralized applications</span> to achieve innovative <span className="highlight two">solutions</span>.
              </span>
            </p>
          </div>

          <div className='go_button_container'>
            <Link to='/work' className='explore'>
              <button className='explore'>
                Explore <span class='material-icons'>arrow_right</span>
              </button>
            </Link>
          </div>
        </div>

        <nav>
          <ul>
            <li className={this.props.menu[0]}>
              <small>
                00
                <Link to='/'>
                  <img src={navLine} alt='menu bullet' /> WORK
                </Link>
              </small>
            </li>

            <li className={this.props.menu[1]}>
              <small>
                01
                <Link to='/resume'>
                  <img src={navLine} alt='menu bullet' /> RESUME
                </Link>
              </small>
            </li>

            <li className={this.props.menu[2]}>
              <small>
                02{" "}
                <Link to='/contact'>
                  <img src={navLine} alt='menu bullet' /> CONTACT
                </Link>
              </small>
            </li>
          </ul>
        </nav>

        <div className='footer'>
          <img src={logo} alt='' />
          <div className='social'>
            <a
              href='https://github.com/dfiredeveloper'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i> Github
              <img src={arrow} alt='pointer' />
            </a>

            <a
              href='https://twitter.com/ileachimugu'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter'></i> Twitter{" "}
              <img src={arrow} alt='pointer' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Base;