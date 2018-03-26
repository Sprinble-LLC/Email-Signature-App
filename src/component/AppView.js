import React, {Component} from 'react'

export default class AppView extends Component {
    render() {
        const aStyle = {
            fontSize: '20px'
        }
        return (
            <div className="col-md-6 col-sm-12">
                <p style={aStyle}>Curabitur ac dictum odio, eget tempor nunc.</p>
                <div>
                    
                </div>
            </div>
        );
    }
}