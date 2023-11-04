import { Col, Row } from 'react-bootstrap';
import products from '../mocks/products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Games</h1>
      <Row className="d-flex flex-wrap">
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="my-3">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
