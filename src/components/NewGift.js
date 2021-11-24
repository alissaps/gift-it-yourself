import "./NewGift.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import newGiftImg from "./assets/newgift-image.jpeg";
import redLineImg from "./assets/red-line.png";
import toast, { Toaster } from "react-hot-toast";

function Forms() {
  const navigate = useNavigate();
  const [newGifts, setnewGifts] = useState({
    title: "",
    description: "",
    skillLevel: "",
    price: "",
    supplies: [],
    instructions: [],
    imageUrl: "",
  });

  function handleChange(event) {
    setnewGifts({
      ...newGifts,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setnewGifts({
      ...newGifts,
      supplies: [...newGifts.supplies],
      instructions: [...newGifts.instructions],
    });
 
    if (newGifts.title === "" || newGifts.description === "" || newGifts.skillLevel === "" || newGifts.price === "" || newGifts.supplies.length === 0 || newGifts.instructions.length === 0 || newGifts.imageUrl === "") {
      toast.error("Please fill up all fields");
      return;
    } else {
      newGifts["supplies"] = newGifts["supplies"].split("\n");
      newGifts["instructions"] = newGifts["instructions"].split("\n");
    }

    try {
      await axios.post("https://ironrest.herokuapp.com/gift", newGifts);
      navigate("/giftslist");
    } catch (error) {
      console.error(error.response.data);
    }
  }

  return (
    <div className="mb-5">
      <Navbar />

      <div className="boxForm mt-5">
        <div id="newgift-img">
          <div className="newgift-black-line"> </div>
          <img className="img" src={newGiftImg} alt="new-gift" />
          <img
            className="red-line form-image-position"
            alt="redline"
            src={redLineImg}
          />
        </div>

        <form className="forms">
          <h1 className="mt-5 mb-4">New Gift</h1>
          <input
            required
            id="title"
            value={newGifts.title}
            type="text"
            onChange={handleChange}
            name="title"
            placeholder="Title"
            maxLength="25"
          />

          <input
            required
            id="description"
            value={newGifts.description}
            type="text "
            onChange={handleChange}
            name="description"
            placeholder="Brief Description"
            maxLength="80"
          />

          <select
            required
            htmlFor="skillLevel"
            id="skill_level"
            value={newGifts.skillLevel}
            type="text"
            onChange={handleChange}
            name="skillLevel"
          >
            <option value="" disabled defaultValue hidden>
              Skill Level
            </option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <select
            required
            htmlFor="price"
            id="price"
            value={newGifts.price}
            type="text"
            onChange={handleChange}
            name="price"
          >
            <option value="" disabled defaultValue hidden>
              Price
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <textarea
            required
            id="supplies"
            value={newGifts.supplies}
            type="text"
            onChange={handleChange}
            name="supplies"
            placeholder="Supplies"
          />

          <textarea
            required
            id="instructions"
            value={newGifts.instructions}
            type="text"
            onChange={handleChange}
            name="instructions"
            placeholder="Instructions"
          />

          <input
            required
            id="imageUrl"
            value={newGifts.imageUrl}
            type="text"
            onChange={handleChange}
            name="imageUrl"
            placeholder="Image"
          />

          <button
            className="mt-3 text-center text btn-effect btn btn-dark rounded-pill"
            type="submit"
            onClick={handleSubmit}
          >
            add new gift
          </button>
        </form>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default Forms;
