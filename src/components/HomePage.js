import homepageImg from "./assets/homepage.jpeg";
import redLineImg from "./assets/red-line.png";
import "./HomePage.css";
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <main className="homepage">
        <section id="main-text">
          <img className="red-line text-position" src={redLineImg} alt="red line"/>
          <h1 className="pb-3">
            Have <span className="red-text">gift</span> ideas for this{" "}
            <span className="red-text">Xmas</span>
          </h1>
          <p className="text pb-3">
            put a little of yourself in your gifts. here you will find great
            ideas for gifting your loved ones in a creative and different way.
            try to get your hands dirty and be amazed. gift it yourself!
          </p>
          <Link to="/giftslist">
          <button type="button" className="text btn btn-dark rounded-pill">
            click here
          </button>
          </Link>
        </section>

        <section id="main-img">
          <div className="black-line"></div>
          <img className="img" src={homepageImg} alt="gift-wrapped" />
          <img className="red-line image-position" src={redLineImg} alt="red line"/>
        </section>
      </main>
    </>
  );
}

export default HomePage;
