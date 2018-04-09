import React, {Component} from 'react';
import '../css/main.css';
import Header from "./Header";
import AppArea from "./AppArea";
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
		return (
				<div>
					<Header/>
					<div className="container">
					<AppArea updateSign={this.updateSign} Social={this.state.Signs} addSign ={this.addSign}/>
					</div>
					<Footer/>
				</div>
		);
	}
}

export default App;
