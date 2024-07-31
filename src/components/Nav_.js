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
        <Navbar.Brand href="/" style={{ fontSize: "30px", fontWeight: "bold" }}>
          PTduo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Action</NavDropdown.Item>
              <NavDropdown.Item href="/">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            {loginId === "" ? (
              <>
                <Nav.Link href="/signin">로그인</Nav.Link>
                <Nav.Link href="/signup">회원가입</Nav.Link>
              </>
            ) : (
              <span>환영합니다. {loginId}님!</span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
