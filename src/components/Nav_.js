import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useLoginState } from "../store/StateLogin";

export default function Nav_() {
  const loginId = useLoginState();
  
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container
        className="container"
        style={{ height: "75px", fontSize: "23px" }}
      >
        <Navbar.Brand
          href="/"
          style={{ fontSize: "36px", fontWeight: "bold", marginRight: "30px" }}
        >
          PTduo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ marginRight: "20px" }}>Home</Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              style={{ marginRight: "20px" }}
            >
              <NavDropdown.Item href="/">Action</NavDropdown.Item>
              <NavDropdown.Item href="/">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            {loginId === "" ? (
              <Nav.Link href="/login" style={{ marginLeft: "20px" }}>login</Nav.Link>
            ) : (
              <span style={{ marginLeft: "20px" }}>환영합니다. {loginId}님!</span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
