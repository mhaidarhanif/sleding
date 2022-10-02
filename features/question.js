export const renderQuestionElement = (question) => {
  return `<div class="question">
<h2>${question.title}</h2>
<p>${question.description}</p>
</div>`;
};

export const renderQuestions = (containerElement, questions) => {
  try {
    if (!questions?.length) {
      throw new Error("Questions data are not available");
    }

    const questionsElementsAsString = `<div>${questions
      .map((question) => {
        return renderQuestionElement(question);
      })
      .join("")}</div>`;

    containerElement.innerHTML = questionsElementsAsString;
  } catch (error) {
    console.error(error);
    containerElement.innerHTML = `<p>Error: ${JSON.stringify(
      error.message
    )}</p>`;
  }
};
