import "./App.css";
import Nave from "./component/heder/nave/Nave";
import Hero from "./component/body/hero/Hero";
import LatestClothes from "./component/body/latest/LatestClothes";

function App() {
  return (
    <>
      <Nave />
      <hr className="naveLine" />
      <Hero />
      <hr className="naveLine" />
      <LatestClothes />
    </>
  );
}

export default App;
