import { useEffect, useState } from "react";
import redLineImg from "./assets/red-line.png";
import randomImg from "./assets/message-img.jpeg";
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
    console.log(messageData, messageData.messages);
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
          <div className="random-black-line"></div>
          <img className="random-img" src={randomImg} alt="gift-wrapped" />
          <img
            className="red-line random-image-position"
            src={redLineImg}
            alt="red line"
          />
        </section>

        <section className="main-text">
          <img
            className="red-line random-text-position"
            src={redLineImg}
            alt="red line"
          />
          {click ? (
            <p className="cursive"> {currentMessage} </p>
          ) : (
            <h1 className="pb-4">
              Having trouble writing a cool{" "}
              <span className="red-text">message?</span>
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
