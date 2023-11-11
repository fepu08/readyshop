import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productsApiSclie';
import getErrorMessageFromRTKQueryError from '../utils';

const ProductScreen = () => {
  const { id: productId } = useParams();

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId as string);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (!productId) {
    return <h2>404 - Product id is missing</h2>;
  } else if (error) {
    return <div>{getErrorMessageFromRTKQueryError(error)}</div>;
  }
  if (!product) {
    return <h1>Oh no! There is no product with id: {productId}</h1>;
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <>
        <Row>
          <Col lg={6}>
            <Image
              src={product.image.includes('unsplash') ? product.image + `/900x900?sig=${product._id}` : product.image}
              alt={product.name}
              fluid
            />
          </Col>
          <Col lg={3}>
            <ListGroup variant="flush" className="h-100">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                <strong>Description:</strong> {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                    onClick={() => console.log('added to cart')}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    </>
  );
};

export default ProductScreen;
