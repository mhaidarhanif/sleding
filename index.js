import { initialDataQuestions } from "./data/questions.js";
import { renderQuestions } from "./features/question.js";

let appQuestions = initialDataQuestions;

const questionFormElement = document.getElementById("question-form");
const questionsContainerElement = document.getElementById(
  "questions-container"
);
const copyrightYearElement = document.getElementById("copyright-year");

const addNewQuestion = (event) => {
  event.preventDefault();

  // Get form input values
  const formData = new FormData(event.target);
  const title = formData.get("question-title");
  const description = formData.get("question-description");

  const newQuestion = { title, description };

  // Append new question to the existing app questions data
  const newDataQuestions = [...appQuestions, newQuestion];

  // Replace existing app questions with the new data
  // Later can be sync with the database or web storage
  appQuestions = newDataQuestions;

  // Re-render questions data
  renderQuestions(questionsContainerElement, appQuestions);
};

const renderApp = () => {
  copyrightYearElement.innerText = new Date().getFullYear();

  renderQuestions(questionsContainerElement, appQuestions);

  questionFormElement.addEventListener("submit", addNewQuestion);
};

renderApp();
