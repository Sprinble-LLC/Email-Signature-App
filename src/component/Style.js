import React, { Component } from 'react';

export default class Style extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    createSign(event) {
        event.preventDefault();
        const Social = {
            signatureStyle : this.signatureStyle.value,
            textColor: this.textColor.value,
            feactureColor: this.feactureColor.value,
            linkcolor : this.linkcolor.value,
            fontFamily : this.fontFamily.value,
            fontSize : this.fontSize.value,
            textAlign : this.textAlign.value
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
                        <option value="">Image-Top view</option>
                        <option value="1">Name-top view</option>
                        <option value="2">Image-bottom view</option>
                        <option value="3">Two-column view</option>
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
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Courier">Courier New</option>
                        <option value="Arial">Arial</option>
                        <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
                        <option value="Segoe UI">Segoe UI</option>
                        <option value="Verdana">Verdana</option>

                    </select>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="fontSize">Font Size</label>
                    <select className="form-control" ref={(input) => this.fontSize  = input} onChange={(e) => this.handleChange(e)} name="fontSize">
                        <option value="">Select Font Size</option>
                        <option value="2rem">Large</option>
                        <option value="1.3rem">Medium</option>
                        <option value="1rem">Small</option>
                    </select>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="textAlign">Text Alignment</label>
                    <select className="form-control" ref={(input) => this.textAlign  = input} onChange={(e) => this.handleChange(e)} name="textAlign">
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                        <option value="left">Left</option>
                    </select>
                </div>
            </div>
            <div className="col-lg-12">
            <button className="btn btn-primary" type="submit">Create Email Signature</button><span>&emsp;</span>
            <button type="reset" className="btn btn-danger">Reset Form input</button>
            </div>
        </form>
        );
    }
}