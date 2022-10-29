import "./App.css";
import Nave from "./component/heder/nave/Nave";
import Hero from "./component/body/hero/Hero";
import LatestClothes from "./component/body/latest/LatestClothes";
import Explore from "./component/body/explore/Explore";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
      <Nave />
      <hr className="naveLine" />
      <Hero />
      <hr className="naveLine" />
      <LatestClothes />
      <hr className="naveLine" />
      <Explore />

      <Footer />
    </>
  );
}

export default App;
