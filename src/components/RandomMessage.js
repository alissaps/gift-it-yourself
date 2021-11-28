import { useEffect, useState } from "react";
import redLineImg from "./assets/red-lines1.png";
import randomImg from "./assets/message-img.jpeg";
import curveImg from "./assets/curve-line.png";
import strokeImg from "./assets/stroke2.png";
import "./RandomMessage.css";
import Navbar from "./Navbar";
import axios from "axios";

function RandomMessage() {
  const [messageData, setMessageData] = useState([]);
  const [click, setClick] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
 
  useEffect(() => {
    axios
      .get(`https://ironrest.herokuapp.com/random-message`)
      .then((response) => {
        setMessageData([...response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleClick() {
    setClick(true);
    setCurrentMessage(
      messageData[0].messages[
        Math.round(Math.random() * (messageData[0].messages.length - 1))
      ]
    );
  }

  return (
    <>
      <Navbar />
      <div className="random">
        <section className="main-img">
          {/* <div className="random-black-line"></div> */}
          <img className="random-img" src={randomImg} alt="gift-wrapped" />
          <img
            className="red-line random-image-position"
            src={redLineImg}
            alt="red strokes"
          />
        </section>

        <section className="main-text">
        <img
            className="curve-line random-line-position"
            src={curveImg}
            alt="red circle"
          />
          <img
            className="stroke random-text-position"
            src={strokeImg}
            alt="red circle"
          />
          {click ? (
            <p className="cursive"> {currentMessage} </p>
          ) : (
            <h1 className="pb-4">
              Having trouble writing a cool{" "}
              <span className="small-red-text">message?</span>
            </h1>
          )}

          <button
            onClick={handleClick}
            type="button"
            className="mt-3 text btn-effect btn btn-dark rounded-pill"
          >
            click here to generate a fresh message!
          </button>
        </section>
      </div>
    </>
  );
}

export default RandomMessage;
