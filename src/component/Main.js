import React, {Component} from 'react';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    
    
    createSign(event) {
        event.preventDefault();
        console.log('GOnna make some signature! 🎣');
        const Social = {
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          email: this.email.value,
          phoneNo: this.phoneNo.value,
          jobTitle: this.jobTitle.value,
          department: this.department.value,
          companyName: this.companyName.value,
          website: this.website.value,
          officeFaxNo: this.officeFaxNo.value,
          officePhoneNo: this.officePhoneNo.value,
          address1: this.address1.value,
          address2: this.address2.value,
          avatar: this.avatar.value
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
            <form ref={(input) => this.SignForm = input} onSubmit={(e) => this.createSign(e)} >
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="firstName">First Name</label>
                        <input className="form-control" type="text" ref={(input) => this.firstName = input} name="firstName" onChange={(e) => this.handleChange(e)} placeholder="First Name"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input className="form-control" type="text" ref={(input) => this.lastName  = input} onChange={(e) => this.handleChange(e)} name="lastName" placeholder="
                        Last Name"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input className="form-control" type="text" ref={(input) => this.jobTitle  = input} onChange={(e) => this.handleChange(e)} name="jobTitle" placeholder="Job Title"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="department">Department</label>
                        <input className="form-control" type="text" ref={(input) => this.department  = input} onChange={(e) => this.handleChange(e)} name="department" placeholder="
                        Department"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="companyName">Company Name</label>
                        <input className="form-control" type="text" ref={(input) => this.companyName  = input} onChange={(e) => this.handleChange(e)} name="companyName" placeholder="Company Name"  />
                    </div>
                    
                    <div className="form-group col-sm-6">
                        <label htmlFor="phoneNo">Phone No</label>
                        <input className="form-control" type="tel" ref={(input) => this.phoneNo  = input} onChange={(e) => this.handleChange(e)} name="phoneNo" placeholder="
                        Phone No"  />
                    </div>
                    <div className="form-group col-sm-6">
                    <label htmlFor="officeFaxNo">Office Fax No</label>
                        <input className="form-control" type="tel" ref={(input) => this.officeFaxNo  = input} onChange={(e) => this.handleChange(e)} name="officeFaxNo" placeholder="
                        Office Fax No"  />
                    </div>
                    <div className="form-group col-sm-6">
                    <label htmlFor="officePhoneNo">Office Phone No</label>
                        <input className="form-control" type="tel" ref={(input) => this.officePhoneNo  = input} onChange={(e) => this.handleChange(e)} name="officePhoneNo" placeholder="
                        Office Phone No"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" ref={(input) => this.email  = input} onChange={(e) => this.handleChange(e)} name="email" placeholder="Email"  />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="website">Website</label>
                        <input className="form-control" type="text" ref={(input) => this.website  = input} onChange={(e) => this.handleChange(e)} name="website" placeholder="
                        Website"  />
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="address1">ADDRESS 1</label>
                        <input className="form-control" type="text" ref={(input) => this.address1  = input} onChange={(e) => this.handleChange(e)} name="address1" placeholder="
                        address1"  />
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="address2">ADDRESS 2</label>
                        <input className="form-control" type="text" ref={(input) => this.address2  = input} onChange={(e) => this.handleChange(e)} name="address2" placeholder="address 2"  />
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="avatar">LOGO / PHOTO / AVATAR IMAGE URL</label>
                        <input className="form-control" type="text" ref={(input) => this.avatar  = input} onChange={(e) => this.handleChange(e)} name="avatar" placeholder="www.example.com/img.jpg"  />
                        <em>Upload an image to your Dropbox, Google Drive or similar site and paste the URL here:
                        Image must be suitably sized for your signature as it will be displayed actual size.
                        (Our Help Page includes some useful information on creating images for your signature)</em>
                    </div>
                    <button className="btn btn-primary" type="submit">Create Email Signature</button>
                </div>
            </form>
        );
    }
}