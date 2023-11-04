import { Card } from 'react-bootstrap';
import { Product as ProductItem } from '../models/Product';
import { Link } from 'react-router-dom';
import Rating from './Rating';

type ProductProps = {
  product: ProductItem;
};

const Product = ({ product }: ProductProps) => {
  return (
    <Card className="p-3 rounded h-100">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image || `https://source.unsplash.com/random/450x450?sig=${product._id}`}
          variant="top"
        />
      </Link>

      <Card.Body className="px-0">
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
