type answerType = {
  answer_id: number;
  score: number;
  body: string;
};
export type AnswersCompProps = {
  answers: answerType[];
};
const AnswersComp = (props: AnswersCompProps) => {
  const answers = props.answers;
  return (
    <>
      {answers?.length && <p>{answers?.length} answers</p> &&
        answers.map((a: answerType) => {
          return (
            <div key={a.answer_id}>
              <div className="row">
                <div className="col-1">{a.score}</div>
                <div className="col">
                  <div dangerouslySetInnerHTML={{ __html: a.body }}></div>
                </div>
              </div>
              <div>
                <button className="btn bnt-sm text-primary">Add a comment</button> |{" "}
                <button className="btn bnt-sm text-primary">Show commnets</button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default AnswersComp;
