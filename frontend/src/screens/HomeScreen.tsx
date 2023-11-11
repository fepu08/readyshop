import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSclie';
import getErrorMessageFromRTKQueryError from '../utils';
import Loader from '../components/Loader';
import Message from '../components/Message';

export const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return (
      <Message variant="danger">
        <p>{getErrorMessageFromRTKQueryError(error)}</p>
      </Message>
    );
  }

  return (
    <>
      <h1>Latest Games</h1>
      <Row className="d-flex flex-wrap">
        {products &&
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="my-3">
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
