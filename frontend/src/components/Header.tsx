import { Badge, Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Header = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  console.log(cartItems);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ReadyShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: 'auto' }}>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart />
                  &nbsp;Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((acc, curr) => acc + curr.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaShoppingCart />
                  &nbsp;Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
