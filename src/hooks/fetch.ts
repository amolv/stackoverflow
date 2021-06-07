import { useEffect, useReducer, useRef } from "react";
import { searchdata } from "../components/search-result/index.stories";
type cacheType = {
  [query: string]: {};
};
type initialStateType = {
  status: string;
  error?: string | null;
  data?: cacheType | [] | null;
};
type Actions =
  | { type: "FETCHING" }
  | { type: "FETCHED"; payload: cacheType }
  | { type: "FETCH_ERROR"; payload: string };

const useFetch = (searchString: string | null) => {
  console.log("searchString", searchString);

  const cache = useRef<any>({});
  const initialState: initialStateType = {
    status: "idle",
    error: null,
    data: [],
  };
  const [state, dispatch] = useReducer((state: initialStateType, action: Actions) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "fetching" };
      case "FETCHED":
        return { ...initialState, status: "fetched", data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  }, initialState);

  console.log("state", state);

  useEffect(() => {
    let cancelFetch = false;
    if (!searchString) return;

    const fetchQuestions = async () => {
      dispatch({ type: "FETCHING" });
      if (cache.current[searchString]) {
        const data = cache.current[searchString];
        dispatch({ type: "FETCHED", payload: data });
      } else {
        try {
          // const response = await fetch(
          //   `https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${searchString}&site=stackoverflow`
          // );
          // const data = await response.json();
          const data = searchdata;
          cache.current[searchString] = data;
          if (cancelFetch) return;
          dispatch({ type: "FETCHED", payload: data });
        } catch (error) {
          if (cancelFetch) return;
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    };
    fetchQuestions();
    return () => {
      cancelFetch = true;
    };
  }, [searchString]);
  console.log("state", state);

  return state;
};

export default useFetch;
