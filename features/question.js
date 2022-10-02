export const renderQuestionElement = (question) => {
  return `<div class="question">
<h2>${question.title}</h2>
<p>${question.description}</p>
</div>`;
};

export const renderQuestions = (containerElement, questions) => {
  try {
    if (!questions?.length) {
      throw new Error("Sorry, there is no question yet");
    }

    const questionsElementsAsString = `<div>${questions
      .map((question) => {
        return renderQuestionElement(question);
      })
      .join("")}</div>`;

    containerElement.innerHTML = questionsElementsAsString;
  } catch (error) {
    containerElement.innerHTML = `<p>${error.message}</p>`;
  }
};
