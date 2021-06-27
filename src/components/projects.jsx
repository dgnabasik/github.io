import React, { Component } from 'react'
import ConnectedGraph from "./images/connectedGraph1.jpg"
import BlockchainImage from "./images/blockchain-consensus.png"
import KubernetesImage from "./images/kubernetes-cluster.png"

export default class Projects extends Component {
  render() {
    return (
      <div>
		<section className="colorlib-work" data-section="projects">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
						<span className="heading-meta">Computer Science Projects</span>
					</div>
				</div>
				<div className="row">
					
					<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
						<div className="project" style={{backgroundImage: `url(${ConnectedGraph})`}}>
							<div className="desc">
								<div className="con">
									<h3><a href="projects">ACM TechNews Graph Analysis</a></h3>
									<span>The entire collection of ACM TechNews (https://technews.acm.org/) articles are stored as RDF triples in an Amazon Neptune graph database. 
										A query on a set of words displays their time evolution together and their conditional probabilities with other words. 
										This can be used to determine both important and promising research directions.
									</span>
									<p className="icon">
										<span><a href="projects"><i className="icon-share3" /></a></span>
									</p>
								</div>
							</div>
						</div>
					</div>
				
					<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
						<div className="project" style={{backgroundImage: `url(${BlockchainImage})`}}>
							<div className="desc">
								<div className="con">
									<h3><a href="projects">Hyperledger Fabric Blockchain System for State Licensing Agencies</a></h3>
									<span>The purpose of the License Eligibility Authentication system is to increase non-resident license revenue by identifying fraudulent license applications. 
									This permissioned blockchain network automates the shared consensus of residency rules among participating States as a consortium.
									</span>
									<p className="icon">
										<span><a href="projects"><i className="icon-eye" /></a></span>
									</p>
								</div>
							</div>
						</div>
					</div>
				
					<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
						<div className="project" style={{backgroundImage: `url(${KubernetesImage})`}}>
							<div className="desc">
								<div className="con">
									<h3><a href="projects">Using Golang+PostgreSQL+Spark+Kubernetes to Compute Conditional Probabilities</a></h3>
									<span>
										Problem: To compute every word score and conditional probabilities between 94322 wordgrams involves n!/(n-r)! = 8,896,545,362 permutations. The estimated completion time is 1572 hours for a serial algorithm.
									</span>
									<span>
										Proposed Solution: How effective is a distributed microservice solution that uses a Spark data processing engine on a 3-node Kubernetes cluster? 
									</span>
									<p className="icon">
										<span><a href="projects"><i className="icon-heart" /></a></span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
						<div className="project" style={{backgroundImage: 'url(images/white-marble.jpg)'}}>
							<div className="desc">
								<div className="con">
									<h3><a href="projects">Eyes of the Community</a></h3>
									<span>Website</span>
									<p className="icon">
										<span><a href="projects"><i className="icon-share3" /></a></span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
						<div className="project" style={{backgroundImage: 'url(images/white-marble.jpg)'}}>
							<div className="desc">
								<div className="con">
									<h3><a href="projects">Flying Monkeys Social Club</a></h3>
									<span>E-commerce</span>
									<p className="icon">
										<span><a href="projects"><i className="icon-eye" /></a></span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12 animate-box">
						<p><a href="projects" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
			</div>
		</section>
      </div>
    )
  }
}
