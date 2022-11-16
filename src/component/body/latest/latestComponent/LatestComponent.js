import "./latestComponent.css";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const LatestComponent = (demo) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(demo);
  return (
    <Container className="slider_container  ">
      <h2 className=" mt-5 title"> {demo.demo[0].title}</h2>
      <p>{demo.demo[0].titleDes}</p>
      <Slider {...settings} className="d-flex  mx-4">
        {demo.demo.map((demo) => {
          return (
            <div className="card-continer">
              <Image src={demo.img} className="slid-img  img-fluid" />
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
