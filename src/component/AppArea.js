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
		const aStyle = {
			fontSize: '20px'
		}

		return (
			<div className="col-sm-6 col-xs-12">
				<h2 style={aStyle}>Your Information.</h2>
				<ul className="nav nav-tabs col-sm-12 ">
					<li className="active">
						<a data-toggle="tab" href="#home">Main</a>
					</li>
					<li>
						<a data-toggle="tab" href="#menu1">Social</a>
					</li>
					<li>
						<a data-toggle="tab" href="#menu2">Style</a>
					</li>
				</ul>
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
					
				</div><br/>
				<a className="btn btn-success" data-toggle="modal" href='#modal-id'>Generate Email Signature</a>
				<div className="modal fade" id="modal-id">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								<h4 className="modal-title">Modal title</h4>
							</div>
							<div className="modal-body thumbnail"> 
								<div className="bo" id="snippet">
									<AppView Social={this.props.Social}/>
								</div>
							</div>
							<div className="modal-footer col-sm-12">
								<button type="button" className="btn btn-default" data-dismiss="modal">Close</button><span>&#160;</span>
								<button type="button" id="copyButton" data-clipboard-target='#snippet' className="btn btn-primary">Selet email Signature</button><span>&#160;</span>
								<button type="button" id="html" data-clipboard-target='#snippet' className="btn btn-danger">Selet email Signature Source Code</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}