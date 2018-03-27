import React, { Component } from 'react';

export default class Social extends Component {
    createSocial(event) {
        event.preventDefault();
        console.log('GOnna make some signature! 🎣');
        const Social = {
            Facebook : this.facebok.value,
            twitter: this.twitter.value,
            instagram: this.instagram.value,
            linkedIn: this.linkedIn.value
        }
    this.props.addSign(Social);
  }
    render() {
        return (
            <form ref={(input) => this.SocialForm = input} onSubmit={(e) => this.createSocial(e)} >
                <div className="form-row">
                <p className="text-center">Copy and paste your social url's into the fields below.
                Please ensure you include the http:// or https:// at the beginning as shown in the examples.</p>
                    <div className="form-group col-sm-6">
                        <label htmlFor="Facebok">Facebok</label>
                        <input className="form-control" type="text" ref={(input) => this.facebok = input} name="facebok" placeholder="Facebok"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="twitter">Last Name</label>
                        <input className="form-control" type="text" ref={(input) => this.twitter = input} name="twitter" placeholder="twitter"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="Instagram">Instagram</label>
                        <input className="form-control" type="text" ref={(input) => this.instagram = input} name="instagram" placeholder="Instagram"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="linkedIn">LinkedIn</label>
                        <input className="form-control" type="text" ref={(input) => this.linkedIn = input} name="linkedIn" placeholder="LinkedIn"  />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Create Email Signature</button>
            </form>
        );
    }
}