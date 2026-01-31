import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaEnvelope } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';

const NavbarForHeader = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Nav variant='underline' defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link href='/'>Главная</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/">Каталог</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/">Карта</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/">Инвестору</Nav.Link>
            </Nav.Item>
            <Button variant="primary" onClick={handleShow}>
                <FaEnvelope className="me-2 " />
            </Button>

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
                            <Form.Control type="tel" patern="[0-9]{1}-[0-9]{3}-[0-9]-[0-9]{2}-[0-9]{2}" placeholder="8 - (000) - 000 - 00 - 00" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formForMail">
                            <Form.Label>Почта</Form.Label>
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formForMessage">
                            <Form.Label>Соощение</Form.Label>
                            <Form.Control as="textarea" row={5} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCheckboxPersonalDate">
                            <Form.Check type="checkbox" label="Соглашаюсь на обработку персональных данных" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCheckboxPersonaMailing">
                            <Form.Check type="checkbox" label="Соглашаюсь на получение рекламной и информационной рассылки" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="primary" type='submit'>
                            Save Changes
                        </Button>
                </Modal.Footer>
            </Modal>
        </Nav>
    )
}

export default NavbarForHeader