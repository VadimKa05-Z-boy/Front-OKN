import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { FaBars } from 'react-icons/fa';

const OffcanvasForHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        <FaBars />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Меню</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/home" onClick={handleClose}>Главная</Nav.Link>
            <Nav.Link as={Link} to="/catalog" onClick={handleClose}>Каталог</Nav.Link>
            <Nav.Link as={Link} to="/map" onClick={handleClose}>Карта</Nav.Link>
            <Nav.Link as={Link} to="/investor" onClick={handleClose}>Инвестору</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={handleClose}>Контакты</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasForHeader;