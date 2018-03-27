import React, { Component } from 'react';

export default class Style extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    createSign(event) {
        event.preventDefault();
        console.log('GOnna make some signature! 🎣');
        const Social = {
            signatureStyle : this.signatureStyle.value,
            textColor: this.textColor.value,
            feactureColor: this.feactureColor.value,
            linkcolor : this.linkcolor.value,
            fontFamily : this.fontFamily.value,
            fontSize : this.fontSize.value
        }
    this.props.addSign(Social);
  }
  handleChange(e) {
    const Sign = this.props.Social;
    const updatedSign = {
      ...Sign,
      [e.target.name]: e.target.value
    }
    this.props.updateSign(updatedSign);
  }
    render() {
        return (
            <form ref={(input) => this.StyleForm = input} onSubmit={(e) => this.createSign(e)} >
            <div className="form-row">
                <div className="form-group col-sm-6">
                    <label htmlFor="signatureStyle">Signature Style</label>
                    <select value={this.props.Social.signatureStyle} className="form-control" ref={(input) => this.signatureStyle  = input} onChange={(e) => this.handleChange(e)} name="signatureStyle">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                    </select>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="textColour">Text Color</label>
                    <input className="form-control" type="color" defaultValue="#000000" ref={(input) => this.textColor  = input} onChange={(e) => this.handleChange(e)} name="textColor"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="feactureColor">Feacture Color</label>
                    <input className="form-control" type="color" defaultValue="#d07a15" ref={(input) => this.feactureColor  = input} onChange={(e) => this.handleChange(e)} name="feactureColor"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="linkcolor">Link Color</label>
                    <input className="form-control" type="color" defaultValue="#2289fb" ref={(input) => this.linkcolor  = input} onChange={(e) => this.handleChange(e)} name="linkcolor"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="fontFamily">Font Style</label>
                    <select className="form-control" ref={(input) => this.fontFamily  = input} onChange={(e) => this.handleChange(e)} name="fontFamily">
                        <option value="">Select Font Style</option>
                        <option value="sans-serif">Sans serif</option>
                        <option value="serif">Serif</option>
                    </select>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="fontSize">Font Size</label>
                    <select className="form-control" ref={(input) => this.fontSize  = input} onChange={(e) => this.handleChange(e)} name="fontSize">
                        <option value="">Select Font Size</option>
                        <option value="2rem">Large</option>
                        <option value="1.7rem">Medium</option>
                        <option value="1.3rem">Small</option>
                    </select>
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Create Email Signature</button>
        </form>
        );
    }
}