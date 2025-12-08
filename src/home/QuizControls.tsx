import { Button } from "@/components/ui/button";

export default function QuizControls() {


  const handleNext = ()=>{

  }
  return (
    <div className="flex justify-between mt-4 space-x-4">
      <Button> previous </Button>
      <Button onClick={handleNext}> next </Button>
    </div>
  );
}
