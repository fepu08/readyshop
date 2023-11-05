import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios, { AxiosResponse } from 'axios';
import { ProductType } from '../models/Product';
import Product from '../components/Product';

export const HomeScreen = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = (await axios.get('http://localhost:5000/api/products')) as AxiosResponse<ProductType[]>;
      setProducts(data);
    };

    fetchProducts();
  }, []);

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
