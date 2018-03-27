import React, {Component} from 'react';
import '../css/App.css';
import Nav from "./Nav";
import Header from "./Header";
import AppArea from "./AppArea";
import AppView from "./AppView";
import Faq from "./Faq";
import Footer from './Footer';
class App extends Component {
	render() {
		return (
			<div>
				<Nav/>
				<Header/>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2>
								Phasellus lorem tortor, pretium sed tortor sit amet, sagittis fermentum sapien.
							</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus ut nulla
								ac fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
								posuere cubilia Curae; Sed eget leo porttitor, molestie odio quis, accumsan
								odio. Aliquam erat volutpat. Nunc ornare non nibh ac suscipit. Quisque quis eros
								id orci molestie convallis eu sed nunc. Duis efficitur est quis ultricies
								bibendum. Ut quis felis lacus. Phasellus lorem tortor, pretium sed tortor sit
								amet, sagittis fermentum sapien. Aliquam ut suscipit ligula.</p>
						</div>
					</div>
					<hr/>
					<div className="container">
						<div className="row">
							<AppArea/>
							<AppView/>
						</div>
					</div>
					<Faq/>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
