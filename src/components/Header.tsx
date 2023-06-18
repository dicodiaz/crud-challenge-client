import { FC } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navDropdowns from '../data/nav-dropdowns-data';

const Header: FC = () => (
  <Navbar as="header" bg="dark" variant="dark" expand="md" fixed="top" collapseOnSelect>
    <Container fluid>
      <Navbar.Brand as="div">
        <Link to="/">CRUD Challenge</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {navDropdowns.map((navDropdown) => {
            const { id, title, navItems } = navDropdown;
            return (
              <NavDropdown key={id} id={id} title={title} menuVariant="dark">
                {navItems.map((navItem) => {
                  const { linkTo, text } = navItem;
                  return (
                    <Link key={linkTo} to={linkTo}>
                      <NavDropdown.Item as="div">{text}</NavDropdown.Item>
                    </Link>
                  );
                })}
              </NavDropdown>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
