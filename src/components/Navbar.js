import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-menu">
        <li>
          <Link to="/">Gift It Yourself</Link>
        </li>
        <div className="nav-font">
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
        </div>
        <li>
          <Link to="/contact">
            <button type="button" className="text btn btn-dark rounded-pill">
              Contact us
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
