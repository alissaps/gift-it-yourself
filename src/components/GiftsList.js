import "./GiftsList.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Loading from "./Loading";

function GiftsList() {
  const [gift, setGift] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ironrest.herokuapp.com/gift")
      .then((response) => {
        setGift([...response.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="container pt-5">
            {gift.map((currentGift) => {
              return (
                <article key={currentGift._id} className="content">
                  <img
                    className="content-img"
                    src={currentGift.imageUrl}
                    alt="Current Gift"
                  />
                  <div className="content-text">
                    <Link className="text-decoration-none" to="/giftdetails">
                      <h2 className="mt-1">{currentGift.title}</h2>
                    </Link>
                    <p className="text-description">
                      {currentGift.description}
                    </p>
                    <p className="text-bold">
                      Price:{" "}
                      {currentGift.price.replace(`${currentGift.price}`, "$")}{" "}
                      <br /> Skill Level: {currentGift.skillLevel}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default GiftsList;
