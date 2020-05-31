import React from "react";
import Navigation from "./Navigation";
import { Redirect } from "react-router-dom";

import "./style.css";

export default class Supply extends React.Component {
  constructor(props) {
    super(props);

    this.productsTemp = [];

    this.products = [
      { id: "1", name: "Respirators", description: "Surgical N95 or equivalent" },
      { id: "2", name: "Respirators", description: "N95 or equivalent" },
      { id: "3", name: "Respirators", description: "KN95 or equivalent" },
      { id: "4", name: "Gowns", description: "PB70" },
      {
        id: "5",
        name: "Examination Gloves",
        description: "Powder-free nitrile (ASTM D6319)",
      },
      {
        id: "6",
        name: "Examination Gloves",
        description: "Powder-free nitrile (ASTM D3578)",
      },
      { id: "7", name: "Facial Shields", description: "ANSI Z87.1" },
      { id: "8", name: "Hand Sanitizer", description: "" },
      { id: "9", name: "Disinfecting wipes", description: "EPA Certified" },
      { id: "10", name: "Surgical Masks", description: "" },
    ];

    // this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("products", JSON.stringify(this.productsTemp));

    this.props.history.push(`/contact`);
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="supply-form-container">
          <div className="supply-form-wrap">
            <div className="supply-title-wrap">
              <h4 className="">What products do you offer?</h4>
              <p className="">Select all that applies</p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="supply-form">
                <div className="left-form">
                  {this.products.map((product) => (
                    <div id="ck-button">
                      <label id="label">
                        <input
                          id={product.id}
                          type="checkbox"
                          onChange={() => this.productsTemp.push(product)}
                          // value={product}
                          name={product.name}
                        />
                        <span class="title">
                          {product.name}{" "}
                          <i class="description">{product.description}</i>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <button type="submit" className="continue-button">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
