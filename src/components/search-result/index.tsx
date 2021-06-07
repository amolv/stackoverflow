import { Link } from "react-router-dom";
import "./index.scss";

export type SearchResultListProps = {
  data: any;
};
const SearchResultList = (props: SearchResultListProps) => {
  const data = props.data;
  const formatDate = (miliseconds: string) => {
    const d = new Date(parseInt(miliseconds) * 1000);
    const ye = new Intl.DateTimeFormat("en", { year: "2-digit" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `Asked ${mo} ${da} '${ye}`;
  };
  return (
    <>
      <ul id="questionsList">
        {data &&
          data.items &&
          data.items.map((d: any) => {
            return (
              <li key={d.question_id}>
                <div className="stats">
                  <div className="">
                    <div>{d.score}</div> votes
                  </div>
                  {d.is_answered && (
                    <div className={d.is_answered ? "answered" : ""}>
                      <div>{d.answer_count}</div> answer{d.answer_count > 1 ? "s" : ""}
                    </div>
                  )}
                </div>
                <div className="summary">
                  <div>
                    <Link to={`/questions/${d.question_id}`}>Q: {d.title}</Link>
                  </div>
                  <div className="tags">
                    {d.tags.map((t: string) => {
                      return (
                        <Link to={`/questions/tagged/${t}`} className="post-tag">
                          {t}{" "}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="meta">
                    <span>{formatDate(d.creation_date)} </span>
                    <span>
                      by <Link to="/questions">{d.owner.display_name}</Link>
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default SearchResultList;
