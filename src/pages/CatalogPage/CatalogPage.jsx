import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OptionsHeader from '../../components/layout/Filters/OptionsHeader';
import OptionsBlock from '../../components/layout/Filters/OptionsBlock';
import ListCard from '../../components/object/ListCard';
import { objects } from '../../data/objects';
import CustomFooter from "../../components/layout/Footer/Footer";


const CatalogPage = () => {
  return(
    <Container className="py-4">
      <OptionsHeader />
      <Row className='min-vh-100'>
        <Col lg={3} className="mb-4 d-none d-lg-block">
          <OptionsBlock />
        </Col>
        <Col lg={9}>
          <ListCard objects={objects} />
        </Col>
      </Row>
      <CustomFooter />
    </Container>
  );
};

export default CatalogPage;