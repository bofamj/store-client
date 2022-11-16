import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = (product) => {
  console.log(product.product);
  return (
    <Card className="mb-5">
      <Card.Img variant="top" src={product.product.img} />
      <Card.Body>
        <Card.Title>{product.product.des}</Card.Title>
        <Card.Text>{product.product.des}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
