import Button from "react-bootstrap/esm/Button"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import OffcanvasForHeader from "./OffcanvasForHeader"
import NavbarForHeader from "./NavbarForHeader"

const Header = ()=>{
    return(
        <Container>
        <Row>
            <Col lg={4}>
                <img src="/"></img>
            </Col>
            <Col lg={6} className="d-none d-xl-block">
                <NavbarForHeader />
            </Col>
            <Col className="d-xl-none">
                <OffcanvasForHeader /> 
            </Col>
 
        </Row>
        </Container>
    )
}

export default Header