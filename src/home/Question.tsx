import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "../redux/hook";
import { Button } from "@/components/ui/button";
import QuizControls from "./QuizControls";
const Question = () => {
  const { questions, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];

  const handleAnswerChange = (ans: string) => {
    console.log(ans);
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
