import { useState } from "react";
import "./FAQCard.style.css";
import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import PropTypes from "prop-types";

const FAQCard = ({ FAQnote }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const { Answer, Question, number } = FAQnote;
  return (
    <div className="individualFAQ">
      <div className="individualFAQTop">
        <div className="emptyDivContainer">
          <span>{number}</span>
          <p>{Question}</p>
        </div>
        {isOpen ? (
          <MdOutlineKeyboardDoubleArrowDown
            className="remUnitsIcon"
            onClick={handleToggle}
          />
        ) : (
          <MdOutlineKeyboardDoubleArrowUp
            className="remUnitsIcon"
            onClick={handleToggle}
          />
        )}
      </div>
      <div className="individualFAQBottom">
        {isOpen && <p className="textArea">{Answer}</p>}
      </div>
    </div>
  );
};

FAQCard.propTypes = {
  FAQnote: PropTypes.shape({
    Question: PropTypes.string.isRequired,
    Answer: PropTypes.string.isRequired,
  }).isRequired,
};

export default FAQCard;
