import homepageImg from "./assets/homepage.jpeg";
import "./HomePage.css"

function HomePage() {
  return (
    <>
      <main className="homepage">
        <section id="main-text">
          {/* <div>linha vermelha</div> */}
          <h1 className="pb-3">Have <span className="red-text">gift</span> ideas for this <span className="red-text">Xmas</span></h1>
          <p className="text pb-3">put a little of yourself in your gifts. here you will find great ideas for gifting your loved ones in a creative and different way. try to get your hands dirty and be amazed. gift it yourself!</p>
          <button type="button" className="text btn btn-dark rounded-pill">click here</button>
        </section>

        <section id="main-img">
          <div className="black-line"></div>
          <img className="img" src={homepageImg} alt="gift-wrapped" />
          <div>linha vermelha</div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
