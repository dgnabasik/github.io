import React, { Component } from 'react'
import BackgroundImage from "./images/desert-sunset.jpg"

export default class Introduction extends Component {
  render() {
    return (
      <div >
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: `url(${BackgroundImage})`}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>David Gnabasik</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://www.linkedin.com/in/david-gnabasik-0056a0ba" target="_blank" rel="noopener noreferrer">LinkedIn<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: `url(${BackgroundImage})`}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Computer Scientist</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/dgnabasik" target="_blank" rel="noopener noreferrer">View Projects<i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: `url(${BackgroundImage})`}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Primary Website</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/dgnabasik/dgnabasik.github.io" target="_blank" rel="noopener noreferrer">View Website<i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
