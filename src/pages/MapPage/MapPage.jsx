import Container from "react-bootstrap/esm/Container"
import CustomFooter from "../../components/layout/Footer/Footer";
import OptionsHeader from "../../components/layout/Filters/OptionsHeader"
import OptionsBlock from '../../components/layout/Filters/OptionsBlock';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MapPage = () =>{
    return(
        <Container className="py-4">
            <OptionsHeader />
            <Row>
                <Col lg={3} className="mb-4 mb-lg-0">
                    <OptionsBlock />
                </Col>
                <Col lg={9}>
                    <Image src="holder.js/100px250" fluid />
                </Col>
            </Row>
            <CustomFooter />
        </Container>
    )
}

export default MapPage