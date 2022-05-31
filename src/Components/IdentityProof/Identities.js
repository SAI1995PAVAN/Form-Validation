import React from "react";

const Identities = (props) => {
  const { title, type,onChange,inputValue } = props;
  return (
    <div>
      <input type={type} onChange={onChange} value={title} id={title}/>
      <label html For={title}>{title}</label>
    </div>
  );
};

export default Identities;
