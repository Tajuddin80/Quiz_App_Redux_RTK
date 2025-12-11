import "./App.css";
import Question from "./home/Question"
import { QuizSummary } from "./home/QuizSummery";
import { useAppSelector } from "./redux/hook";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);

  return (
    <>
      <h1 className="text-center text-9xl my-12">Quiz App</h1>
      {!quizComplete ? <Question /> : <QuizSummary />}
    </>
  );
}

export default App;