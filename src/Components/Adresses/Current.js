import React from "react";
import './Current.css'



const Current = (props) => {
  const { type, title,onChange,value} = props;
  return (
    <div className='address-block'>
      <label>{title}</label>
      <input type={type} value={value} onChange={onChange}/>
    </div>
  );
};

export default Current;
