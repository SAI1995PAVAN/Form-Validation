import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Entity from "./Components/Entity-details/Entity";
import "./App.css";
import ContactDetails from "./Components/ContactDetails/Contactdetails";
import IdentityProof from "./Components/IdentityProof/IdentityProof";
import FullAddress from "./Components/Adresses/FullAddress";
import Benificial from "./Components/BenificialPersons/Benificial";
import Resident from "./Components/Resident/Resident";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Accordion defaultActiveKey="0">
            <div className="accordion-block">
              <Accordion.Item eventKey="0" id="accordion-page">
                <div className="all-accordions">
                  <Accordion.Header>
                    ENTITY DETAILS(Please refer General Guidelines Point 'C')
                  </Accordion.Header>
                </div>
                <Accordion.Body>
                  <Entity />
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="accordion-block">
              <Accordion.Item eventKey="1" id="accordion-page">
                <Accordion.Header>
                  CONTACT DETAILS(All communications will be sent on provides
                  Mobile no./Email-id)
                </Accordion.Header>
                <Accordion.Body>
                  <ContactDetails />
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="accordion-block">
              <Accordion.Item eventKey="2" id="accordion-page">
                <Accordion.Header id="header">
                  PROOF OF IDENTITY
                </Accordion.Header>
                <Accordion.Body>
                  <IdentityProof />
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="accordion-block">
              <Accordion.Item eventKey="3" id="accordion-page">
                <Accordion.Header id="header">ADDRESSESS</Accordion.Header>
                <Accordion.Body>
                  <FullAddress />
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="accordion-block">
              <Accordion.Item eventKey="4" id="accordion-page">
                <Accordion.Header id="header">
                  Related/Benificiary persons
                </Accordion.Header>
                <Accordion.Body>
                  <Benificial />
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="accordion-block">
              <Accordion.Item eventKey="5" id="accordion-page">
                <Accordion.Header id="header">
                  Country of Residence as per Tax Laws
                </Accordion.Header>
                <Accordion.Body>
                  <Resident />
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default App;
