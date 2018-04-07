import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-id-card"></span>
                    <h1>Hi, I create <strong>Email Signatures</strong>, another easy<br />
                    way to create email signature built by <a href="http://sprinble.com">Sprinble</a>.</h1>
                    <p>The good news is that I am open source.<br />
                    You can star and fork me on <a href="http://sprinble.com">Github</a>.</p>
                    <ul className="actions">
                        <li><a href="#two" className="button scrolly">Create Signature</a></li>
                    </ul>
                </div>
            </section>
        );
    }
}