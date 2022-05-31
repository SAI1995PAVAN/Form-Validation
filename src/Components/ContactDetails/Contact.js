import React from "react";
import "./Contact.css";

const Contact = (props) => {
  const { type, title, onChange, inputValue } = props;
  return (
    <div className="container">
      <div>
        <label>{title}</label>
        <input type={type} onChange={onChange} value={inputValue} />
      </div>
    </div>
  );
};

export default Contact;
