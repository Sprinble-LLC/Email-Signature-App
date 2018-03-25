import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faLinkedin, faTwitterSquare} from '@fortawesome/fontawesome-free-brands'

class Nav extends Component {
	render() {
		const pStyle = {
			marginRight: '5px'
		};
		return (
			<nav class="navbar navbar-default mag" role="navigation">
				<div className="container">
					<div class="navbar-header">
						<button
							type="button"
							class="navbar-toggle"
							data-toggle="collapse"
							data-target=".navbar-ex1-collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#">Title</a>
					</div>
					<div class="collapse navbar-collapse navbar-ex1-collapse">
						<ul class="nav navbar-nav navbar-right">
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
							<li class="navbar-form">
								<ul class="navbar-nav dis">
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