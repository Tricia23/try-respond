import React from "react";
import "./style.css";

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="nav-body">
        <div className="nav-wrapper">
          <a className="tryresponse-logo">
            <img
              className="desktop-logo"
              src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5d0aaf93cfe3203389aaebf9_logo-blue.svg"
              alt="Response logo"
              height="24"
              width="100"
            />
            <img
              className="mobile-logo"
              src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5d0af07651a0ceac91d3fcbe_icon-blue.svg"
              alt="Response logo"
              height="24"
              width="20"
            />
          </a>

          <div className="nav-list-wrap">
            <a className="nav-list">Group Purchasing</a>
            <a className="nav-list">About</a>
            <a className="nav-list">Contact us</a>
          </div>

          <div className="registration-wrap">
            <a className="registration-list login">Log in</a>
            <a className="registration-list request">Request</a>
            <a className="registration-list supply">Supply</a>
          </div>
        </div>
      </div>
    );
  }
}
