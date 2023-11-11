import { useState } from 'react';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../models/Product';
import { addToCart } from '../slices/cartSlice';
import { getFormattedNumberAsString } from '../utils';

type ProductDetailsProps = {
  product: ProductType;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const price = getFormattedNumberAsString(product.price);
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

  return (
    <>
      <Row>
        <Col lg={4} xl={6}>
          <Image
            src={product.image.includes('unsplash') ? product.image + `/900x900?sig=${product._id}` : product.image}
            alt={product.name}
            fluid
          />
        </Col>
        <Col lg={4} xl={3}>
          <ListGroup variant="flush" className="h-100">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${price}</ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={4} xl={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Select
                        value={qty}
                        style={{ paddingRight: '0' }}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
