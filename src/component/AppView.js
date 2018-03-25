import React, {Component} from 'react'

export default class AppView extends Component {
    render() {
        const aStyle = {
            fontSize: '20px'
        }
        return (
            <div className="col-md-6 col-sm-12">
                <p style={aStyle}>Curabitur ac dictum odio, eget tempor nunc.</p>
                <a href="https://placeholder.com"><img src="http://via.placeholder.com/450x350" className="img-responsive" alt="eget tempor nunc."/></a>
            </div>
        );
    }
}