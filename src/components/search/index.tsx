import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

export type SearchCompProps = {
  getSearchKey: Function;
};
const SearchComp = (props: SearchCompProps) => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [showHelp, SetShowhelp] = useState<boolean>(true);
  const serRef = useRef<HTMLInputElement | null>(null);
  const getSearchKey = props.getSearchKey;
  const clickHander = () => {
    SetShowhelp(true);
  };
  const blurHander = () => {
    SetShowhelp(false);
  };
  useEffect(() => {
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
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>
        <input
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
          <ul>
            <li>[tag]</li>
            <li>answers</li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default SearchComp;
