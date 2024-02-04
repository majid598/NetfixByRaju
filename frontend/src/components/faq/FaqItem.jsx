import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const FaqItem = ({question,answer}) => {
    const [show, setShow] = useState(false)
  return (
    <div className="faq-item">
      <div className="faq-title">
        {" "}
        <p>{question}</p>

        <FaPlus className="plus-btn" onClick={()=>setShow(!show)}/>
      </div>
      {
        show && <p className="detail-faq">
          {answer}
        </p>
      }
    </div>
  );
};

export default FaqItem;
