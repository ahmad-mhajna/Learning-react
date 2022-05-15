import Q1Input from "./Q1Input";
import Q1Title from "./Q1Title";
import Q2Input from "./Q2Input";
import Q2Title from "./Q2Title";
import QuizTitle from "./QuizTitle";

function Quiz() {
  return (
    <div>
      <QuizTitle />
      <Q1Title />
      <Q1Input />
      <Q2Title />
      <Q2Input />
    </div>
  );
}
export default Quiz;
