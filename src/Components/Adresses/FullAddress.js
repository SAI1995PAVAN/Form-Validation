import React, { Component } from "react";
import Current from "./Current";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./FullAddress.css";

class FullAddress extends Component {
  constructor() {
    super();
    this.state = {
      line1Value: "",
      line2Value: "",
      line3Value: "",
      placeValue: "",
      postalValue: "",
      Line1CopyValue: "",
      Line2CopyValue: "",
      Line3CopyValue: "",
      placeCopyValue: "",
      postalCopyValue: "",
      addressTypeValue: "please select",
      addressTypeCopyValue: "pleaseselect",
      addressproofValue: "please select",
      addressproofCopyValue: "please select",
      stateDropdownValue: "please select",
      stateDropdownCopyValue: "please select",
      countriesDropdownValue: "please select",
      countriesDropdownCopyValue: "please select",
    };
  }

  handleCopyData = (e) => {
    if (e.target.checked) {
      this.setState({
        Line1CopyValue: this.state.line1Value,
        Line2CopyValue: this.state.line2Value,
        Line3CopyValue: this.state.line3Value,
        placeCopyValue: this.state.placeValue,
        addressTypeCopyValue: this.state.addressTypeValue,
        addressproofCopyValue: this.state.addressproofValue,
        stateDropdownCopyValue: this.state.stateDropdownValue,
        countriesDropdownCopyValue: this.state.countriesDropdownValue,
        postalCopyValue: this.state.postalValue,
      });
    } else {
      this.setState({
        Line1CopyValue: e.target.value,
        Line2CopyValue: this.state.line2Value,
        Line3CopyValue: this.state.line3Value,
        placeCopyValue: this.state.placeValue,
        addressTypeCopyValue: this.state.addressTypeValue,
        addressproofCopyValue: this.state.addressproofValue,
        stateDropdownCopyValue: this.state.stateDropdownValue,
        countriesDropdownCopyValue: this.state.countriesDropdownValue,
        postalCopyValue: this.state.postalValue,
      });
    }
  };

  handleTextInput = (key) => (e) => {
    let temp = {};
    temp[key] = e.target.value;
    this.setState(temp);
  };

  handleDropdownInput = (key) => (e, b) => {
    let temp = {};
    temp[key] = b.target.innerText;
    this.setState(temp);
  };

  handleCopyDropdownInput = (key) => (i, e) => {
    let temp = {};
    temp[key] = e.target.innerText;
    this.setState(temp);
  };

  render() {
    let addressTypes = [
      "Residential",
      "Bussiness",
      "Registered Office",
      "Unspecified",
    ];
    let addressProof = [
      "Certificate of Incorporation",
      "RegistrationCertificate",
    ];
    let countries = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antigua &amp; Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia &amp; Herzegovina",
      "Botswana",
      "Brazil",
      "British Virgin Islands",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Cape Verde",
      "Cayman Islands",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Congo",
      "Cook Islands",
      "Costa Rica",
      "Cote D Ivoire",
      "Croatia",
      "Cruise Ship",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Polynesia",
      "French West Indies",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kuwait",
      "Kyrgyz Republic",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macau",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Nepal",
      "Netherlands",
      "Netherlands Antilles",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Norway",
      "Oman",
      "Pakistan",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Reunion",
      "Romania",
      "Russia",
      "Rwanda",
      "Saint Pierre &amp; Miquelon",
      "Samoa",
      "San Marino",
      "Satellite",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "South Africa",
      "South Korea",
      "Spain",
      "Sri Lanka",
      "St Kitts &amp; Nevis",
      "St Lucia",
      "St Vincent",
      "St. Lucia",
      "Sudan",
      "Suriname",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Timor L'Este",
      "Togo",
      "Tonga",
      "Trinidad &amp; Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks &amp; Caicos",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "Uruguay",
      "Uzbekistan",
      "Venezuela",
      "Vietnam",
      "Virgin Islands (US)",
      "Yemen",
      "Zambia",
      "Zimbabwe",
    ];
    let states = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttarakhand",
      "Uttar Pradesh",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli",
      "Daman and Diu",
      "Delhi",
      "Lakshadweep",
      "Puducherry",
    ];
    return (
      <div>
        <h1>Current/Permanent Address Details</h1>
        <div className="Address-container">
          <div className="Address-block address-drop-down">
            <label>Address Type</label>
            <div className="address-drop-button">
              <Dropdown>
                <DropdownButton
                  title={this.state.addressTypeValue}
                  id="drop-button-1"
                  onSelect={this.handleDropdownInput("addressTypeValue")}
                >
                  {addressTypes.map((addr, index) => {
                    return (
                      <Dropdown.Item href={`#/action-${index}`} key={index}>
                        {addr}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
              </Dropdown>
            </div>
          </div>
          <div className="Address-block address-drop-down">
            <label>Proof of Address</label>
            <div className="address-drop-button">
              <Dropdown>
                <DropdownButton
                  title={this.state.addressproofValue}
                  id="drop-button-2"
                  onSelect={this.handleDropdownInput("addressproofValue")}
                >
                  {addressProof.map((proof, index) => {
                    return (
                      <Dropdown.Item href={`#/action-${index}`} key={index}>
                        {proof}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
              </Dropdown>
            </div>
          </div>
          <div className="Address-block">
            <Current
              type="text"
              title="Line 1"
              onChange={this.handleTextInput("line1Value")}
              value={this.state.line1Value}
            />
          </div>
          <div className="Address-block">
            <Current
              type="text"
              title="Line 2"
              onChange={this.handleTextInput("line2Value")}
              value={this.state.line2Value}
            />
          </div>
          <div className="Address-block">
            <Current
              type="text"
              title="Line 3"
              onChange={this.handleTextInput("line3Value")}
              value={this.state.line3Value}
            />
          </div>
          <div className="Address-block">
            <Current
              type="text"
              title="City/Town/Village"
              onChange={this.handleTextInput("placeValue")}
              value={this.state.placeValue}
            />
          </div>
          <div className="Address-block address-drop-down">
            <label>STATE/UT</label>
            <div className="address-drop-button">
              <Dropdown>
                <DropdownButton
                  title={this.state.stateDropdownValue}
                  id="drop-button-3"
                  onSelect={this.handleDropdownInput("stateDropdownValue")}
                >
                  <div className="address-scroll-dropdown">
                    {states.map((state, index) => {
                      return (
                        <Dropdown.Item href={`#/action-${index}`} key={index}>
                          {state}
                        </Dropdown.Item>
                      );
                    })}
                  </div>
                </DropdownButton>
              </Dropdown>
            </div>
          </div>
          <div className="Address-block address-drop-down">
            <label>Countries</label>
            <div className="address-drop-button">
              <Dropdown>
                <DropdownButton
                  title={this.state.countriesDropdownValue}
                  id="drop-button-4"
                  onSelect={this.handleDropdownInput("countriesDropdownValue")}
                >
                  <div className="address-scroll-dropdown">
                    {countries.map((country, index) => {
                      return (
                        <Dropdown.Item href={`#/action-${index}`} key={index}>
                          {country}
                        </Dropdown.Item>
                      );
                    })}
                  </div>
                </DropdownButton>
              </Dropdown>
            </div>
          </div>
          <div className="Address-block">
            <Current
              type="number"
              title="Pin/Postal Code"
              onChange={this.handleTextInput("postalValue")}
              value={this.state.postalValue}
            />
          </div>
        </div>

        <h2>Correspondence or Local Address</h2>

        <label id="copy-data">
          <input type="checkbox" onChange={this.handleCopyData} />
          If details are same as above{" "}
        </label>
        <div className="Address-container">
          <div className="Address-block address-drop-down">
            <label>Address Type</label>
            <div className="address-drop-button">
              <Dropdown>
                <DropdownButton
                  id="drop-button-5"
                  title={this.state.addressTypeCopyValue}
                  onSelect={this.handleCopyDropdownInput(
                    "addressTypeCopyValue"
                  )}
                >
                  <div>
                    {addressTypes.map((addr, index) => {
                      return (
                        <Dropdown.Item href="#/action-{index}">
                          {addr}
                        </Dropdown.Item>
                      );
                    })}
                  </div>
                </DropdownButton>
              </Dropdown>
            </div>
          </div>
          <div className="Address-block address-drop-down">
            <label>Proof of Address</label>
            <div className="address-drop-button">
              <Dropdown>
                <DropdownButton
                  id="drop-button-6"
                  title={this.state.addressproofCopyValue}
                  onSelect={this.handleCopyDropdownInput(
                    "addressproofCopyValue"
                  )}
                >
                  {addressProof.map((proof, index) => {
                    return (
                      <Dropdown.Item href="#/action-{index}">
                        {proof}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
              </Dropdown>
            </div>
          </div>
          <div className="Address-block">
            <Current
              type="text"
              title="Line 1"
              value={this.state.Line1CopyValue}
            />
          </div>
          <div className="Address-block">
            <Current
              type="text"
              title="Line 2"
              value={this.state.Line2CopyValue}
            />
          </div>
          <div className="Address-block">
            <Current
              type="text"
              title="Line 3"
              value={this.state.Line3CopyValue}
            />
          </div>
          <div className="Address-block">
            <Current
              type="text"
              title="City/Town/Village"
              value={this.state.placeCopyValue}
            />
          </div>
          <div className="Address-block address-drop-down">
            <label>STATE/UT</label>
            <div className="address-drop-button">
              <Dropdown>
                <DropdownButton
                  id="drop-button-7"
                  title={this.state.stateDropdownCopyValue}
                  onSelect={this.handleCopyDropdownInput(
                    "stateDropdownCopyValue"
                  )}
                >
                  <div className="address-scroll-dropdown">
                    {states.map((state, index) => {
                      return (
                        <Dropdown.Item href="#/action-{index}">
                          {state}
                        </Dropdown.Item>
                      );
                    })}
                  </div>
                </DropdownButton>
              </Dropdown>
            </div>
          </div>
          <div className="Address-block address-drop-down">
            <label>Countries</label>
            <div className="address-drop-button">
              <Dropdown>
                <DropdownButton
                  id="drop-button-8"
                  title={this.state.countriesDropdownCopyValue}
                  onSelect={this.handleCopyDropdownInput(
                    "countriesDropdownCopyValue"
                  )}
                >
                  <div className="address-scroll-dropdown">
                    {countries.map((country, index) => {
                      return (
                        <Dropdown.Item href={`#/action-${index}`}>
                          {country}
                        </Dropdown.Item>
                      );
                    })}
                  </div>
                </DropdownButton>
              </Dropdown>
            </div>
          </div>
          <div className="Address-block">
            <Current
              type="text"
              title="Pin/Postal Code"
              value={this.state.postalCopyValue}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FullAddress;
