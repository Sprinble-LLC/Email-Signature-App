import React, {Component} from 'react';
import '../css/App.css';
import Nav from "./Nav";
import Header from "./Header";
import AppArea from "./AppArea";
import AppView from "./AppView";
import Faq from "./Faq";
import Footer from './Footer';


class App extends Component {
	constructor() {
		super();
		this.addSign = this.addSign.bind(this);
		this.updateSign = this.updateSign.bind(this);
	  this.state = {
		Signs: {}
	  };
	}
	addSign(Social) {
		  const Signs = {...this.state.Signs};
		  Object.assign(Signs, Social);
		  this.setState({ Signs });
	  }
	  updateSign = (updatedSign) => {
		const Signs = {...this.state.Signs};
		Object.assign(Signs, updatedSign);
		this.setState({ Signs });
	  };

	render() {

	const aStyle = {fontSize: '20px', paddingTop: '30px'}
		return (
			<div>
				<Nav/>
				<Header/>
				<div className="">
					<div className="container-fluid whi">
						<div className=" contanier pad2 col-sm-12">
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
					<div className="container-fluid back">
						<div className="row">
							<div className="col-sm-">
							<AppArea updateSign={this.updateSign} Social={this.state.Signs} addSign ={this.addSign}/>
							</div>
							
							<div className="col-sm-6 ">
							<p style={aStyle}>Signature Preview</p>
							<AppView Social={this.state.Signs}/>
							</div>
						</div>
					</div>
					<div className='container-fluid'>
					<Faq/>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
