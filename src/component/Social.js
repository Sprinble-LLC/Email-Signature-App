import React, { Component } from 'react';

export default class Social extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    createSocial(event) {
        event.preventDefault();
        console.log('GOnna make some signature! 🎣');
        const Social = {
            facebook : this.facebook.value,
            twitter: this.twitter.value,
            instagram: this.instagram.value,
            linkedIn: this.linkedIn.value
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
            <form ref={(input) => this.SocialForm = input} onSubmit={(e) => this.createSocial(e)} >
                <div className="form-row">
                <p className="text-center">Copy and paste your social url's into the fields below.
                Please ensure you include the http:// or https:// at the beginning as shown in the examples.</p>
                    <div className="form-group col-sm-6">
                        <label htmlFor="facebook">Facebok</label>
                        <input className="form-control" type="text" ref={(input) => this.facebook  = input} onChange={(e) => this.handleChange(e)} name="facebook" placeholder="Facebook"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="twitter">Twitter</label>
                        <input className="form-control" type="text" ref={(input) => this.twitter  = input} onChange={(e) => this.handleChange(e)} name="twitter" placeholder="twitter"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="Instagram">Instagram</label>
                        <input className="form-control" type="text" ref={(input) => this.instagram  = input} onChange={(e) => this.handleChange(e)} name="instagram" placeholder="Instagram"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="linkedIn">LinkedIn</label>
                        <input className="form-control" type="text" ref={(input) => this.linkedIn  = input} onChange={(e) => this.handleChange(e)} name="linkedIn" placeholder="LinkedIn"  />
                    </div>
                   
                </div>
                <button type="reset" className="btn btn-danger">Reset Form input</button>
            </form>
        );
    }
}