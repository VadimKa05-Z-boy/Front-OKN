import { Button, Col, Row, Form } from 'react-bootstrap';
import DropDownBalvanka from './DropDawnBalvanka';
import Container from 'react-bootstrap/Container';
import ListCard from './ListCard';
import { objects } from '../../data/objects';


const SearchBlock = ({})=>{
    const x = objects
    x.filter(x => x.type === `Ансамбль`).slice(0,2)

    return(
        <Container>
            <div>
                <h1>Инвестируй в будущее, сохраняя прошлое</h1>
            </div>
            <div>
                <div>
                    <h2>Найти объект культурного наследия</h2>
                </div>
                <div>
                    <Row>
                        <Col lg={9}>
                            <Row>
                                <Col lg={3}>
                                    <DropDownBalvanka 
                                        titel="Район"
                                        lists={["Московский", "Ленинский", "Окябрьский"]}
                                    />
                                </Col>
                                <Col lg={3}>
                                    <DropDownBalvanka 
                                        titel="Адрес"
                                        lists={["ул. Салтыкова-Щедрина, 55", "ул. Баумана, 30", "ул. Баумана, 32", "ул. Вилонова, 7", "ул. Подвойского, 6"]}
                                    />
                                </Col>
                                <Col lg={3}>
                                    <DropDownBalvanka 
                                        titel="Название"
                                        lists={["Дом мещанина Падина", "Дом Носовых", "Дом Цуриковых", "Дом Горбуновых", "Дом Алтынникова"]}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <DropDownBalvanka 
                                        titel="Статус ОКН"
                                        lists={["Восстановлено", "В процессе", "Передаются инвестрами", "Ищут инвестора"]}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <DropDownBalvanka 
                                        titel="Площадь"
                                        lists={["до 160 кв. м.", "до 350 кв. м.", "до 700 кв. м.", "более 700 кв. м."]}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row className='m-x=3'><Button variant="primary">Поиск</Button></Row>
                            <Row className='md-3'><Button variant="secondary">Очистить</Button></Row>
                        </Col>      
                    </Row>
                </div>
                <div>
                    
                </div>
                <div>
                    <h2>ОКН, востановленные инвесторами</h2>
                    <Row><ListCard objects={x}/></Row>
                    <Row><Button variant="primary" sm={12}>Показать ещё ... </Button></Row>
                </div>
                <div>
                    <h2>ОКН, в процессе востановления</h2>
                    <Row><ListCard objects={x}/></Row>
                    <Row><Button variant="primary" sm={12}>Показать ещё ... </Button></Row>
                </div> 
                <div>
                    <h2>ОКН, предлагаемые инвесторам</h2>
                    <Row><ListCard objects={x}/></Row>
                    <Row><Button variant="primary" sm={12}>Показать ещё ... </Button></Row>
                </div>                 
            </div>
        </Container>
    )
}

export default SearchBlock