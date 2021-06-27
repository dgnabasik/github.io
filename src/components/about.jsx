import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Profile</span>
                        <p>I was awarded a Ph.D. in Computer Science and Information Systems from the University of Colorado Denver in 2017, advised by Dr. Gita Alaghband. My doctoral work implements a computational model that reliably distinguishes among various lung cancer types and classifies patients into one of these clinical types for the sake of early prognosis.</p>
                        <p>This research developed the computer science and computational biology skills necessary for evaluating and designing predictive bioinformatic models, modeling the topological algorithms and statistical analysis of high-dimensional data, and automating the pipelines and microservices that process large proteomic data sets.</p>
                        <p>These development skills include Mathematica v12, MATLAB v13, Java, C/C#, R v3.3, Ubuntu Linux v20.04, Golang v1.15, React.js v17, Node.js, Docker v19, Postgres v12, Amazon Blockchain, AWS EC2/S3/Neptune, Apache Tomcat v9, Apache Spark v2.1, Git v2.14, Scala v2.12, SQL Server 2012-2016, Visual Studio 2015-2017.</p>
                        <p>I am currently developing an IBM Hyperledger Fabric blockchain system for state licensing agencies and an ACM TechNews knowledgebase using Golang, Postgres, and the Amazon Neptune graph database.</p>
                        <p></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Professional Interests</span>
                <h2 className="colorlib-heading">The ultimate goal of these interests is to develop a system for the deep-learning of proteomic data.</h2>
            </div>
            </div>

            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I use React.js and Node.js to build websites and Jest to test them.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Github Contributions</h3>
                    <p>Once completed (Feb, 2021), the ACM TechNews knowledgebase will be posted to Github.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Current Employment</h3>
                    <p>I operate Reliable Software Designs, LLC, a computer systems consulting business.</p>
                </div>
                </div>
            </div>

            {/*
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
