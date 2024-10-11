import { useEffect, useState } from 'react';
import './ComStyles.css';


type Props = {
    text: string;
    onClick: ()=>void;
    escala?: string;
}

const CustomBtn = ({ text, onClick, escala }:Props) => {


  return (
    <button className="crimson-button" style={{transform:escala?escala:''}} onClick={onClick}>
        {text}
    </button>
  );
};

export default CustomBtn;
