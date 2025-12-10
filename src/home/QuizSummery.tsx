import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
const QuizSummery = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Quiz Summery</CardTitle>
        </CardHeader>
        <CardContent>
          <h3>you got 4 out of 10</h3>
          <Progress value={33} />
          <div>
            <span>40%</span>
            <span>Performance: Good</span>
          </div>

          <div>
            <p>
              <strong>Incorrect answer </strong>
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default QuizSummery;
