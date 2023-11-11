import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSclie';
import getErrorMessageFromRTKQueryError from '../utils';

export const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (error) {
    return <div>{getErrorMessageFromRTKQueryError(error)}</div>;
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
