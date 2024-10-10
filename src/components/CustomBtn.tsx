import './ComStyles.css';

type Props = {
    text: string;
    onClick: ()=>void;
}

const CustomBtn = ({ text, onClick }:Props) => {
  return (
    <button className="crimson-button" onClick={onClick}>
        {text}
    </button>

  );
};

export default CustomBtn;
