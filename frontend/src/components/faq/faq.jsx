import { FaAngleRight } from "react-icons/fa";
import FaqItem from "./FaqItem";
import "./faq.css";
let faqs = [
  {
    question: "What is Netflix",
    answer:
      "NetFlix is a platform where you can watch movies TV Shows and more by buying a premium membership",
  },
  {
    question: "Where can I Watch?",
    answer:
      "NetFlix is a platform where you can watch movies TV Shows and more by buying a premium membership",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "NetFlix is a platform where you can watch movies TV Shows and more by buying a premium membership",
  },
  {
    question: "How do i cancel?",
    answer:
      "NetFlix is a platform where you can watch movies TV Shows and more by buying a premium membership",
  },
  {
    question: "Is Netflix good for children?",
    answer:
      "NetFlix is a platform where you can watch movies TV Shows and more by buying a premium membership",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "NetFlix is a platform where you can watch movies TV Shows and more by buying a premium membership",
  },
];
const Faq = () => {
  return (
    <section className="faq">
      <h2 className="main-title">Frequently Asked Questions</h2>
      {faqs.map((faq) => {
        return (
          <FaqItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        );
      })}
      <div className="hero-cta">
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <div className="get-start">
          <input type="text" placeholder="email address" />
          <button className="btn">
            Get Started <FaAngleRight />{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
