import React from 'react';
import './Mystyles.css';

function Stylesheet(props) {
  const className = props.primary ? 'primary' : '';
  return (
    <div>
      <h1 className={`${className} font-xl`}>CSS Stylesheet</h1>
    </div>
  );
}

export default Stylesheet;
