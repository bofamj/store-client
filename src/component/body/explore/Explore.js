import "./explore.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

//*Image
import top_img from "../../.././assets/images/kid-01.jpg";
import top_img_left from "../../.././assets/images/computers&phones.webp";
import home_eletronics from "../../.././assets/images/furnitures.jpg";
import furnitures from "../../.././assets/images/Competitive-home-appliance-industry-of-Pakistan.jpg";

const explore = () => {
  return (
    <Container className="">
      <Row className=" hero_section pb-5">
        <Col className="hero-img-container" md={6}>
          <div className="text-dark">
            <h1>Explore Our Category</h1>
            <p>
              {" "}
              You are allowed to use this HexaShop HTML CSS template. You can
              feel free to modify or edit this layout. You can convert this
              template as any kind of ecommerce CMS theme as you wish.
            </p>
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-quote-left" />
            <p>
              You are not allowed to redistribute this template ZIP file on any
              other website.
            </p>
            <p>
              There are 5 pages included in this HexaShop Template and we are
              providing it to you for absolutely free of charge at our
              TemplateMo website. There are web development costs for us.
            </p>
            <p>
              If this template is beneficial for your website or business,
              please kindly support us a little via PayPal. Please also tell
              your friends about our great website. Thank you.
            </p>
            <botton
              type="button"
              className="btn btn-outline-dark mb-5 mt-3  pt-2 pb-2 bx-3 pe-3 rounded-0"
            >
              Discover More
            </botton>
          </div>
        </Col>
        <Col className="img-container-sec " s={12}>
          <Row className="img-container-row spaicing mb-3">
            <Col className="dec-cont img-container " s={12} bg="dark">
              <Col className="img-container dec-cont " s={12}>
                <Image src={top_img_left} className="img-fluid category-img" />
              </Col>
            </Col>
            <Col className="img-container dec-cont" s={12}>
              <Image src={top_img} className="img-fluid category-img" />
            </Col>
          </Row>
          <Row className="img-container-row spaicing">
            <Col className="img-container dec-cont " s={12}>
              <Image src={home_eletronics} className="img-fluid category-img" />
            </Col>
            <Col className="dec-cont " s={12}>
              <Col className="img-container dec-cont " s={12}>
                <Image src={furnitures} className="img-fluid category-img" />
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default explore;
