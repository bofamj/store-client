//*bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//*Images
import logo from ".././../assets/images/white-logo.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="bg-dark">
      <Container>
        <Row className=" hero_section pb-5 text-dark pt-5 pb-5 ">
          <Col className="hero-img-container text-light " md={3}>
            <img src={logo} className="img-fluid pb-3" alt="..."></img>
            <ul classname="">
              <li className="pb-2">
                6501 Collins Ave, Sunny Isles Beach, FL 33160, United States
              </li>
              <li className="pb-2">hexashop@company.com</li>
              <li>010-020-0340</li>
            </ul>
          </Col>
          <Col className=" text-light  pt-md-4  " md={3}>
            <h4 className="pb-3">Shopping &amp; Categories</h4>
            <ul className="  d-flex flex-column p-0">
              <li className="pb-3">Men’s Shopping</li>
              <li className="pb-3">Women’s Shopping</li>
              <li>Kid's Shopping</li>
            </ul>
          </Col>
          <Col className=" text-light  " md={3}>
            <h4 className="pb-3">Useful Links</h4>
            <ul className="  d-flex flex-column p-0">
              <li className="pb-3">Homepage</li>
              <li className="pb-3">About Us</li>
              <li className="pb-3">Help</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col className=" text-light  " md={3}>
            <h4 className="pb-3">Help &amp; Information</h4>
            <ul className="  d-flex flex-column p-0 ">
              <li className="pb-3">Help</li>
              <li className="pb-3">FAQ's</li>
              <li className="pb-3">Shipping</li>
              <li className="pb-3">Tracking ID</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
