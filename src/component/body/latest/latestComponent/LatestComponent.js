import "./latestComponent.css";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";

const LatestComponent = (demo) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  console.log(demo);
  return (
    <Container className="slider_container ">
      <h2 className=" mt-5 title"> {demo.demo[0].title}</h2>
      <p>{demo.demo[0].titleDes}</p>
      <Slider
        {...settings}
        className="d-flex justify-content-center align-items-center"
      >
        {demo.demo.map((demo) => {
          return (
            <div className="card-continer">
              <img src={demo.img} className="slid-img"></img>
              <h1>{demo.des}</h1>
              <spane>{demo.rating}</spane>
              <p>{demo.price}</p>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default LatestComponent;
/* <h2> {demo.title}</h2>
              <p>{demo.titleDes}</p>*/
