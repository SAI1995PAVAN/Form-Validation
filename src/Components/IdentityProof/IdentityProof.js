import React, { Component } from "react";
import Identities from "./Identities";
import "./Identity.css";

class IdentityProof extends Component {
  constructor() {
    super();
    this.state = {
      incorporationValue: "",
      selectedStatus: 'none',
      boardResolutionValue: "",
      officaldocumentsValue: '',
      activityProofValue: "",
      moaValue: '',
      registerCertificateValue: "",
      trustDocumentValue: "",
      othersValue:"",
    };
  }

  handleAllInputs = (key) => (e) => {
   
    let temp = {};
    temp[key] = e.target.value;
    this.setState(temp)
    
    
  };

  render() {
    console.log('you have selected '+this.state.incorporationValue , 'you have selected '+this.state.boardResolutionValue);
    return (
      <div className="all-proofs">
        <div className="proof-block">
          <div className="individual-proofs">
            <Identities
              title="Certificate of Incorporation"
              type="checkbox"
              onChange={this.handleAllInputs("incorporationValue")}
             inputValue={this.state.incorporationValue}
            />
          </div>
          <div className="individual-proofs">
            <Identities
              title="Resolution of Board/Managing Committee"
              type="checkbox"
              onChange={this.handleAllInputs('boardResolutionValue')}
            />
          </div>
        </div>
        <div className="proof-block ">
          <div className="individual-proofs">
            <Identities
              title="Officially Valid Documents"
              type="checkbox"
              onChange={this.handleAllInputs("officialdocumentsValue")}
            />
          </div>
          <div className="individual-proofs">
            <Identities
              title="Activity proof"
              type="checkbox"
              onChange={this.handleAllInputs("activityProofValue")}
            />
          </div>
        </div>
        <div className="proof-block">
          <div className="proof-block individual-proofs">
            <Identities
              title="MOA & AOA"
              type="checkbox"
              onChange={this.handleAllInputs("moaValue")}
            />
          </div>

          <div className="individual-proofs">
            <Identities
              title="Registration Certificate"
              type="checkbox"
              onChange={this.handleAllInputs("registrationCertificateValue")}
            />
          </div>
        </div>
        <div className="proof-block">
          <div className="individual-proofs">
            <Identities
              title="MOA& AOA Trust Document"
              type="checkbox"
              onChange={this.handleAllInputs("trustDocumentValue")}
            />
          </div>

          <div className="proof-block individual-proofs">
            <Identities
              title="Others"
              type="checkbox"
              onChange={this.handleAllInputs("othersValue")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default IdentityProof;
