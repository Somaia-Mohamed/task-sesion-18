import React, { useState } from "react";
const App = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(index);
  };

  const questions = [
    {
      id: 0,
      question: <pre>01    where are these chairs assembled? <span>+</span></pre>,
      answer:
        "Lorem Ipsum is a type of placeholder text commonly used in design and development to fill in for content that has not yet been created or is not yet available. It is often used to demonstrate the layout and design of a website or application, without the need for actual content.",
    },
    {
      id: 1,
      question: <pre>02    How long do I have to return my chair?<span>+</span></pre>,
      answer:
        "Lorem Ipsum is a type of placeholder text commonly used in design and development to fill in for content that has not yet been created or is not yet available. It is often used to demonstrate the layout and design of a website or application, without the need for actual content.",
    },
    {
      id: 2,
      question: <pre>03    Do you ship to countries outside the EU?<span>+</span></pre>,
      answer:
        "Lorem Ipsum is a type of placeholder text commonly used in design and development to fill in for content that has not yet been created or is not yet available. It is often used to demonstrate the layout and design of a website or application, without the need for actual content.",
    },
  ];

  return (
    <div className="App">
      {questions.map((question, index) => (
        <div key={questions.id} >
          <div
            className={`question ${activeQuestion === index ? "active" : ""}`}
            onClick={() => toggleAnswer(index)}
          >
            <p>{question.question}</p>
          
            {activeQuestion === index && (
              <p className="answer">{question.answer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;
