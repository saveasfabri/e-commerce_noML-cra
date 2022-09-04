import CartWidget from "./CartWidget";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
          <Link to = "/">{ <h2 className="logoNavbar">!ML</h2> }</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <NavDropdown
                title="Options"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                    Category 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Category 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                    Category 3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Acá incorporamos a CartWidget en nuestro render */}
      <CartWidget />
    </div>
  );
}
export default NavBar;