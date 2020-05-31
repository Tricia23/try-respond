import React from "react";
import Navigation from "./Navigation";
import { ValidatorForm } from "react-form-validator-core";
import { ValidatorComponent } from "react-form-validator-core";
import "./style.css";

class TextValidator extends ValidatorComponent {
  render() {
    const {
      errorMessages,
      validators,
      requiredError,
      validatorListener,
      ...rest
    } = this.props;

    return (
      <div>
        <input
          {...rest}
          ref={(r) => {
            this.input = r;
          }}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return <div style={{ color: "red" }}>{this.getErrorMessage()}</div>;
  }
}

class CheckValidator extends ValidatorComponent {
  render() {
    const {
      errorMessages,
      validators,
      requiredError,
      validatorListener,
      ...rest
    } = this.props;

    return (
      <div>
        <input
          type="checkbox"
          {...rest}
          ref={(r) => {
            this.input = r;
          }}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return <div style={{ color: "red" }}>{this.getErrorMessage()}</div>;
  }
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.products = JSON.parse(localStorage.getItem("products"));

    this.state = {
      products: [],
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      phoneNumber: "",
      website: "",
      type: "",
      organizationName: "",
      website: "",
      addressOne: "",
      addressTwo: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      terms: true,
      privacy: true,
    };

    console.log(this.products);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (evt) => {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;

    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });

    console.log(evt.target.value);
    console.log(this.state);
  };

  handleSubmit = () => {
    let productText = ``;

    this.products.map(
      (product) => (productText = productText + `* ${product.name}`)
    );

    alert(`Your Registration is Sucessful!!! \n 
    Your name is: ${this.state.firstName} ${this.state.lastName}\n
    Your contact information:\n
    ${this.state.email} ${this.state.phoneNumber} \n
    Your title is: ${this.state.title}\n
    Your Organization type is ${this.state.type}, your Organization name is: ${this.state.organizationName} located at ${this.state.addressOne} ${this.state.addressTwo}, ${this.state.city}, ${this.state.state}, ${this.state.country} with a website ${this.state.website} and ZIP: ${this.state.zip}\n  
    \n Your privacy is ${this.state.terms} and your terms is ${this.state.privacy}\n
    
    ${productText}`);
  };

  render() {
    return (
      <div>
        <Navigation />
        <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
          <div className="contact-container">
            <div className="contact-wrap">
              <div className="contact-title">
                <h2>Contact Information</h2>
              </div>

              <div className="contact-form-wrap">
                <div>
                  <h3 className="form-title">Primary Contact</h3>
                  <div className="grouped">
                    <label className="contact-label" for="firstName">
                      <small>First Name</small>
                    </label>
                    <TextValidator
                      name="firstName"
                      onChange={this.handleChange}
                      placeholder="First Name"
                      type="text"
                      className="contact-input"
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                      value={this.state.firstName}
                    />
                  </div>
                  <div className="grouped">
                    <label className="contact-label" for="lasttName">
                      <small>Last Name</small>
                    </label>
                    <TextValidator
                      name="lastName"
                      onChange={this.handleChange}
                      placeholder="Last Name"
                      type="text"
                      className="contact-input"
                      value={this.state.lastName}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>
                  <div className="grouped">
                    <label className="contact-label" for="title">
                      <small>Title</small>
                    </label>
                    <TextValidator
                      name="title"
                      onChange={this.handleChange}
                      placeholder="Title"
                      type="text"
                      className="contact-input"
                      value={this.state.title}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>
                  <div className="grouped">
                    <label className="contact-label" for="email">
                      <small>Email Address</small>
                    </label>
                    <TextValidator
                      name="email"
                      onChange={this.handleChange}
                      placeholder="Email Address"
                      type="text"
                      className="contact-input"
                      value={this.state.email}
                      validators={["required", "isEmail"]}
                      errorMessages={[
                        "this field is required",
                        "email is not valid",
                      ]}
                    />
                  </div>
                  <div className="grouped">
                    <label className="contact-label" for="phoneNumber">
                      <small>Phone Number</small>
                    </label>
                    <TextValidator
                      name="phoneNumber"
                      onChange={this.handleChange}
                      placeholder="Phone Number"
                      type="text"
                      className="contact-input"
                      value={this.state.phoneNumber}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>
                  <h3 className="form-title">Proof of organisation</h3>
                  <TextValidator
                    name="proof"
                    onChange={this.handleChange}
                    placeholder="Requester Profile (LinkedIn, organization page, etc."
                    type="text"
                    className="contact-input"
                    value={this.state.proof}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </div>
              </div>
            </div>

            <div className="contact-wrap">
              <div className="contact-title">
                <h2>Your Organisation Information</h2>
              </div>

              <div className="contact-form-wrap">
                <div>
                  <h3 className="form-title">Organisation</h3>
                  <div className="grouped">
                    <label className="contact-label" for="type">
                      <small>Organization Type</small>
                    </label>
                    <TextValidator
                      name="type"
                      onChange={this.handleChange}
                      placeholder="First Name"
                      type="text"
                      className="contact-input"
                      value={this.state.type}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>
                  <div className="grouped">
                    <label className="contact-label" for="organizationName">
                      <small>Organization Name</small>
                    </label>
                    <TextValidator
                      name="organizationName"
                      onChange={this.handleChange}
                      placeholder="Organisation Name"
                      type="text"
                      className="contact-input"
                      value={this.state.organizationName}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>
                  <div className="grouped">
                    <label className="contact-label" for="website">
                      <small>Organization Website</small>
                    </label>
                    <TextValidator
                      name="website"
                      onChange={this.handleChange}
                      placeholder="Organization Website"
                      type="text"
                      className="contact-input"
                      value={this.state.website}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>

                  <h3 className="form-title">Location</h3>
                  <div className="grouped">
                    <label className="contact-label" for="addressOne">
                      <small>Address Line 1</small>
                    </label>
                    <TextValidator
                      name="addressOne"
                      onChange={this.handleChange}
                      placeholder="First Name"
                      type="text"
                      className="contact-input"
                      value={this.state.addressOne}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>
                  <div className="grouped">
                    <label className="contact-label" for="addressTwo">
                      <small>Address Line 2</small>
                    </label>
                    <TextValidator
                      name="addressTwo"
                      onChange={this.handleChange}
                      placeholder="First Name"
                      type="text"
                      className="contact-input"
                      value={this.state.addressTwo}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>

                  <div className="grouped">
                    <label className="contact-label" for="City">
                      <small>City</small>
                    </label>
                    <TextValidator
                      name="city"
                      onChange={this.handleChange}
                      placeholder="City"
                      type="text"
                      className="contact-input"
                      value={this.state.city}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>
                  <div className="grouped">
                    <label className="contact-label" for="sate">
                      <small>State/Province/Region</small>
                    </label>
                    <TextValidator
                      name="state"
                      onChange={this.handleChange}
                      placeholder="State/Province/Region"
                      type="text"
                      className="contact-input"
                      value={this.state.state}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>

                  <div className="grouped">
                    <label className="contact-label" for="zip">
                      <small>ZIP</small>
                    </label>
                    <TextValidator
                      name="zip"
                      onChange={this.handleChange}
                      placeholder="ZIP"
                      type="text"
                      className="contact-input"
                      value={this.state.zip}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>

                  <div className="grouped">
                    <label className="contact-label" for="country">
                      <small>Country</small>
                    </label>
                    <TextValidator
                      name="country"
                      onChange={this.handleChange}
                      placeholder="Country"
                      type="text"
                      className="contact-input"
                      value={this.state.country}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-wrap terms-wrap">
              <div className="contact-title">
                <h2>Terms and conditons</h2>
              </div>

              <div className="contact-form-wrap">
                <p>
                  Once you submit your request, we'll securely store your
                  information in an account to make sure we can contact you when
                  we find a match. We’ll send you a temporary password that you
                  can use to access your account and manage your requests.
                </p>
                <div className="check-box-wrap">
                  <input
                    name="terms"
                    type="checkbox"
                    onClick={this.handleChange}
                    className="form-check-input"
                    value={this.state.terms}
                  />
                  <label for="terms" className="form-check-label">
                    I hereby agree to the{" "}
                    <a class="text-primary">Terms &amp; Conditions</a>
                  </label>
                </div>

                <div className="check-box-wrap">
                  <input
                    name="privacy"
                    type="checkbox"
                    onClick={this.handleChange}
                    className="form-check-input"
                    value={this.state.privacy}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <label for="privacy" className="form-check-label">
                    I hereby agree to the{" "}
                    <a class="text-primary">Privacy policy</a>
                  </label>
                </div>
              </div>
            </div>
            <div className="button-groups">
              <button type="button" className="contact-back">
                Back
              </button>
              <button type="submit" className="contact-submit">
                Submit
              </button>
            </div>
          </div>
        </ValidatorForm>
      </div>
    );
  }
}
