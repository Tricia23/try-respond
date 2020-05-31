import React from "react";
import "./style.css";
import Navigation from "./Navigation";

function Landing() {
  return (
    <>
      <Navigation />
      <div className="hero-wrapper">
        <div className="hero-container">
          <div className="left">
            <h4 class="subtitle">LIFESAVING PROCUREMENT</h4>
            <h1 class="header">Sourcing for COVID-19</h1>
            <p className="hero-text">
              Response connects healthcare providers to medical suppliers with a
              sourcing platform built to accelerate emergency procurement.
            </p>
            <a href="" class="request-button">
              Request Medical&nbsp;Equipment
            </a>
            <h6 class="questions">
              Questions? &nbsp;<a>Talk to us</a>.
            </h6>
          </div>
          <div className="right">
            <div classNam="hero-img-wrap">
              <img
                className="hero-img"
                src={require("./images/hero-img.png")}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="supply-wrapper">
        <h4>Have Supplies?</h4>
        <a href="./Onboarding" className="supply-button">
          Supply Medical Equipment
        </a>
      </div>

      <div className="partners-wrapper">
        <div className="partner-wrap">
          <h5 class="partner-subtitle">PARTNERS</h5>

          <a className="partners-img">
            <img
              className="uber-freight"
              src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9514078c78747f72aa5dc5_UberFreight_2018-p-500.png"
            />
          </a>
          <a href="https://c19coalition.org/" className="partners-img">
            <img
              className="covid-partner"
              src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5ea4624d8ad6b676ff921105_c19logo-dark.png"
            />
          </a>
        </div>

        <div className="covid-type-wrapper">
          <h1>
            Millions of units in <br /> medical equipment ready to go
          </h1>
          <h3>
            We're working with manufacturers producing <br />
            millions of high demand products per week.
          </h3>
        </div>

        <div className="covid-item-comtainer">
          <div className="partners-img-one">
            <div className="item-wrap">
              <img
                src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9da596b99e412007923c2e_N95.svg"
                alt="Respirator"
                class="icon"
              />
              <div className="item-text">Respirators</div>
            </div>

            <div className="item-wrap">
              <img
                src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685e38205a2f86da9be8_Glove.svg"
                alt="Gloves"
                class="icon"
              />
              <div className="item-text">Gloves</div>
            </div>

            <div className="item-wrap">
              <img
                src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685e38205ac3e6da9be7_Mask.svg"
                alt="Respirator"
                class="icon"
              />
              <div className="item-text">Face Shields</div>
            </div>

            <div className="item-wrap">
              <img
                src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685e1ceb3e5c17649a7d_Sanitizer.svg"
                alt="Respirator"
                class="icon"
              />
              <div className="item-text">Sanitizers</div>
            </div>
          </div>

          <div className="partners-img-one">
            <div className="item-wrap">
              <img
                src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d69b91ceb3e7c8164a18a_Respirator.svg"
                alt="Respirator"
                class="icon"
              />
              <div className="item-text">Respirators</div>
            </div>
            <div className="item-wrap">
              <img
                src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685ee014f924d6aad1b6_SurgicalMask.svg"
                alt="Respirator"
                class="icon"
              />
              <div className="item-text">Respirators</div>
            </div>
            <div className="item-wrap">
              <img
                src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685e38205ab232da9be4_Wipes.svg"
                alt="Respirator"
                class="icon"
              />
              <div className="item-text">Respirators</div>
            </div>
            <div className="item-wrap">
              <img
                src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685d9aae7e0b16bf20be_Gown.svg"
                alt="Respirator"
                className="icon"
              />
              <div className="item-text">Respirators</div>
            </div>
          </div>
        </div>
        <div className="more-items">
          <span>25+ More Classes of Goods Coming Soon</span>
        </div>
      </div>
      <div className="instruction-section">
        <h2 className="instruction-header">How it works</h2>

        <div className="step-wrap">
          <h6 class="sub-title">STEP ONE</h6>
          <div className="step-wrapper">
            <div className="step-left">
              <h1 class="title">
                Post compliant requests <br /> in minutes
              </h1>
              <p class="step-text">
                Tell us what you need and Response uses your terms to generate
                all the necessary paperwork.
              </p>
            </div>

            <div className="step-right">
              <div className="step-img-wrap">
                <img
                  src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d9311d328d86318db3303_request_simple.svg"
                  className="step-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="step-wrap">
          <h6 class="sub-title">STEP TWO</h6>
          <div className="step-wrapper">
            <div className="step-left">
              <h1 class="title">
                Match with suppliers you <br /> can trust
              </h1>
              <p class="step-text">
                Response instantly notifies the most relevant suppliers based on
                your request.
              </p>
            </div>
            <div className="step-right">
              <div className="step-img-wrap">
                <img
                  src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5ea47d5b808bdf5ef78c4308_supplier_simple.svg"
                  className="step-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="step-wrap">
          <h6 class="sub-title">STEP THREE</h6>
          <div className="step-wrapper">
            <div className="step-left">
              <h1 class="title">Pick the best offer</h1>
              <p class="step-text">
                We automatically collect and score the best offers based on
                quality, lead time, and price.
              </p>
            </div>
            <div className="step-right">
              <div className="step-img-wrap">
                <img
                  src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d92f4c0385a5a0fa4c828_compare.svg"
                  className="step-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="step-wrap">
          <h6 class="sub-title">STEP FOUR</h6>
          <div className="step-wrapper">
            <div className="step-left">
              <h1 class="title">Get your supplies</h1>
              <p class="step-text">
                Response is designed to make emergency procurement easy and
                fast, so that you can get back to the work that really matters -
                fighting COVID-19.
              </p>
            </div>
            <div className="step-right">
              <div className="step-img-wrap">
                <img
                  src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d92e6d328d8de2cdb3239_delivered.svg"
                  className="step-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="request-button-wrap">
        <a>Request Medical Equipment</a>
      </div>
      <div className="about-section">
        <div class="about-wrapper">
          <h5 class="about-subtitle">ABOUT US</h5>
          <h1 class="about-header">
            We’re focused on accelerating the delivery of life saving medical
            supplies during COVID-19.
          </h1>
          <a href="">Learn more about our mission and who we are &mdash;&gt;</a>
        </div>
      </div>
      <div className="get-involved-container">
        <h2 class="heading">Get Involved</h2>
        <h3 class="subheading-involved">
          Join our community for the latest technical specifications, verified
          suppliers data, and tools to help manage this global health pandemic.
        </h3>
        <div className="email-form-wrap">
          <form className="email-form">
            <input type="email" className="email" placeholder="Your Email" />
            <input type="submit" className="submit-button" />
          </form>
        </div>
        <h6 class="policy-text">
          We care about protecting your data. Read our &nbsp;
          <a href="" class="policy">
            Privacy Policy
          </a>
        </h6>
      </div>
      <div className="footer-section">
        <div className="footer-wrap">
          <div className="footer-img footer-column">
            <img
              src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5d0aaf93cfe3203389aaebf9_logo-blue.svg"
              height="24"
            />
            <div class="copyright-text">© 2020 Response Inc.</div>
          </div>
          <div class="footer-column">
            <div class="footer-title">Product</div>
            <a href="/" class="footer-link">
              Features
            </a>
          </div>
          <div class="footer-column">
            <div class="footer-title">Legal</div>
            <a href="/" class="footer-link">
              Terms
            </a>
            <a href="/" class="footer-link">
              Privacy
            </a>
          </div>

          <div class="footer-column">
            <div class="footer-title">Companay</div>
            <a href="/" class="footer-link">
              About
            </a>
            <a className="footer-link">Contact Us</a>
            <a href="/" class="footer-link">
              +1 (844) 966-1910
            </a>
          </div>
          <div class="footer-column">
            <div class="footer-title">Follow us</div>
            <a className="social-wrap">
              <img src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9db94f5a3dab3636c443a5_iconfinder_BW_Linkedin_glyph_svg_5305157.svg" />
              <a href="/" class="footer-link">
                LinkedIn
              </a>
            </a>

            <a className="social-wrap">
              <img src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9db9265a3dab89ffc4435b_iconfinder_BW_Facebook_2_glyph_svg_5305153.svg" />
              <a href="/" class="footer-link">
                Facebook
              </a>
            </a>
            <a className="social-wrap">
              <img src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9db91dd328d88000dc9744_iconfinder_BW_Twitter_glyph_svg_5305170.svg" />
              <a href="/" class="footer-link">
                Twitter
              </a>
            </a>
            <a className="social-wrap">
              <img src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9db8fd8a5e0bd40666af9d_iconfinder_Instagram_glyph_svg_5335781.svg" />
              <a href="/" class="footer-link">
                Instagram
              </a>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
