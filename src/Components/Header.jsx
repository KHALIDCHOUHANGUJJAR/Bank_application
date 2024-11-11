import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3 p-3 sticky-top"
        >
          <Container fluid>
            <Navbar.Brand href="/" className="text-7xl font-bold text-blue-400">
              BANKSTORE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex items-center justify-center gap-6 flex-grow text-xl font-bold pe-3">
                  <NavLink
                    to="/"
                    className="no-underline text-black hover:text-blue-500"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/Balance"
                    className="no-underline text-black hover:text-blue-500"
                  >
                    Balance
                  </NavLink>
                  <NavLink
                    to="/Contact"
                    className="no-underline text-black hover:text-blue-500"
                  >
                    Contact
                  </NavLink>
                </Nav>

                <Button variant="primary" className="ms-auto text-white ">
               <NavLink to='/DepositPage' className="text-white no-underline ">   Apply Now</NavLink>
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
