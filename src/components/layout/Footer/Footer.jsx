import Button from "react-bootstrap/esm/Button"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

const CustomFooter = () =>{
    return(
        <footer className="bg-dark text-white py-3 px-3">
            <Container>
                <Row>
                    <Row className="mb-3">
                        <p className="fw-bold mb-1">Управление экономики и имущественных отношений города Калуги</p>
                        <p className="mb-1">Калуга, ул.Воробьевская, д.5</p>
                        <div md={6}>
                            <Button
                                href="https://www.kaluga-gov.ru/"
                                variant="primary"
                            >
                                <i className="bi bi-telegram me-2"></i>
                                kaluga-gov.ru
                            </Button>
                        </div>
                    </Row>
                    <Row className="mb-3">
                        <p className="fw-bold mb-1">Управление по охране объектов культурного наследия Калужской области</p>
                        <p className="mb-1">Калуга, ул.Старый Торг, д.5</p>
                        <div md={6}>
                            <Button
                                href="https://nasledie.admoblkaluga.ru/"
                                variant="primary"
                            >
                                <i className="bi bi-telegram me-2"></i>
                                nasledie.admoblkaluga.ru
                            </Button>
                        </div>
                    </Row>
                    <Row className="mb-3">
                        <p className="fw-bold mb-1">Сектор главного архитектора города Калуги</p>
                        <p className="mb-1">Калуга, ул.Воробьевская, д.5</p>
                        <div md={6}>
                            <Button
                                href="tel:+7(4842)713852"
                                variant="primary" 
                            >
                                <i className="bi bi-telephone me-2"></i>
                                +7(4842) 71 38 52
                            </Button>
                        </div>

                    </Row>
                </Row>
            </Container>
        </footer>
    )
}

export default CustomFooter