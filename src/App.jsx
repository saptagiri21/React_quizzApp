import { useState } from "react";
function QuizzApp() {
  const questionsData = [
    {
      id: 1,
      question: "What is React?",
      options: [
        "A database",
        "A JavaScript library for building UI",
        "A backend framework",
        "An operating system",
      ],
      answerId: 1,
    },
    {
      id: 2,
      question: "Which hook is used for state in React?",
      options: ["useEffect", "useContext", "useState", "useRef"],
      answerId: 2,
    },
    {
      id: 3,
      question: "What does JSX stand for?",
      options: [
        "Java Syntax Extension",
        "JavaScript XML",
        "JSON XML",
        "Java Source Extension",
      ],
      answerId: 1,
    },
    {
      id: 4,
      question: "Why is key used in React lists?",
      options: [
        "For styling",
        "For API calls",
        "To uniquely identify elements",
        "To sort elements",
      ],
      answerId: 2,
    },
    {
      id: 5,
      question: "How do you pass props to a component?",
      options: [
        "<Comp props={data} />",
        "<Comp data={data} />",
        "<Comp(data)>",
        "<Comp = data />",
      ],
      answerId: 1,
    },
  ];
  const [questions, setQuestions] = useState(questionsData);
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedoption] = useState(null);
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  let currentquestion = questions[index];

  const onSubmit = (e) => {
    setSelectedoption(e);
    if (e === currentquestion.answerId) {
      setCount(count + 1);
    }
  };
  const OnNext = () => {
    if (index < questionsData.length - 1) {
      setIndex(index + 1);
      setSelectedoption(null);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div>
        <h1>Quiz Finished </h1>
        <p>
          Your Score: {count} / {questions.length}
        </p>
      </div>
    );
  }
  //let q = questionsData.map(()=>{questions[i].question})

  return (
    <div className="container">
      <h1>Quizz APP</h1>
      <div>
        <p className="question">{currentquestion.question}</p>
        <div>
          <ul className="options">
            {currentquestion.options.map((option, index) => {
              return (
                <li>
                  <button
                    key={index}
                    onClick={() => onSubmit(index)}
                    disabled={selectedOption != null}
                    className="option-button"
                  >
                    {option}
                  </button>{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <button className="next-button" onClick={OnNext}>
          Next
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <QuizzApp />
    </div>
  );
}

export default App;
