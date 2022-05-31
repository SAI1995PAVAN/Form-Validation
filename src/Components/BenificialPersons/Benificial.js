import React, { Component } from "react";
import "./Benificial.css";
class Benificial extends Component {
  constructor() {
    super();
    this.state = {
      relatedValue:'',
      benificiaryValue:'',
    };
  }

  handleInputValue = (key) => (e) => {
    let temp = {};
    temp[key] = e.target.value;
    this.setState(temp);
  };

  render() {
    console.log(this.state.relatedValue, this.state.benificiaryValue);
    return (
      <div>
        <div className="related-benificiary-owner">
          <div className="related-benificiary-input">
            <label htmlFor="related">Number of Related persons</label>
            <input
              type="text"
              id="related"
              onChange={this.handleInputValue("relatedValue")}
              value={this.state.relatedValue}
            />
          </div>
          <div className="paraData">
            <p>
              (A RELATED PERSON CAN BE DIRECTOR, PROMOTER, KARTA, TRUSTEE,
              PARTNER, AUTHORISED SIGNATORY, BENEFICIARY, BENEFICIAL OWNER,
              COURT APPOINTED OFFICIAL.)
            </p>
          </div>
        </div>
        <div className="related-benificiary-owner">
          <div className="related-benificiary-input">
            <label htmlFor="benificiary">Number of Related persons</label>
            <input
              type="text"
              id="benificiary"
              onChange={this.handleInputValue("benificiaryValue")}
              value={this.state.benificiaryValue}
            />
          </div>
          <div div className="paraData">
            <p>
              (THOUGH A BENEFICIAL OWNER IS A RELATED PERSON, THE NUMBER OF
              BENEFICIAL OWNER SHOULD BE DETERMINED SEPARATELY.OUT OF NUMBER OF
              RELATED PERSON ,BENEFICIAL OWNER IS A PART / SUBSET OF RELATED
              PERSON )
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Benificial;
