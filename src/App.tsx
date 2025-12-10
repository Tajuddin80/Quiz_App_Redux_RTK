import "./App.css";
import Question from "./home/Question";
import QuizSummery from "./home/QuizSummery";
import { useAppSelector } from "./redux/hook";

function App() {
  const {quizCompleted} =useAppSelector((state)=> state.quiz)
  return (
    <>
    <h1 className="text-center text-6xl my-10">Quiz App</h1>
      {! quizCompleted ? <Question></Question> : <QuizSummery></QuizSummery>}
    </>
  );
}

export default App;
