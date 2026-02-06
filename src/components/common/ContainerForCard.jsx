import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContainerForCard = (props) => {
  const {
    id,
    badgeOKN,
    nameOKN,
    addres,
    type,
    square,
    conditional,
  } = props;

  return(
    <Card.Body>
      <Badge bg="warning" className="mb-2">
        {badgeOKN}
      </Badge>
      
      <Card.Title>{nameOKN}</Card.Title>
      <Card.Text>{addres}</Card.Text>
      
      <Container className="p-0">
        <Row className="text-center">
          <Col xs={4} className="border-end">
            <small className="text-muted d-block">Тип</small>
            <strong>{type}</strong>
          </Col>
          <Col xs={4} className="border-end">
            <small className="text-muted d-block">Площадь</small>
            <strong>{square} м²</strong>
          </Col>
          <Col xs={4}>
            <small className="text-muted d-block">Состояние</small>
            <strong className={conditional === 'Неудовлетворительно' ? 'text-danger' : 'text-success'}>
              {conditional}
            </strong>
          </Col>
        </Row>
      </Container>
      
      <div className="d-grid gap-2 mt-3">
        <Link to={`/object/${id}`}>
          <Button variant="outline-primary">Подробнее</Button>
        </Link>
      </div>
    </Card.Body>
  );
};

export default ContainerForCard;