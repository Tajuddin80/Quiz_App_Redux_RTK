import { Button } from "@/components/ui/button";
import { nextQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch } from "@/redux/hook";

export default function QuizControls() {
const dispatch = useAppDispatch()

  const handleNext = ()=>{
  dispatch(nextQuestion())
  }
  return (
    <div className="flex justify-between mt-4 space-x-4">
      <Button> previous </Button>
      <Button onClick={handleNext}> next </Button>
    </div>
  );
}
