import { useState } from "react";
import "./FAQCard.style.css";
import Close from "./images/cancel.svg";
import Open from "./images/dropdown.svg";
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
      <div className={`individualFAQTop ${isOpen && "bgyellow"}`}>
        <div className="emptyDivContainer">
          <span>{number}</span>
          <p>{Question}</p>
        </div>
        {isOpen ? (
          <img src={Close} className="remUnitsIcon" onClick={handleToggle} />
        ) : (
          // <Close className="remUnitsIcon" onClick={handleToggle} />
          <img src={Open} className="remUnitsIcon" onClick={handleToggle} />
          // <MdOutlineKeyboardDoubleArrowUp
          //   className="remUnitsIcon"
          //   onClick={handleToggle}
          // />
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
