import { deleteQuestionById } from "../models/question.js";

const questionsElement = document.getElementById("questions");

export const logId = () => {
  console.log("id");
};

export const handleDeleteQuestionById = (event) => {
  const questionId = event.target.getAttribute("data-id");
  deleteQuestionById(questionId);
};

export const renderQuestions = (questions) => {
  questionsElement.innerHTML = questions
    .map((question) => {
      return `<div>
        <h2>${question.title}</h2>
        <p>${question.description}</p>
        <button class="delete-button" data-id="${question._id}">Delete</button>
      </div>`;
    })
    .join("");

  const deleteButtonsElements =
    document.getElementsByClassName("delete-button");
  const deleteButtons = Array.from(deleteButtonsElements);

  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", handleDeleteQuestionById);
  });
};
