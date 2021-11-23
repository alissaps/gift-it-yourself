import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <p className="nav-logo" to="/">Gift It Yourself</p>
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/giftslist">Gift</Link>
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
