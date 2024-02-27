import React from "react";
import { useNavigate } from 'react-router-dom';

const Nextbutton = ({ destination, label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(destination);
  };

  return (
    <button 
      className="btn btn-primary mt-3"
      style={{ color: 'red', backgroundColor: 'black', fontWeight: 'bold', marginRight: '10px' }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Nextbutton;