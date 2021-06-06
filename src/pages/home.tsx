import React from "react";
import SearchResultList from "../components/search-result";

const HomeComp = () => {
  const searhApiCall = () => {
    //   fetch(
    //     `https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${searchKey}&site=stackoverflow`
    //   )
    //     .then((response) => response.json())
    //     .then((res) => {
    //       console.log(res);
    //     });
  };

  return (
    <section>
      <SearchResultList data={[]} />
    </section>
  );
};

export default HomeComp;
