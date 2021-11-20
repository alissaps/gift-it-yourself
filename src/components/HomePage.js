import homepageImg from "./assets/homepage.jpeg";
import "./HomePage.css"

function HomePage() {
  return (
    <div className="homepage">
      <main className="d-flex justify-content-center align-items-center">
        <section>
          <div>linha vermelha</div>
          <h1>Have <span className="red-text">gift</span> ideas for this <span className="red-text">Xmas</span></h1>
          <p className="text">put a little of yourself in your gifts. here you will find great ideas for gifting your loved ones in a creative and different way. try to get your hands dirty and be amazed. gift it yourself!</p>
          <button type="button" className="text btn btn-dark rounded-pill">click here</button>
        </section>

        <section className="d-flex justify-content-center align-items-center ">
          <img className="w-25" src={homepageImg} alt="gift-wrapped" />
          <div className="black-line"></div>
          <div>linha vermelha</div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
