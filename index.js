import { initialDataQuestions } from "./data/questions.js";
import { renderQuestions } from "./features/question.js";

let appQuestions = initialDataQuestions;

const questionFormElement = document.getElementById("question-form");
const questionsContainerElement = document.getElementById(
  "questions-container"
);

const addNewQuestion = (event) => {
  event.preventDefault();

  // Get form input values
  const formData = new FormData(event.target);
  const title = formData.get("question-title");
  const description = formData.get("question-description");

  // Append new question to the existing app questions data
  const newDataQuestions = [...appQuestions, { title, description }];

  // Replace existing app questions with the new data
  // Later can be sync with the database or web storage
  appQuestions = newDataQuestions;

  // Re-render questions data
  renderQuestions(questionsContainerElement, appQuestions);
};

const main = () => {
  renderQuestions(questionsContainerElement, appQuestions);
};

questionFormElement.addEventListener("submit", addNewQuestion);

main();
