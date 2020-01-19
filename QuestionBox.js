import React, {useState} from "react";
import { Button } from "semantic-ui-react";
import './QuestionBox.css'

const QuestionBox = ({question, options, computeAnswer, nextQuestion, values}) => {
  const [answer, setAnswer] = useState(options);
  const handleClick = (text, index) => {
    setAnswer([text])
    computeAnswer(values[index])
    nextQuestion()
  }
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <Button
          key={index}
          className="answerBtn"
          onClick= {() => handleClick(text, index)}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};

export default QuestionBox;
