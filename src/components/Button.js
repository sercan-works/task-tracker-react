// import React from 'react'

const Button = ({ color, text, handleClickFromHeader }) => {
  //   const handleClick = () => {
  //     console.log("Click with handleClick");
  //   };
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={handleClickFromHeader}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
