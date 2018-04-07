import React, {Component} from 'react';
import Main from './Main';
import Social from './Social';
import Style from './Style';
import AppView from "./AppView";
import Clipboard from 'clipboard';

export default class AppArea extends Component {

	componentDidMount() {
        new Clipboard('#copyButton', {
            target: () => document.getElementById('snippet')
		});
		var clipboard = new Clipboard('#copyButton', {
			target: function() {
				return document.querySelector('#snippet');
			}
		});
		var yemi = new Clipboard('#html', {
			text: function() {
				var htmlBlock = document.querySelector('#snippet');
				return htmlBlock.innerHTML;
			}
		});
		clipboard.on('success', function(e) {
			alert('Email Signature Copied To Clipboard')
		});
		yemi.on('success', function(e) {
			alert('Email Signature Source Code Copied to Clipboard')
		});
		clipboard.on('error', function(e) {
			alert('Email Signature Not Copied to Clipboard')
		});
	}
	
	render() {
		const mStyle = {
            marginBottom: '60px'
        }
		return (
			<section id="two" className="main style1 special">
				<div className="container">
					<header className="major">
						<h2>Let's Get Your Signature Created.</h2>
					</header>
				
					<div className="row 150%">
						<div className="12u 12u$(medium)">
							<ul style={mStyle} className="nav nav-pills">
								<li className="active">
									<a id="lo" data-toggle="tab" href="#home">Main</a>
								</li>
								<li>
									<a id="lo" data-toggle="tab" href="#menu1">Social</a>
								</li>
								<li>
									<a id="lo" data-toggle="tab" href="#menu2">Style</a>
								</li>
							</ul>							
						</div>
						<div className="6u 12u$(medium)">
							<div className="tab-content gone">
								<div id="home" className="tab-pane fade in active">
									<Main updateSign={this.props.updateSign} Social={this.props.Social} addSign={this.props.addSign}/>
								</div>
								<div id="menu1" className="tab-pane fade">
									<Social updateSign={this.props.updateSign} Social={this.props.Social} addSign={this.props.addSign}/>
								</div>
								<div id="menu2" className="tab-pane fade">
									<Style updateSign={this.props.updateSign} Social={this.props.Social} addSign={this.props.addSign}/>
								</div>						
							</div>
						</div>
						<div className="6u 12u$(medium) col-sm-6">
							<AppView Social={this.props.Social}/>
						</div>
					</div>
				</div>
				<a className="btn btn-lg btn-success" data-toggle="modal" href='#modal-id'><i className="icon fa fa-check"></i> Generate Email Signature</a>
				<div className="modal fade" id="modal-id">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Here you go!!!</h4>
							</div>
							<div className="modal-body thumbnail"> 
								<div className="bo" id="snippet">
									<AppView Social={this.props.Social}/>
								</div>
							</div>
							<div className="modal-footer col-sm-12">								
								<div className="text-center">
									<button type="button" id="copyButton" data-clipboard-target='#snippet' className="btn btn-primary"><i className="icon fa fa-copy"></i> Select & copy Signature</button><span>&#160;</span>
									<button type="button" id="html" data-clipboard-target='#snippet' className="btn btn-info"><i className="icon fa fa-clipboard"></i> Get Source Code</button>
									<button type="button" className="btn btn-md btn-danger" data-dismiss="modal"><i className="icon fa fa-times"></i>Close</button><span>&#160;</span>
								</div>								
							</div>
						</div>
					</div>
				</div>
			</section>	
		);
	}
}