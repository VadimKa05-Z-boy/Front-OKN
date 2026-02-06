import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaEnvelope } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';

const NavbarForHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Nav variant='underline' className="justify-content-end">
        <Nav.Item>
          <Nav.Link as={Link} to="/home">Главная</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/catalog">Каталог</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/map">Карта</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/investor">Инвестору</Nav.Link>
        </Nav.Item>
        <Button variant="outline-primary" onClick={handleShow} className="ms-3">
          <FaEnvelope className="me-2" />
          Обратная связь
        </Button>
      </Nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Обратная связь</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formForName">
              <Form.Label>ФИО</Form.Label>
              <Form.Control type="text" placeholder="Фамилия, Имя, Отчество" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formForPhone">
              <Form.Label>Телефон</Form.Label>
              <Form.Control type="tel" placeholder="8 (000) 000-00-00" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formForMail">
              <Form.Label>Почта</Form.Label>
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formForMessage">
              <Form.Label>Сообщение</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCheckboxPersonalDate">
              <Form.Check type="checkbox" label="Соглашаюсь на обработку персональных данных" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCheckboxPersonaMailing">
              <Form.Check type="checkbox" label="Соглашаюсь на получение информационной рассылки" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavbarForHeader;