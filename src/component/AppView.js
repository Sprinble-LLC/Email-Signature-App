import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faLinkedin, faTwitterSquare, faInstagram} from '@fortawesome/fontawesome-free-brands';

export default class AppView extends Component {

    render() {
        const {Social} = this.props;
        const size = Social.linkcolor;
        const fc = Social.feactureColor;
        const tc = Social.textColor;
        const fs = Social.fontSize;
        const ff = Social.fontFamily;
        const aStyle = {
            fontSize: '20px'
        }
        const dStyle = {
            margin: '5px'
        }
        const cStyle = {
            display: 'none'
        }
        const bStyle = {
            fontSize: fs,
            fontFamily: ff
        }
        const fon = '3'
        const p = fon !== '3'
            ? {
                display: 'none'
            }
            : {
                color: fc,
                fontSize: fs,
                fontFamily: ff
            };
        const j = fon !== '3'
            ? {
                display: 'none'
            }
            : {
                color: tc,
                fontSize: fs,
                fontFamily: ff
            }
        const dis = Social.facebook === undefined || Social.facebook === "";
        const sty = dis
            ? cStyle
            : dStyle;
        const disp = Social.twitter === undefined || Social.twitter === "";
        const styl = disp
            ? cStyle
            : dStyle;
        const displ = Social.linkedIn === undefined || Social.linkedIn === "";
        const style = displ
            ? cStyle
            : dStyle;
        const displa = Social.instagram === undefined || Social.instagram === "";
        const s = displa
            ? cStyle
            : dStyle;
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
        const g = Social.address1 === undefined || Social.address1 === ""
        const h = g
            ? cStyle
            : bStyle;
        const y = Social.address2 === undefined || Social.address2 === ""
        const z = y
            ? cStyle
            : bStyle;
        const k = Social.website === undefined || Social.website === "";
        const l = k
            ? cStyle
            : {
                color: size,
                fontSize: fs,
                fontFamily: ff
            };
        const m = Social.email === undefined || Social.email === "";
        const n = m
            ? cStyle
            : {
                color: size,
                fontSize: fs,
                fontFamily: ff
            }

        const fac = <a href={this.props.Social.facebook}><FontAwesomeIcon icon={faFacebookSquare} style={sty} size="2x"/></a>
        const twt = <a href={this.props.Social.twitter}><FontAwesomeIcon icon={faTwitterSquare} style={styl} size="2x"/></a>
        const lin = <a href={this.props.Social.linkedIn}><FontAwesomeIcon icon={faLinkedin} style={style} size="2x"/></a>
        const Ig = <a href={this.props.Social.instagram}><FontAwesomeIcon icon={faInstagram} style={s} size="2x"/></a>
        const pho = <p class="dis" style={d}>
            <span style={p}>tel:<span>&#160;</span>
            </span>
            <p style={j}>{Social.officePhoneNo}</p>
            <span>&#160;</span>
        </p>
        const tel = <p class="dis" style={b}>
            <span style={p}>p:<span>&#160;</span>
            </span>
            <p style={j}>{Social.phoneNo}</p>
        </p>

        const fax = <p style={f}>
            <span style={p}>fax:<span>&#160;</span>
            </span>{Social.officeFaxNo}</p>
        const add = <p style={h}>
            <span style={p}>add 1:<span>&#160;</span>
            </span>{Social.address1}</p>
        const add2 = <p style={z}>
            <span style={p}>add 2:<span>&#160;</span>
            </span>{Social.address2}</p>
        const web = <a href={Social.website} style={l}>
            <span style={p}>web:<span>&#160;</span>
            </span>{Social.website}</a>
        const email = <p>
            <a href={Social.email} style={n}>
                <span style={p}>email:<span>&#160;</span>
                </span>{Social.email}</a>
        </p>
        const img = <img className="img-responsive" src={Social.avatar} alt=""/>
        const name = <h3 style={p}>{Social.lastName} {Social.firstName}</h3>
        return (
            <div className="col-sm-6 col-xs-12 gon">
                <p style={aStyle}>Signature Preview</p>
                <div style={j}>
                    {img}
                    {name}
                    <i>{Social.jobTitle}</i>
                    <p>{Social.department}</p>
                    <b>
                        <h4>{Social.companyName}</h4>
                    </b>
                    <div>{pho}{tel}</div>
                    {fax}
                    {add}
                    {add2}
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