import React, { useState } from "react";

export const Context = React.createContext();

const Provider = ({ children }) => {
  const [questions, setQuestions] = useState([])
  const [questionsList, setQuestionsList] = useState([])
  const [play, setPlay] = useState(false)
  const [nextQuestion, setNextQuestion] = useState(1)
  const [answers, setAnswers] = useState([])
  const [points, setPoints] = useState(0)
  let correctsAnswers = []
  const [cloudLimit, setCloudLimit] = useState(true)
  const [barretLimit, setBarretLimit] = useState(2)
  const [rollDice, setRollDice] = useState(0)

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const apiCall = () => {
    return fetch('https://opentdb.com/api.php?amount=10&category=15&type=multiple')
      .then(data => data.json());
  };

  const randomOrder = () => setRollDice(Math.round(Math.random() * 40 / 10))

  const cloudToggler = () => {
    setPlay(true);
    setQuestionsList(questions.slice());
    setBarretLimit(0);
    randomOrder();
  }

  const barretToggler = () => {
    setPlay(true);
    setQuestionsList(questions.slice());
    setCloudLimit(false);
    randomOrder();
  }

  const nextQuestionToggler = (e) => {
    setNextQuestion(nextQuestion + 1);
    questionsList.shift();
    setAnswers([...answers, e.target.value]);
    randomOrder();
  }

  const pointsCounter = () => {
    answers.forEach((answer) => questions.forEach((question) => answer === question.correct_answer && correctsAnswers.push(answer)))
    setPoints(correctsAnswers.length * 3)
    setNextQuestion(nextQuestion + 1)
  }

  const refreshPage = () => window.location.reload();

  const omnislash = () => {
    answers.push(questions[nextQuestion - 1].correct_answer);
    correctsAnswers.push(questions[nextQuestion - 1].correct_answer);
    questionsList.shift();
    setNextQuestion(nextQuestion + 1);
    setCloudLimit(false);
    randomOrder();
  }

  const catastrophe = () => {
    questions[nextQuestion - 1].incorrect_answers[0] = '---';
    questions[nextQuestion - 1].incorrect_answers[1] = '---';
    setBarretLimit(barretLimit - 1);
  }

  return (
    <Context.Provider
      value={{
        scrollTop,
        apiCall,
        questions,
        setQuestions,
        questionsList,
        setQuestionsList,
        play,
        cloudToggler,
        barretToggler,
        nextQuestion,
        setNextQuestion,
        nextQuestionToggler,
        answers,
        points,
        pointsCounter,
        refreshPage,
        cloudLimit,
        barretLimit,
        omnislash,
        catastrophe,
        rollDice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
