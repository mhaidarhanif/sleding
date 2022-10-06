import { fetchQuestions, addNewQuestion } from "./models/question.js";

const questionFormElement = document.getElementById("question-form");

questionFormElement.addEventListener("submit", addNewQuestion);

fetchQuestions();
