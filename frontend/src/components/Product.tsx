import React from 'react';
import { Card } from 'react-bootstrap';
import { Product as ProductItem } from '../models/Product';
import { Link } from 'react-router-dom';

type ProductProps = {
  product: ProductItem;
};

const Product = ({ product }: ProductProps) => {
  return (
    <Card className='p-3 rounded h-100'>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={
            product.image ||
            `https://source.unsplash.com/random/450x450?sig=${product._id}`
          }
          variant='top'
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
