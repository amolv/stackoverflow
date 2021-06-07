import { Link, useHistory } from "react-router-dom";
import SearchComp from "../search";

const HeaderComp = () => {
  const history = useHistory();
  const getSearchKey = (searchStr: string) => {
    // go to search page
    if (searchStr) history.push("/search?q=" + searchStr);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          SO
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/teams">
              For Teams
            </Link>
          </li>
        </ul>
        <div style={{ flexBasis: "50%" }}>
          <SearchComp getSearchKey={getSearchKey} />
        </div>
        <div>
          <button className="btn btn-sm btn-outline-success" type="button">
            Login
          </button>{" "}
          <button className="btn btn-sm btn-primary" type="button">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComp;
