export type SearchResultListProps = {
  data: any;
};
const SearchResultList = (props: SearchResultListProps) => {
  return (
    <div className="container">
      <h2>Search Results</h2>
      {props.data.length}
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  );
};

export default SearchResultList;
