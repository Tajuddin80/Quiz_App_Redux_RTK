import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Button } from "@/components/ui/button";
import QuizControls from "./QuizControls";
import { setAnswer } from "@/redux/features/quizSlice";
const Question = () => {
  const dispatch = useAppDispatch();

  const { questions, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];

  const handleAnswerChange = (ans: string) => {
    console.log(ans);
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer: ans }));
  };
  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
        </CardHeader>
        {/* <CardDescription></CardDescription> */}
        <CardContent>
          <div>
            {currentQuestion.options.map((option, index) => (
              <Button
                variant={option === currentAnswer ? "default" : "outline"}
                onClick={() => handleAnswerChange(option)}
                size={"lg"}
                key={index}
                className="w-full mt-3"
              >
                {option}
              </Button>
            ))}
          </div>
          <QuizControls></QuizControls>
        </CardContent>
      </Card>
    </div>
  );
};

export default Question;
