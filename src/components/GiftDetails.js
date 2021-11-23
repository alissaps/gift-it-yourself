import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import deleteImg from "./assets/delete-icon.png";
import editImg from "./assets/edit-icon.png";
import "./GiftDetails.css";

function GiftDetails() {
  const [giftData, setGiftData] = useState({
    "_id": "",
    "title": "",
    "description": "",
    "skillLevel": "",
    "price": "",
    "supplies": [],
    "instructions": [],
    "imageUrl": "",
    "video": ""
  });
  const params = useParams();

//   useEffect(() => {
//     axios
//       .get(`https://ironrest.herokuapp.com/gift/${params.id}`)
//       .then((response) => {
//         setGiftData(response.data);
//         console.log(response.data, giftData)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

useEffect(() => {
    async function fetchGift () {
    try {
    const response = await axios.get(`https://ironrest.herokuapp.com/gift/${params.id}`); 
    setGiftData({...response.data})
    } catch(err) {
    console.log(err)}
    }
    
    fetchGift ()
    }, [])


  return (
    <>
      <Navbar />
      <main className="mt-5 gift-container">
        <div className="icons">
          <img src={editImg} alt="edit" />
          <img src={deleteImg} alt="delete" />
        </div>

        <section className="mt-5 d-flex align-items-center flex-column" id="gift-detail">
          <img src={giftData.imageUrl} alt="gift" />
          <h2 className="mt-4">{giftData.title}</h2>
          <p className="mt-4 gift-text-description">
          {giftData.description}
          </p>
          <p className="text-bold bold">
          Skill Level: {giftData.skillLevel}
            <br />
            Price: {"$".repeat(Number(giftData.price))}{" "}
          </p>
        </section>

        <hr />

        <section id="supplies-container">
          <h3>Supplies</h3>
          <ul>
          {giftData.supplies.map((currentSupply) => {
              return <li key={currentSupply} className="mt-4 text-description">{currentSupply}</li>
          })}
         </ul>
        </section>

        <hr />

        <section className="mb-5" id="instructions-container">
          <h3>Instructions</h3>
          <ol>
          {giftData.instructions.map((currentInstruction) => {
              return <li key={currentInstruction} className="mt-4 text-description">{currentInstruction}</li>
          })}
         </ol>
        </section>
      </main>
    </>
  );
}

export default GiftDetails;
