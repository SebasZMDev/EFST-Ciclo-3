import { useEffect, useState } from 'react';
import './ComStyles.css';


type Props = {
    text: string;
    onClick: ()=>void;
    escala?: string;
    desactivo?: boolean;
  }

const CustomBtn = ({ text, onClick, escala, desactivo}:Props) => {


  return (
    <button disabled={desactivo} className={desactivo?'crimson-disabled':'crimson-button'} style={{transform:escala?escala:''}} onClick={onClick}>
        {text}
    </button>
  );
};

export default CustomBtn;
