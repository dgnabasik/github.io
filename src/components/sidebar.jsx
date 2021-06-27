import React, { Component } from 'react'
import BackgroundImage from "./images/desert-sunset.jpg"

export default class Sidebar extends Component {
  render() {
    return (
      <div className="introduction" style ={ { backgroundImage: `url(${BackgroundImage})`} }>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: `url(${BackgroundImage})`}} />
              <h1 id="colorlib-logo"><a href="index.html">David Gnabasik, Ph.D.</a></h1>
              <span className="email"><i className="icon-mail"></i>David.Gnabasik at UCDenver.edu</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://ReliableSoftwareDesigns.com/" target="_blank" rel="noopener noreferrer">ReliableSoftwareDesigns.com</a></li>
                <li><a href="https://www.linkedin.com/in/david-gnabasik-0056a0ba/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                <li><a href="https://github.com/dgnabasik/" target="_blank" rel="noopener noreferrer">Git Projects</a></li>
                <li><a href="https://AcmSearch.org/" target="_blank" rel="noopener noreferrer">ACM Graph Search</a></li>
                <li><a href="https://davidgnabasik.wixsite.com/portfolio" target="_blank" rel="noopener noreferrer">Historical Fiction</a></li>
                <li><a href="https://FlyingMonkeysSocialClub.herokuapp.com" target="_blank" rel="noopener noreferrer">Flying Monkeys Social Club</a></li>
                <li><a href="https://eyesofthecommunity.herokuapp.com" target="_blank" rel="noopener noreferrer">Eyes of the Community</a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
            </div>
          </aside>
        </div>
    )
  }
}
