import React, { Component } from "react";
import Contact from "./Contact";

class ContactDetails extends Component {
  constructor() {
    super();
    this.state = {
      telOffValue: "",
      telResValue: "",
      faxValue: "",
      mobile1Value: "",
      mobile2Value: "",
      email1Value: "",
      email2Value: "",
    };
  }
  handleAllInputs = (key) => (e) => {
    let temp = {};
    temp[key] = e.target.value;
    this.setState(temp);
  };

  //   handleInputValuesTelOff = (e) => {
  //     this.setState({
  //       telOffValue: e.target.value,
  //     });
  //   };

  //   handleInputValuesTelRes = (e) => {
  //     this.setState({
  //       telResValue: e.target.value,
  //     });
  //   };
  //   handleInputValuesFax = (e) => {
  //     this.setState({
  //       faxValue: e.target.value,
  //     });
  //   };
  //   handleInputValuesMobile1 = (e) => {
  //     this.setState({
  //       mobile1Value: e.target.value,
  //     });
  //   };
  //   handleInputValuesMobile2 = (e) => {
  //     this.setState({
  //       mobile2Value: e.target.value,
  //     });
  //   };
  //   handleInputValuesEmail1 = (e) => {
  //     this.setState({
  //       email1Value: e.target.value,
  //     });
  //   };
  //   handleInputValuesEmail2 = (e) => {
  //     this.setState({
  //       email2Value: e.target.value,
  //     });
  //   };

  render() {
    console.log(
      this.state.telOffValue,
      this.state.telResValue,
      this.state.faxValue
    );
    return (
      <div id="contact-details">
        <div className="contact-block">
          <div className="individualContact">
            <Contact
              title="tel(off)"
              type="tel"
              onChange={this.handleAllInputs("telOffValue")}
              inputValue={this.state.telOffValue}
            />
          </div>
          <div className="individualContact">
            <Contact
              title="tel(res)"
              type="tel"
              onChange={this.handleAllInputs("telResValue")}
              inputValue={this.state.telResValue}
            />
          </div>
        </div>
        <div className="contact-block">
          <div className="individualContact ">
            <Contact
              title="fax"
              type="tel"
              onChange={this.handleAllInputs("faxValue")}
              inputValue={this.state.faxValue}
            />
          </div>
        </div>
        <div className="contact-block">
          <div className="individualContact">
            <Contact
              title="mobile 1"
              type="tel"
              onChange={this.handleAllInputs("mobile1Value")}
              inputValue={this.state.mobile1Value}
            />
          </div>
          <div className="individualContact">
            <Contact
              title="mobile 2"
              type="tel"
              onChange={this.handleAllInputs("mobile2Value")}
              inputValue={this.state.mobile2Value}
            />
          </div>
        </div>
        <div className="contact-block">
          <div className="individualContact">
            <Contact
              title="email id 1"
              type="tel"
              onChange={this.handleAllInputs("email1Value")}
              inputValue={this.state.email1Value}
            />
          </div>
          <div className="individualContact">
            <Contact
              title="email id 2"
              type="tel"
              onChange={this.handleAllInputs("email2Value")}
              inputValue={this.state.email2Value}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
