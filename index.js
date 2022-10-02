import { dataQuestions } from "./data/questions.js";
import { renderQuestions } from "./features/question.js";

const questionsContainerElement = document.getElementById(
  "questions-container"
);

const main = () => {
  console.log({ dataQuestions });

  renderQuestions(questionsContainerElement, dataQuestions);
};

main();
