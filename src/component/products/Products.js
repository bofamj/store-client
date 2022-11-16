import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import demo from "../body/latest/demo";
import Product from "./Product";

const Products = () => {
  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={3}>
        {demo.map((products) => (
          <Col>
            <Product product={products} key={products.index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
