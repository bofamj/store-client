import "./App.css";
import Nave from "./component/heder/nave/Nave";
import Hero from "./component/body/hero/Hero";
import LatestClothes from "./component/body/latest/LatestClothes";
import Explore from "./component/body/explore/Explore";

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
      <hr className="naveLine" />
    </>
  );
}

export default App;
