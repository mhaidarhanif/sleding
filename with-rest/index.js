const questionsElement = document.getElementById("questions");
const questionFormElement = document.getElementById("question-form");

const BACKEND_API_URL =
  "https://api.kontenbase.com/query/api/v1/29f479eb-b571-4de1-978b-10ac1755d57c";

const renderQuestions = (questions) => {
  questionsElement.innerHTML = questions
    .map((question) => {
      return `<div>
        <h2>${question.title}</h2>
        <p>${question.description}</p>
        <button onclick='deleteQuestionById("${question._id}")'>Delete</button>
      </div>`;
    })
    .join("");
};

const fetchQuestions = async () => {
  const response = await fetch(`${BACKEND_API_URL}/questions`);
  const questions = await response.json();

  renderQuestions(questions);
};

const addNewQuestion = async (event) => {
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

const deleteQuestionById = async (questionId) => {
  const response = await fetch(`${BACKEND_API_URL}/questions/${questionId}`, {
    method: "DELETE",
  });

  fetchQuestions();
};

questionFormElement.addEventListener("submit", addNewQuestion);

fetchQuestions();
