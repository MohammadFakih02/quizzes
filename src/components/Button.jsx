import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button type="button"  className="base-button" onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default Button;