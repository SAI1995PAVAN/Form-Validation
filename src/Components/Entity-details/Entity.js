import React, { Component } from "react";

import { Dropdown, DropdownButton } from "react-bootstrap";
import "./Entity.css";

class Entity extends Component {
  constructor() {
    super();
    this.state = {
      countries: [
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
      ],
      countryValue: "country",
      entityConstitutionTypeValue:'please select',
      branchCodeValue: '',
      entityNameValue: "",
      dateValue: "",
      panValue: "",
      incoporationPlaceValue: "",
      gstnValue: "",
      identificationNumberValue: "",
      legalEntityValue: "",
      financialStatusValue: "",
      nonFinancialEntityValue: '',
    };
  }

  handleTextInput = (key) => (e) => {
    let temp = {};
    temp[key] = e.target.value;
    this.setState(temp);
  };

  handleDropdownInput = (key) => (e,b) => {
    console.log("dropdowninputisrun")
    let temp = {};
    console.log("heehaaa",e,b);
    temp[key] = b.target.innerText;
    console.log("heehaaa",e);
    this.setState(temp);
  };

  handleRadioInput = (key) => (e) => {
    let temp = {};
    temp[key] = e.target.value;
    this.setState(temp);
  };

  render() {
    console.log(
      // this.state.dateValue,
      // this.state.gstnValue,
      // this.state.panValue,
      this.state.countryValue,
      // this.state.financialStatusValue,
      // this.state.nonFinancialEntityValue
    );
    let Entity = [
      "sole - propereitor",
      "patnership",
      "huv",
      "pvt - ltd",
      "pub - ltd",
      "society",
      "aop",
      "trust",
      "liquidator",
      "local storage",
      "artificial juridiciary",
      "psb",
      "govt dept agency",
      "forigen portfolio",
      "section8",
      "artificial judiciary",
      "not catogorised",
      "others",
    ];

    return (
      <div>
        <form id="form">
          <div className="block branch">
            <div className="code">
              <label htmlFor="">Branch Code</label>
              <input
                type="text"
                value={this.state.branchCodeValue}
                onChange={this.handleTextInput("branchCodeValue")}
              />
            </div>
            <div className="bname">
              <div>
                <label>Select branch </label>
                <button id="branch-name-button">Get Branch Name</button>
              </div>
              <span>
                (Please enter the 5-digit Branch Code here. E.g. 00800)
              </span>
            </div>
          </div>
          <div className="block">
            <label htmlFor="">Branch Name</label>
            <input type="text" />
          </div>
          <div className="block">
            <label htmlFor="">Name of Entity(in BLOCK LETTERS)</label>
            <input
              type="text"
              onChange={this.handleTextInput("entityNameValue")}
              value={this.state.entityNameValue}
            />
          </div>
          <div className="block">
            <label htmlFor="">Date of Incorporation</label>
            <input
              type="date"
              onChange={this.handleTextInput("dateValue")}
              value={this.state.dateValue}
            />
          </div>
          <div className="block">
            <label htmlFor="">PAN</label>
            <input
              type="text"
              onChange={this.handleTextInput("panValue")}
              value={this.state.panValue}
            />
          </div>
          <div className="block branch">
            <div className="code">
              <label>Place of incorporation</label>
              <input
                type="text"
                onChange={this.handleTextInput("incoporationPlaceValue")}
                value={this.state.incoporationPlaceValue}
              />
            </div>
            <div className="country">
              <label>Countryof Incorporation/Formation(CODE-ISO 3166)</label>
              <div id="country-dropdown">
                <Dropdown>
                  <DropdownButton
                    id="country"
                    title={this.state.countryValue}
                    onSelect={this.handleDropdownInput("countryValue")}
                  >
                    <div className="scroll-dropdown">
                      {this.state.countries.map((coun, index) => {
                        return (
                          <Dropdown.Item as="button"
                            href={`#/action-${index}`}
                            value={coun}
                            key={index}
                          >
                            {coun}
                          </Dropdown.Item>
                        );
                      })}
                    </div>
                  </DropdownButton>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="block">
            <label htmlFor="">GSTN</label>
            <input
              type="text"
              onChange={this.handleTextInput("gstnValue")}
              value={this.state.gstnValue}
            />
          </div>
          <div class="block" id="Entity-type">
            <label>Entity Constitution type</label>
            <Dropdown>
            <DropdownButton
              id="dropdown-basic-button"
              title={this.state.entityConstitutionTypeValue}
              onSelect={this.handleDropdownInput("entityConstitutionTypeValue")}
            >
              <div className="scroll-dropdown">
                {Entity.map((each, index) => {
                  return (
                    <Dropdown.Item
                      as='button'
                      href={`#/action-${index}`}
                      value={each}
                      key={index}>
                      {each}
                    </Dropdown.Item>
                  );
                })}
              </div>
              </DropdownButton>
              </Dropdown>
          </div>
          <div className="block branch">
            <div className="code">
              <label>Identification Type</label>
              <input type="text" />
            </div>
            <div className="identification-number">
              <label> Identification Number</label>
              <input
                type="text"
                onChange={this.handleTextInput("identificationNumberValue")}
                value={this.state.identificationNumberValue}
              />
            </div>
          </div>
          <div>
            <div>
              <p>Determine whether entity is 'fi' or 'nfe'</p>
              <div>
                <label className="entity-status" htmlfor="fi">
                  financial institution(fi)
                </label>
                <input
                  type="radio"
                  value="fi"
                  name="entity"
                  id="fi"
                  onChange={this.handleRadioInput("financialStatusValue")}
                />
              </div>
              <div>
                <label html for="nfe">
                  non-financialinstitution(nfe)
                </label>
                <input
                  type="radio"
                  value="nfe"
                  name="entity"
                  id="nfe"
                  onChange={this.handleRadioInput("nonFinancialEntityValue")}
                />
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <p>Direct Reporting non financial forigen entity</p>
              <div className="block">
                <label htmlFor="yes">yes</label>
                <input type="radio" name="choose" />
              </div>
              <div className="block">
                <label htmlFor="no">no</label>
                <input type="radio" name="choose" />
              </div>
            </div>
            <div>need to be filled</div>
          </div>
          <div>
            <label> Legal Entity Identifier</label>
            <input
              type="text"
              onChange={this.handleTextInput("legalEntityValue")}
              value={this.state.legalEntityValue}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Entity;
