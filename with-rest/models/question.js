import { renderQuestions } from "../modules/app.js";

const BACKEND_API_URL =
  "https://api.kontenbase.com/query/api/v1/29f479eb-b571-4de1-978b-10ac1755d57c";

export const fetchQuestions = async () => {
  const response = await fetch(`${BACKEND_API_URL}/questions`);
  const questions = await response.json();

  renderQuestions(questions);
};

export const addNewQuestion = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const newQuestion = {
    title: formData.get("question-title"),
    description: formData.get("question-description"),
  };

  const response = await fetch(`${BACKEND_API_URL}/questions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newQuestion),
  });

  fetchQuestions();
};

export const deleteQuestionById = async (questionId) => {
  const response = await fetch(`${BACKEND_API_URL}/questions/${questionId}`, {
    method: "DELETE",
  });

  fetchQuestions();
};
