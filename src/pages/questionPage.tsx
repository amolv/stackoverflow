import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnswersComp from "../components/answers";

type answerType = {
  answer_id: number;
  body: string;
  score: number;
};

const QuestionSinglePageComp = () => {
  const [answers, setAnswers] = useState<answerType[]>();
  let { qId } = useParams<{ qId?: string }>();
  useEffect(() => {
    if (!qId) return;

    fetch(
      `https://api.stackexchange.com/2.2/questions/${qId}/answers?order=asc&sort=activity&site=stackoverflow&filter=!6W.6dPG1m4wz5`
    )
      .then((response) => response.json())
      .then((res) => {
        setAnswers(res.items);
      });
  }, [qId]);
  return (
    <>
      <p>{`Q. id= ${qId}`}</p>
      {answers?.length && (
        <>
          <p>{answers?.length} answers</p>
          <AnswersComp answers={answers} />
        </>
      )}
    </>
  );
};

export default QuestionSinglePageComp;
