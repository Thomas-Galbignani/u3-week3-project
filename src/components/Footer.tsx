
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
      
        <Row className="mb-3">
          <Col className="d-flex align-items-center">
            <span>Italia</span>
            <Nav.Link href="#" className="text-light ms-3">English (UK)</Nav.Link>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <p className="small mb-0">Copyright © 2024 Apple Inc. Tutti i diritti riservati.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Nav className="flex-wrap">
              <Nav.Link href="#" className="text-light me-3 p-0">Condizioni dei servizi internet</Nav.Link>
              <Nav.Link href="#" className="text-light me-3 p-0">Apple Music e privacy</Nav.Link>
              <Nav.Link href="#" className="text-light me-3 p-0">Avvisi sui cookie</Nav.Link>
              <Nav.Link href="#" className="text-light me-3 p-0">Supporto</Nav.Link>
              <Nav.Link href="#" className="text-light p-0">Feedback</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;