import React, {Component} from 'react'

export default class Header extends Component {
    render() {
        const mStyle = {
            fontSize: '35px'
        }
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-6 ">
                        <a href="https://placeholder.com"><img src="http://via.placeholder.com/350x150" className="img-responsive none" alt="eget tempor nunc."/></a>
                    </div>
                    <div className="col-md-6 col-sm-12 p">
                        <p style={mStyle}>Curabitur ac dictum odio, eget tempor nunc. Aenean auctor
                            pellentesque orci a laoreet. .</p>
                        <button type="button" class="btn btn-primary btn-lg">quis velit et eros cursus sagittis</button>
                    </div>
                </div>
            </div>
        );
    }
}