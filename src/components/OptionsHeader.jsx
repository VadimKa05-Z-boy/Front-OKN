import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';

const OptionsHeader =()=>{
    return(
        <Container className='OptionForList'>
            <Col >
                <Row className="align-items-center">
                    <Col sm={3} lg={8}><h1>Каталого объектов</h1></Col>
                    <Col sm={2} lg={2}>
                        <NavDropdown title='Сорт.'>
                            <NavDropdown.Item href="/">Последние опубликованные</NavDropdown.Item>
                            <NavDropdown.Item href="/">По площади(по убыванию)</NavDropdown.Item>
                            <NavDropdown.Item href="/">По площади(по возрастанию)</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col sm={2} lg={2}>
                        <Button className="d-lg-none">Фильтры</Button>       
                        <Button>На карте</Button>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default OptionsHeader