import { useParams, Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; // ← ДОБАВЬ ЭТОТ ИМПОРТ!
import { objects } from '../../data/objects';

const ObjectPage = () => {
  const { id } = useParams();
  const object = objects.find(obj => obj.id === parseInt(id));
  
  if (!object) {
    return (
      <Container className="py-5 text-center">
        <h2>Объект не найден</h2>
        <p>Запрошенный объект культурного наследия не существует.</p>
        <Button as={Link} to="/" variant="primary">
          Вернуться в каталог
        </Button>
      </Container>
    );
  }
  
  return(
    <Container className="py-4">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="mb-2">{object.nameOKN}</h1>
          <p className="text-muted mb-4">{object.addres}</p>
          
          <Carousel indicators controls data-bs-theme="dark" className="mb-4">
            {object.photos.map((photo, index) => (
              <Carousel.Item key={index}>
                <img 
                  src={photo} 
                  alt={`${object.nameOKN} - фото ${index + 1}`}
                  className="d-block w-100 rounded"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          
          <Accordion defaultActiveKey="0" className="mb-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>История Объекта</Accordion.Header>
              <Accordion.Body>
                <p>{object.history}</p>
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1">
              <Accordion.Header>Документы</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  {object.documents.map((doc, index) => (
                    <li key={index} className="mb-2">
                      <Button variant="outline-secondary" size="sm">
                        📄 {doc}
                      </Button>
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        
        <div className="col-lg-4">
          <Card className="sticky-top" style={{ top: '20px' }}>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="py-3">
                  <div className="text-muted small mb-1">Статус</div>
                  <div className="fw-bold">{object.badgeOKN}</div>
                </ListGroup.Item>
                <ListGroup.Item className="py-3">
                  <div className="text-muted small mb-1">Тип</div>
                  <div className="fw-bold">{object.type}</div>
                </ListGroup.Item>
                <ListGroup.Item className="py-3">
                  <div className="text-muted small mb-1">Площадь</div>
                  <div className="fw-bold">{object.square} м²</div>
                </ListGroup.Item>
                <ListGroup.Item className="py-3">
                  <div className="text-muted small mb-1">Состояние</div>
                  <div className={`fw-bold ${object.conditional === 'Неудовлетворительно' ? 'text-danger' : 'text-success'}`}>
                    {object.conditional}
                  </div>
                </ListGroup.Item>
              </ListGroup>
              <Button variant="primary" className="w-100 mt-3">Стать инвестором</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default ObjectPage;