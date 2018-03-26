import React, { Component } from 'react';

export default class Style extends Component {
    createSign(event) {
        event.preventDefault();
        console.log('GOnna make some signature! 🎣');
        const Social = {
            signatureStyle : this.signatureStyle.value,
            textColor: this.textColor.value,
            feactureColor: this.feactureColor.value,
            linkcolor : this.linkcolor.value,
            fontStyle : this.fontStyle.value,
            fontSize : this.fontSize.value
        }
    this.props.addSign(Social);
  }
    render() {
        return (
            <form ref={(input) => this.StyleForm = input} onSubmit={(e) => this.createSign(e)} >
            <div className="form-row">
                <div className="form-group col-sm-6">
                    <label htmlFor="signatureStyle">Signature Style</label>
                    <select className="form-control" ref={(input) => this.signatureStyle = input}>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="textColour">Text Color</label>
                    <input className="form-control" type="color" ref={(input) => this.textColor = input} name="textColor"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="feactureColor">Feacture Color</label>
                    <input className="form-control" type="color" ref={(input) => this.feactureColor = input} name="feactureColor"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="linkcolor">Link Color</label>
                    <input className="form-control" type="color" ref={(input) => this.linkcolor = input} name="linkcolor"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="fontStyle">Font Style</label>
                    <select className="form-control" ref={(input) => this.fontStyle = input}>
                        <option selected>Select Font Style</option>
                        <option value="1">Sans serif</option>
                        <option value="2">Serif</option>
                    </select>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="fontSize">Font Size</label>
                    <select className="form-control" ref={(input) => this.fontSize = input}>
                        <option selected>Select Font Size</option>
                        <option value="1">Large</option>
                        <option value="2">Medium</option>
                        <option value="3">Small</option>
                    </select>
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Create Email Signature</button>
        </form>
        );
    }
}