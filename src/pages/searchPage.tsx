import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchResultList from "../components/search-result";
import useFetch from "../hooks/fetch";

const SearchPageComp = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchString = query.get("q");
  const { status, data, error } = useFetch(searchString);

  return (
    <section>
      <div className="row">
        <div className="col-1"></div>
        <div className="col p-0" style={{ borderLeft: "1px solid #d6d9dc" }}>
          <div className="container-fluid">
            <div className="row mt-4">
              <div className="col">
                <h1>Search Results</h1>
              </div>
              <div className="col text-right">
                <Link to="">Search Tips</Link>{" "}
                <Link className="btn btn-sm btn-primary" to="/questions/ask">
                  Ask Questions
                </Link>
              </div>
            </div>
            <p className="">Result for {searchString}</p>
            <div className="row">
              <div className="col"> results</div>
              <div className="col text-right">
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-outline-dark">
                    Relevance
                  </button>
                  <button type="button" className="btn btn-outline-dark">
                    Newest
                  </button>
                  <button type="button" className="btn btn-outline-dark">
                    More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {error && <p>{error}</p>}
          {status === "fetching" && <p>Loading......</p>}
          {status === "fetched" && <SearchResultList data={data} />}
        </div>
        <div className="col-2"></div>
      </div>
    </section>
  );
};

export default SearchPageComp;
