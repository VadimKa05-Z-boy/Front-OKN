import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';

const OptionsHeader = () => {
  return(
    <Container className='OptionForList mb-4'>
      <Row className="align-items-center">
        <Col xs={12} sm={6} lg={8}>
          <h1 className="mb-0">Каталог объектов</h1>
        </Col>
        <Col xs={6} sm={3} lg={2} className="mb-2 mb-sm-0">
          <NavDropdown title="Сортировка" align="end">
            <NavDropdown.Item href="/">Последние опубликованные</NavDropdown.Item>
            <NavDropdown.Item href="/">По площади (по убыванию)</NavDropdown.Item>
            <NavDropdown.Item href="/">По площади (по возрастанию)</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col xs={6} sm={3} lg={2}>
          <Button variant="outline-primary" className="d-lg-none w-100 mb-2">Фильтры</Button>
          <Button variant="outline-secondary" className="w-100">На карте</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OptionsHeader;