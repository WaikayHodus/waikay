import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Nav = () => {
  return (
    <nav className="navbar">
      <h1>LF Cal</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Table">Account</Link>
        {/* <Link to="/Login">Log in</Link> */}
      </div>
    </nav>
  );
};

export default Nav;
