import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faLinkedin, faTwitterSquare} from '@fortawesome/fontawesome-free-brands'

class Nav extends Component {
	render() {
		const pStyle = {
			marginRight: '5px'
		};
		return (
			<nav className="navbar navbar-default mag" role="navigation">
				<div className="container">
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle"
							data-toggle="collapse"
							data-target=".navbar-ex1-collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Title</a>
					</div>
					<div className="collapse navbar-collapse navbar-ex1-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="#">Link</a>
							</li>
							<li>
								<a href="#">Link</a>
							</li>
							<li>
								<a href="#">Link</a>
							</li>
							<li>
								<a href="#">Link</a>
							</li>
							<li>
								<a href="#">Link</a>
							</li>
							<li>
								<a href="#">Link</a>
							</li>
							<li>
								<a href="#">Link</a>
							</li>
							<li>
								<a href="#">Link</a>
							</li>
							<li className="navbar-form">
								<ul className="navbar-nav dis">
									<li>
										<a href="#"><FontAwesomeIcon icon={faFacebookSquare} style={pStyle} size="2x"/>
										</a>
									</li>
									<li>
										<a href="#"><FontAwesomeIcon icon={faTwitterSquare} style={pStyle} size="2x"/>
										</a>
									</li>
									<li>
										<a href="#"><FontAwesomeIcon icon={faLinkedin} style={pStyle} size="2x"/>
										</a>
									</li>
								</ul>

							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;