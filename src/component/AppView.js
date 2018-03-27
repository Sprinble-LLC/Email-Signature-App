import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faLinkedin, faTwitterSquare, faInstagram} from '@fortawesome/fontawesome-free-brands';

export default class AppView extends Component {

    render() {
        const {Social} = this.props;
        const size = Social.linkcolor;
        const f
        const aStyle = {
            fontSize: '20px'
        }
        const bStyle = {
            margin: '5px'
        }
        const eStyle = {
            display: 'visible'
        }
        var dStyle ={
            color:{size}
        }
        const cStyle = {
            display: 'none'
        }
        
        const dis = Social.facebook === undefined || Social.facebook === "";
        const sty = dis
            ? cStyle
            : bStyle;
        const disp = Social.twitter === undefined || Social.twitter === "";
        const styl = disp
            ? cStyle
            : bStyle;
        const displ = Social.linkedIn === undefined || Social.linkedIn === "";
        const style = displ
            ? cStyle
            : bStyle;
        const displa = Social.instagram === undefined || Social.instagram === "";
        const s = displa
            ? cStyle
            : bStyle;
        const a = Social.phoneNo === undefined || Social.phoneNo === "";
        const b = a
            ? cStyle
            : bStyle;
        const c = Social.officePhoneNo === undefined || Social.officePhoneNo === "";
        const d = c
            ? cStyle
            : bStyle;
        const e = Social.officeFaxNo === undefined || Social.officeFaxNo === "";
        const f = e
            ? cStyle
            : bStyle;
        const g = Social.address1 === undefined || Social.address1 === "";
        const h = g
            ? cStyle
            : bStyle;
        const k = Social.website === undefined || Social.website === "";
        const l = k
            ? cStyle
            : {color:size};
        const m = Social.email === undefined || Social.email === "";
        const n = m
            ? cStyle
            : {color:size},{backgroundColor};

        const fac = <a href={this.props.Social.facebook}><FontAwesomeIcon icon={faFacebookSquare} style={sty} size="2x"/></a>
        const twt = <a href={this.props.Social.twitter}><FontAwesomeIcon icon={faTwitterSquare} style={styl} size="2x"/></a>
        const lin = <a href={this.props.Social.linkedIn}><FontAwesomeIcon icon={faLinkedin} style={style} size="2x"/></a>
        const Ig = <a href={this.props.Social.instagram}><FontAwesomeIcon icon={faInstagram} style={s} size="2x"/></a>
        const pho = <p style={b}>p:{Social.phoneNo}</p>
        const tel = <p style={d}>tel:{Social.officePhoneNo}</p>
        const fax = <p style={f}>fax:{Social.officeFaxNo}</p>
        const add = <p style={h}>add:{Social.address1}<br/>{Social.address2}</p>
        const web = <p><a href={Social.website} style={l}>web:{Social.website}</a></p>
        const email = <p><a href={Social.email} style={n}>email:{Social.email}</a></p>
        const img = <img className="img-responsive" src={Social.avatar} alt=""/>
        
        return (
            <div className="col-sm-6 col-xs-12 gon">
                <p style={aStyle}>Signature Preview</p>
                <div style={dStyle}>
                    {img}
                    <h3>{Social.lastName} {Social.firstName}</h3>
                    <i>{Social.jobTitle}</i>
                    <p>{Social.department}</p>
                    <b>
                        <h4>{Social.companyName}</h4>
                    </b>
                    <div className="dis">
                        {pho}
                        {tel}
                    </div>
                    {fax}
                    {add}
                    {web}
                    {email}
                    <div className="dis">
                        {fac}{twt}{lin}{Ig}
                    </div>
                </div>
            </div>
        );
    }
}