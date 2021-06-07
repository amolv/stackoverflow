import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

export type SearchCompProps = {
  getSearchKey: Function;
};
const SearchComp = (props: SearchCompProps) => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [showHelp, SetShowhelp] = useState<boolean>(false);
  const serRef = useRef<HTMLInputElement | null>(null);
  const getSearchKey = props.getSearchKey;
  const clickHander = () => {
    SetShowhelp(true);
  };
  const blurHander = () => {
    SetShowhelp(false);
  };
  useEffect(() => {
    if (!searchKey) return;
    let timer = setTimeout(() => {
      getSearchKey(searchKey);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchKey, getSearchKey]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="searchWraper">
      <div>
        <input
          className="form-control"
          ref={serRef}
          type="text"
          placeholder="Search"
          onFocus={clickHander}
          onBlur={blurHander}
          onChange={changeHandler}
          value={searchKey}
        />
      </div>
      {showHelp && (
        <div className="helper">
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  [tag] <span>search within tag</span>
                </li>
                <li>
                  user:123 <span>search by user</span>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  answers:0 <span>unanswered questions</span>
                </li>
                <li>
                  score:3 <span>posts with 3+ score</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid",
              paddingTop: "10px",
            }}
          >
            <Link to="/questions/ask" className="btn btn-sm btn-secondary">
              Ask a question
            </Link>
            <Link to="/" className="">
              Search help
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchComp;
