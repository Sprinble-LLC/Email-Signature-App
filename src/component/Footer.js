import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <section id="footer">
				<ul className="icons">
					<li><a href="https://twitter.com/sprinble" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
					<li><a href="https://www.facebook.com/sprinble/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
					<li><a href="https://instagram.com/sprinble/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
					<li><a href="https://github.com/sprinble/" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
				</ul>
				<ul className="copyright">
					<li>Built with  <i className="icon alt fa-heart"></i>  by Sprinble</li>
				</ul>
			</section>
        );
    }
}