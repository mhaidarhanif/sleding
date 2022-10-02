const questionsElement = document.getElementById("questions");
const questionFormElement = document.getElementById("question-form");

const BACKEND_API_URL = "https://eblfwbitybrvgozptucv.nhost.run/v1/graphql";
const X_HASURA_ADMIN = "17ac133e8eb4e9d041b6c75dd819ba7e";

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
  try {
    const queryAllQuestions = `query AllQuestions {
      questions {
        id
        title
        description
      }
    }`;

    const response = await fetch(BACKEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": X_HASURA_ADMIN,
      },
      body: JSON.stringify({ query: queryAllQuestions }),
    });

    const { data, errors } = await response.json();

    if (errors?.length && errors[0]?.message) {
      throw new Error("Failed to get all questions");
    }

    renderQuestions(data.questions);
  } catch (error) {
    console.error(error.message);
  }
};

const addNewQuestion = async (event) => {
  try {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newQuestion = {
      title: formData.get("question-title"),
      description: formData.get("question-description"),
    };

    const mutateAddNewQuestion = `mutation AddNewQuestion {
    insert_questions_one(object: {
      title: "${newQuestion.title}",
      description: "${newQuestion.description}"
    }) {
      id
      title
      description
    }
  }`;

    const response = await fetch(BACKEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": X_HASURA_ADMIN,
      },
      body: JSON.stringify({ query: mutateAddNewQuestion }),
    });

    const { data, errors } = await response.json();

    if (errors?.length && errors[0]?.message) {
      throw new Error("Failed to add new question");
    }

    fetchQuestions();
  } catch (error) {
    console.error(error.message);
  }
};

const deleteQuestionById = async (questionId) => {
  const response = await fetch(BACKEND_API_URL, {
    method: "DELETE",
  });

  fetchQuestions();
};

questionFormElement.addEventListener("submit", addNewQuestion);

fetchQuestions();
