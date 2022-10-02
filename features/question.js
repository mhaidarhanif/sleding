export const renderQuestions = (containerElement, questions) => {
  const questionsElementsAsString = `<div>${questions
    .map((question) => {
      return `<div>
      <h2>${question.title}</h2>
      <p>${question.description}</p>
    </div>`;
    })
    .join()}</div>`;

  containerElement.innerHTML = questionsElementsAsString;
};
