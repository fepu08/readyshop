import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../slices/productsApiSclie';
import { getErrorMessageFromRTKQueryError } from '../utils';
import Loader from '../components/Loader';
import ProductDetails from '../components/ProductDetails';
import Message from '../components/Message';

const ProductScreen = () => {
  const { id: productId } = useParams();

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId as string);

  let fallbackElement;
  if (isLoading) {
    fallbackElement = <Loader />;
  } else if (!productId) {
    fallbackElement = (
      <Message variant="danger">
        <span>404 - Product id is missing</span>
      </Message>
    );
  } else if (error) {
    fallbackElement = (
      <Message variant="danger">
        <span>{getErrorMessageFromRTKQueryError(error)}</span>
      </Message>
    );
  } else if (!product) {
    fallbackElement = (
      <Message variant="danger">
        <span>No product with id: ${productId}</span>
      </Message>
    );
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {fallbackElement || <ProductDetails product={product!} />}
    </>
  );
};

export default ProductScreen;
