import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Nav_() {
    return (
        <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">

            <Container className='container' style={{ height: '75px', fontSize: '23px' }}>
                <Navbar.Brand href="/" style={{fontSize : '30px', fontWeight : 'bold'}}>PTduo</Navbar.Brand>
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
                        <Nav.Link href="/">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}