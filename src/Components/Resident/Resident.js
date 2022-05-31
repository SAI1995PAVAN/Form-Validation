import React, { Component } from "react";
import "./Resident.css";

class Resident extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      nameValue: "",
      placeValue:'',
    };
  }

  handleInputValue = (key) => (e) => {
    let temp = {};
    temp[key] = e.target.value;
    this.setState(temp)
  }

  render() {
    // console.log(this.state.nameValue)
    return (
      <div>
        <div className="resident-block">
          <p id="tax-resident">
            Tax Resident of India Only and not of any Other Country outside
            India
          </p>
          <div id="resident-radio">
            <label htmlFor="yes">yes</label>
            <input type="radio" id="yes" name="resident" />
            <label htmlFor="no">no</label>
            <input type="radio" id="no" name="resident" />
          </div>
        </div>
        <div id="verification">Verification</div>
        <p id="resident-information">
          I <input type="text" onChange={this.handleInputValue('nameValue')} value={this.state.nameValue}/> do hereby declare that what is stated above is
          true to the best of my knowledge and belief. I further declare I do
          not have a permanent account number and my/our estimated total income
          (including income of spouse, minor child, etc.) as per section 64 of
          Income Tax Act 1961 computed in accordance with the provisions of
          Income Tax Act 1961 for the financial year in which the above
          transaction is held will be less than maximum amount not chargeable to
          tax.
        </p>
        <div id="date-place">
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="text"
              id="date"
              value={new Date().toLocaleDateString()}
            />
          </div>
          <div>
            <label htmlFor="place">place</label>
            <input type="text" id="place"  onChange={this.handleInputValue('placeValue')} value={this.state.placeValue}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Resident;
