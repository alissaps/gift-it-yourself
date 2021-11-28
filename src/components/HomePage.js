import homepageImg from "./assets/homepage.jpeg";
import redLinesImg from "./assets/red-lines1.png";
import strokeImg from "./assets/stroke2.png";
import curveImg from "./assets/curve-line.png";
import "./HomePage.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <>
        <Navbar />
        <main className="homepage">
          <section id="main-text">
            <img
              className="stroke text-position"
              src={strokeImg}
              alt="red line"
            />
            <img
              className="curve-line line-position"
              src={curveImg}
              alt="red line"
            />
            <h1 className="headline pb-3">
              Have <span className="red-text">gift</span> ideas <span style={{fontSize: "6.6rem"}}> for this </span> 
              <span className="red-text">Xmas</span>
            </h1>
            <p className="text pb-3">
              Put a little of yourself in your gifts. Here you will find great
              ideas for gifting your loved ones in a creative and different way.
              Try to get your hands dirty and be amazed. Gift it yourself!
            </p>
            <Link to="/giftslist">
              <button
                type="button"
                className="home-button text btn-effect btn btn-dark rounded-pill"
              >
                click here
              </button>
            </Link>
          </section>

          <section id="main-img">
            <div className="margin">
              <img className="img" src={homepageImg} alt="gift-wrapped" />
            </div>
            <img
              className="red-line image-position"
              src={redLinesImg}
              alt="red line"
            />
          </section>
        </main>
      </>
    </>
  );
}

export default HomePage;