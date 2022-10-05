import "./App.css";
import Nave from "./component/heder/nave/Nave";
import Hero from "./component/body/hero/Hero";

function App() {
  return (
    <>
      <Nave />
      <hr className="naveLine" />
      <Hero />
    </>
  );
}

export default App;
