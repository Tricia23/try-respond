import React from "react";
import Navigation from "./Navigation";
import "./style.css";

export default class Onboarding extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="onboarding-wrapper">
          <div className="onboarding-text">
            <h4 className="welcome-text">Welcome!</h4>
            <h4 className="onboarding-subtitle">Here are the next steps:</h4>
          </div>
          <div className="signup-wrap">
            <div className="signup-left">
              <h5 className="signup-title">Sign up</h5>
              <p>
                Create an account and complete your request in less than 3
                minutes.
              </p>
            </div>
            <div class="signup-right">
              <h5 class="signup-title">Match with suppliers</h5>
              <p>
                After completing your request, we’ll notify relevant suppliers
                to start bidding.
              </p>
            </div>
          </div>
          <div className="start-button-wrap">
            <a href="/Supply" className="start-button">
              Start
            </a>
          </div>
        </div>
      </div>
    );
  }
}
