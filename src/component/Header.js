import React, {Component} from 'react';
import  logo from '../img/logo.png';

export default class Header extends Component {
    render() {
        const mStyle = {
            fontSize: '35px'
        }
        return (
            <div className="jumbotron bac">
                <div className="container">
                    <div className="col-sm-6 ">
                        <img src={logo} className="img-responsive none" alt="Signature-preview"/>
                    </div>
                    <div className=" col-sm-6 p">
                        <p style={mStyle}>Curabitur ac dictum odio, eget tempor nunc. Aenean auctor
                            pellentesque orci a laoreet. .</p>
                        <button type="button" className="btn btn-lg p bt"><span>quis velitrsus sagittis</span></button>
                    </div>
                </div>
            </div>
        );
    }
}