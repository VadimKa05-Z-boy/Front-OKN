import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarForHeader from "./NavbarForHeader";
import OffcanvasForHeader from "./OffcanvasForHeader";
import LogoKaluga from "../../../assets/LogoKaluga.svg";

const Header = () => {
  return(
    <Container className="py-3 border-bottom">
      <Row className="align-items-center">
        <Col lg={4}>
          <div className="d-flex align-items-center">
            <img 
              src={LogoKaluga} 
              alt="Логотип ОКН" 
              className="me-2"
              style={{ width: '40px', height: '50px' }}
            />
            <h4 className="mb-0">Объекты<br />культурного наследия</h4>
          </div>
        </Col>
        <Col lg={6} className="d-none d-lg-block">
          <NavbarForHeader />
        </Col>
        <Col className="d-lg-none text-end">
          <OffcanvasForHeader />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;