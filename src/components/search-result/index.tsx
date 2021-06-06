export type SearchResultListProps = {
  data: any;
};
const SearchResultList = (props: SearchResultListProps) => {
  return (
    <div>
      {props.data.length}
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  );
};

export default SearchResultList;
