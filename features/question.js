export const renderQuestions = (containerElement, questions) => {
  const questionsElements = `<div>${JSON.stringify(questions)}</div>`;

  containerElement.innerHTML = questionsElements;
};
