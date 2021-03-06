import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import deleteImg from "../../components/assets/delete-icon.png";
import editImg from "../../components/assets/edit-icon.png";
import "./GiftDetails.css";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

function GiftDetails() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [giftData, setGiftData] = useState({
    _id: "",
    title: "",
    description: "",
    skillLevel: "",
    price: "",
    supplies: [],
    instructions: [],
    imageUrl: "",
    video: "",
  });
  const params = useParams();

  useEffect(() => {
    async function fetchGift() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/gift/${params.id}`
        );
        setGiftData({ ...response.data });
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    fetchGift();
  }, [params.id]);

  async function handleDelete(id) {
    try {
      await axios.delete(`https://ironrest.herokuapp.com/gift/${id}`);
      navigate("/giftslist");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <main className="mt-5 gift-container">
            <div className="icons">
              <Link className="edit-icon" to={`/editgift/${giftData._id}`}>
                <img type="button" src={editImg} alt="edit" />
              </Link>

              <Link to={`/editgift/${giftData._id}`}>
                <img className="delete-icon"
                  type="button"
                  onClick={() => handleDelete(giftData._id)}
                  src={deleteImg}
                  alt="delete"
                />
              </Link>
            </div>

            <section
              className="mt-5 d-flex align-items-center flex-column"
              id="gift-detail"
            >
              <img src={giftData.imageUrl} alt="gift" onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/996/notfound.png"}}/>
              <h2 className="mt-4">{giftData.title}</h2>
              <p className="mt-4 gift-text-description">
                {giftData.description}
              </p>
            </section>

            <hr />

            <section id="supplies-container">
              <h3>Supplies</h3>
              <ul>
                {giftData.supplies.map((currentSupply, index) => {
                  return (
                    <li key={index} className="mt-4 text-description">
                      {currentSupply}
                    </li>
                  );
                })}
              </ul>
            </section>

            <hr />

            <section className="mb-5" id="instructions-container">
              <h3>Instructions</h3>
              <ol>
                {giftData.instructions.map((currentInstruction, index) => {
                  return (
                    <li key={index} className="mt-4 text-description">
                      {currentInstruction}
                    </li>
                  );
                })}
              </ol>
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default GiftDetails;
