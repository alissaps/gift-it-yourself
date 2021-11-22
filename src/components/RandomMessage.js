import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import redLineImg from "./assets/red-line.png";
import randomImg from "./assets/message-img.jpeg";
import "./RandomMessage.css";
import Navbar from "./Navbar";
import Loading from "./Loading";

function RandomMessage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="random">
            <section id="main-img">
              <div className="random-black-line"></div>
              <img className="random-img" src={randomImg} alt="gift-wrapped" />
              <img
                className="red-line random-image-position"
                src={redLineImg}
                alt="red line"
              />
            </section>

            <section id="main-text">
              <img
                className="red-line random-text-position"
                src={redLineImg}
                alt="red line"
              />
              <h1 className="pb-4">
                Having trouble writing a cool{" "}
                <span className="red-text">message?</span>
              </h1>
              <Link to="/giftslist">
                <button
                  type="button"
                  className="text btn btn-dark rounded-pill"
                >
                  click here to generate a fresh message!
                </button>
              </Link>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default RandomMessage;
