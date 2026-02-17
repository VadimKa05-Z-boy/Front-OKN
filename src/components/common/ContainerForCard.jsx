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

  const getConditionClass = (cond) => {
    switch(cond) {
      case 'Аварийное':
      case 'Неудовлетворительно':
        return 'text-danger';
      case 'Удовлетворительное':
        return 'text-warning';
      case 'Хорошее':
      case 'Востановленное':
        return 'text-success';
      default:
        return 'text-secondary';
    }
  }

  return(
    <Card.Body className='bg-dark text-white rounded-3'>
      <Badge bg="warning" className="mb-2">
        {badgeOKN}
      </Badge>
      
      <Card.Title>{nameOKN}</Card.Title>
      <Card.Text>{addres}</Card.Text>
      
      <Container className="p-0">
        <Row className="">
          <Col xs={12} >
            <small className="d-block">Тип</small>
            <strong>{type}</strong>
          </Col>
          <Col xs={12}>
            <small className=" d-block">Площадь</small>
            <strong>{square} м²</strong>
          </Col>
          <Col xs={12}>
            <small className=" d-block">Состояние</small>
            <strong >
              {conditional}
            </strong>
          </Col>
        </Row>
      </Container>
      
      <div className="d-grid gap-2 mt-3">
        <Link to={`/object/${id}`}>
          <Button variant="outline-warning">Подробнее</Button>
        </Link>
      </div>
    </Card.Body>
  );
};

export default ContainerForCard;