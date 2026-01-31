import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OptionsHeader from './components/OptionsHeader';
import OptionsBlock from './components/OptionsBlock';
import Header from './components/Header';

export function App() {
  const objects = [
    {
      nameOKN: 'Главный дом усадьбы Сорокиных',
      addres: 'Калужская область, Мосальский район, дер. Чертень, д. 7а',
      type: 'Памятник',
      square: '403.9',
      conditional: 'Неудовлетворительно',
      badgeOKN: 'выставлен на торги'
    },
        {
      nameOKN: 'Главный дом усадьбы Сорокиных',
      addres: 'Калужская область, Мосальский район, дер. Чертень, д. 7а',
      type: 'Памятник',
      square: '403.9',
      conditional: 'Неудовлетворительно',
      badgeOKN: 'выставлен на торги'
    },
        {
      nameOKN: 'Главный дом усадьбы Сорокиных',
      addres: 'Калужская область, Мосальский район, дер. Чертень, д. 7а',
      type: 'Памятник',
      square: '403.9',
      conditional: 'Неудовлетворительно',
      badgeOKN: 'выставлен на торги'
    },
        {
      nameOKN: 'Главный дом усадьбы Сорокиных',
      addres: 'Калужская область, Мосальский район, дер. Чертень, д. 7а',
      type: 'Памятник',
      square: '403.9',
      conditional: 'Неудовлетворительно',
      badgeOKN: 'выставлен на торги'
    }
  ];

  return (
    <Container>
      <Row>
        <Header />
      </Row>

      <Row>
        <Col lg={3} className="d-lg-block">
          <OptionsBlock />
        </Col>
        <Col lg={9}>
          <OptionsHeader />
          <Container className="List">
            <Row>
              {objects.map((object, index) => (
                <Col key={index} xs={12} md={6} lg={4} className="ListItem">
                  <Card style={{ width: '100%' }}>

                    <Card.Img 
                      variant="top" 
                      src="https://via.placeholder.com/286x180" 
                      alt='фото объекта ОКН'
                    />
                
                    <Container>

                    </Container>
                    <Card.Body>
                      <Badge bg="warning" className="mb-2">
                        {object.badgeOKN}
                      </Badge>
                      
                      <Card.Title>{object.nameOKN}</Card.Title>
                      <Card.Text>{object.addres}</Card.Text>
                      
                      <Container className="p-0">
                        <Row className="text-center">
                          <Col xs={4} className="border-end">
                            <small className="text-muted d-block">Тип</small>
                            <strong>{object.type}</strong>
                          </Col>
                          <Col xs={4} className="border-end">
                            <small className="text-muted d-block">Площадь</small>
                            <strong>{object.square} м²</strong>
                          </Col>
                          <Col xs={4}>
                            <small className="text-muted d-block">Состояние</small>
                            <strong className={object.conditional === 'Неудовлетворительно' ? 'text-danger' : 'text-success'}>
                              {object.conditional}
                            </strong>
                          </Col>
                        </Row>
                      </Container>
                      
                      <div className="d-grid gap-2 mt-3">
                        <Button variant="outline-primary">Подробнее</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>s
          </Container>
        </Col>
      </Row>

    </Container>
  );
}
