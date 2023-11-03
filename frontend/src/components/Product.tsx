import React from 'react';
import { Card } from 'react-bootstrap';
import { Product as ProductItem } from '../models/Product';

type ProductProps = {
  product: ProductItem;
};

const Product = ({ product }: ProductProps) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img
          src={
            product.image ||
            `https://source.unsplash.com/random/450x450?sig=${product._id}`
          }
          variant='top'
        />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </a>
      </Card.Body>
    </Card>
  );
};

export default Product;
