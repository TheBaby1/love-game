import React, { useState } from 'react';
import './App.css';
import valandme from './assets/valandme.jpg';

// Sample questions (you can customize or add more)
const questions = [
  {
    question: "Asa man ta nag first date?",
    options: ["Family Park", "Central Bloc", "SM Seaside", "Fuente Circle"],
    correct: "Central Bloc"
  },
  {
    question: "Unsay ato gi buhat sa first date?",
    options: ["Photobooth", "Wingers", "Basketball", "Timezone"],
    correct: "Timezone"
  },
  {
    question: "Asa ta nag first kiss?",
    options: ["JTH 2 Building", "Gawas sa dorm nila rikka", "Bunzel Building", "Mambaling"],
    correct: "Gawas sa dorm nila rikka"
  },
  {
    question: "Asa ta first nag sleep together?",
    options: ["JTH 2 Building", "Old Dorm Above The Pharmacy", "Q Hotel", "D'new Inn"],
    correct: "Old Dorm Above The Pharmacy"
  },
  {
    question: "Asa ta nag first play ug valorant?",
    options: ["Domain", "Drippy Lab", "Game City", "TNC"],
    correct: "TNC"
  }
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Function to handle selecting an answer
  const handleAnswerSelection = (answer) => {
    if (isAnswered) return; // Prevent multiple answers for the same question

    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
  };

  // Function to go to the next question
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false);
      setSelectedAnswer(null);
    } else {
      setShowResults(true); // End the quiz
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="App">
      {!showResults ? (
        <div className="quiz-container">
          <h1>Love Quiz Game</h1>
          <h2>{currentQuestion.question}</h2>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${selectedAnswer === option ? 'selected' : ''}`}
                onClick={() => handleAnswerSelection(option)}
                disabled={isAnswered}
              >
                {option}
              </button>
            ))}
          </div>
          {isAnswered && (
            <div className="next-button">
              <button onClick={nextQuestion}>Next</button>
            </div>
          )}
        </div>
      ) : (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <h3>Your score: {score} out of {questions.length}</h3>
          <h3>{score === questions.length ? "Expert Kaayu Oh!" : "Noooo! But Why!!"}</h3>
          <p>
            Hey, I know at this time you’re still mad at me, but I made this little quiz game for our 
            monthsary. I hope you like it, even if it’s a simple one.
          </p>

          <p>
          Happy 20th Monthsary my love! I love you so much my sweet baby! I know how tiring these past few months have been for us, there have been so many obstacles, challenges, and hard-fought battles that we both endured. 
          Yet, still, here we are, celebrating our 20th monthsary. You know, I wish we could celebrate our monthsarries together, like be together while we wait for 12 am in the morning. 
          I guess we just have to endure this distance for now as well, love. Regardless, distance won’t stop us from celebrating 
          this wondrous occasion, even though I am not with you physically, I will always be with you spiritually my love. One day, we won’t have to have these small problems. One day, we’ll celebrate this together every single month. 
          </p>

          <p>
          I am sorry that I made you upset last night, I am sorry that I also hurt you in the process. I know I can never rush you out of what you’re feeling, I know it takes time to do so. Not only does it take time, 
          but also a collective effort of my actions that can help make you feel better pud. 
          I am sorry if even at this time, I still failed to make you feel better and okay. I am sorry, my love. I really am. 
          </p>

          <img className="image" src={valandme}></img>
        </div>
      )}
    </div>
  );
}

export default App;
