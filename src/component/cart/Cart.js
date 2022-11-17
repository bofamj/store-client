import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import poto06 from "../../assets/images/women-01.jpg";
const Cart = () => {
  return (
    <Container className="mt-5">
      <Row xs={1} md={1} lg={1}>
        <Col className="d-flex flex-md-column flex-sm-column justify-content-between align-items-center flex-lg-row mb-4">
          <Image
            src="https://ichef.bbci.co.uk/news/640/cpsprodpb/10B12/production/_126607386_infinitedfibersclothesexamples.jpg"
            width={200}
            height={200}
            fluid
          />
          <p>name</p>
          <p>50$</p>
          <p>10</p>
          <Button variant="secondary" size="sm">
            Large button
          </Button>
          <p>500$</p>
        </Col>
        <Col className="d-flex flex-md-column flex-sm-column justify-content-between align-items-center flex-lg-row">
          <Image src={poto06} width={200} height={200} fluid />
          <p>name</p>
          <p>50$</p>
          <p>10</p>
          <Button variant="secondary" size="sm">
            Large button
          </Button>
          <p>500$</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
