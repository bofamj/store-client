import "./hero.css";
//*bootstrap element
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

//*Image
import top_img from "../../.././assets/images/baner-right-image-01.jpg";
import top_img_left from "../../.././assets/images/baner-right-image-02.jpg";
import bottom_img from "../../.././assets/images/baner-right-image-03.jpg";
import bottom_img_left from "../../.././assets/images/baner-right-image-04.jpg";
import hero_img from "../../.././assets/images/left-banner-image.jpg";
import LatestClothes from "../latest/LatestClothes";
import Explore from "../explore/Explore";

const Hero = () => {
  return (
    <Container>
      <Row className=" hero_section">
        <Col className="hero-img-container" md={6}>
          <div className="hero_img_text">
            <h1 className="pb-3 mx-5 ">We Are Hexashop</h1>
            <h6 className="mx-5"> Awesome, clean & creative HTML5 Template</h6>
            <botton
              type="button"
              className="btn btn-outline-light mx-5 mt-3  pt-2 pb-2 bx-3 pe-3 rounded-0"
            >
              Purchese Now!
            </botton>
          </div>
          <Image src={hero_img} className="img-fluid hero_img" />
        </Col>
        <Col className="img-container-sec " s={12}>
          <Row className="img-container-row ">
            <Col className="img-container" s={12}>
              <Image src={top_img} className="img-fluid  categorys_img" />
            </Col>
            <Col className="img-container" s={12}>
              <Image src={top_img_left} className="img-fluid categorys_img" />
            </Col>
          </Row>
          <Row className="img-container-row ">
            <Col className="img-container" s={12}>
              <Image src={bottom_img} className="img-fluid categorys_img" />
            </Col>
            <Col className="img-container" s={12}>
              <Image
                src={bottom_img_left}
                className="img-fluid categorys_img"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <hr className="naveLine" />
      <LatestClothes />
      <hr className="naveLine" />
      <Explore />
    </Container>
  );
};

export default Hero;
