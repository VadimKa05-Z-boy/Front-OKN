import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContainerForCard from '../common/ContainerForCard';

const ListCard = ({ objects }) => {
  return(
    <Container className="List">
      <Row>
        {objects.map((object) => (
          <Col key={object.id} xs={12} md={6} lg={4} className="ListItem mb-4">
            <Card style={{ width: '100%', height: '100%' }}>
              <Card.Img 
                variant="top" 
                src={object.src} 
                alt={`фото ${object.nameOKN}`}
                style={{ height: '180px', objectFit: 'cover' }} 
              />
              <ContainerForCard {...object} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListCard;