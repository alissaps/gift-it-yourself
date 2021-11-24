import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <Link className="nav-logo" to="/">
      <p className="nav-logo">Gift It Yourself</p>
      </Link>
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/giftslist">Gifts</Link>
          </li>
          <li>
            <Link to="/newgifts">New Gifts</Link>
          </li>
          <li>
            <Link to="/random">Random message</Link>
          </li>
        </ul>
        <Link to="/contact">
          <button type="button" className="text btn-effect btn btn-dark rounded-pill">
            Contact us
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
