import { Button, Col, Row, Form, Image } from 'react-bootstrap';
import DropDownBalvanka from './DropDawnBalvanka';
import Container from 'react-bootstrap/Container';
import ListCard from './ListCard';
import { objects } from '../../data/objects';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/baner_image_2.png'
import mapImage from '../../assets/map.png'


const SearchBlock = ({})=>{
    const x = objects
    x.filter(x => x.type === `Ансамбль`).slice(0,2)

    return(
        <Container>
            <div className='my-5'>
                <Row className='bg-warning text-darckx rounded-4 px-3 py-3'>
                    <Col className='d-flex flex-column justify-content-between'>
                        <div className='mt-3'>
                            <Row className='mb-3'>
                                <div style={{ width: 'fit-content' }} className='bg-white text-black rounded-4 px-1 py-1'>
                                    <p className='mb-0 d-flex align-items-center justify-content-center text-center px-2 py-1'>1371 - 2026</p>
                                </div>
                            </Row>
                            <Row className='d-flex align-items-center justify-content-center text-left'>
                                <h1 className='fw-bold text-uppercase'>Сохраняя Калугу,<br /> инвестируем в будущее</h1>
                            </Row>  
                        </div>
                        <Row className='d-none d-lg-block'><h3>Единый реестр объектов культурного наследия города, доступных для аренды и приватизации. Впишите свое имя в историю города.</h3></Row>
                        <Button variant="dark" as={Link} to="/catalog" className='mb-3'>
                            Выбрать объект
                        </Button>
                    </Col>
                    <Col >
                        <Image src={bannerImage} fluid className='rounded-4' />
                    </Col>
                </Row>
            </div>
            <div >
                <div className="bg-light border border-warning border-3 rounded-4">
                    <div className="bg-warning text-black border rounded-4 px-3 py-3 ">
                        <h2 className='my-3 '>Найти объект культурного наследия</h2>
                    </div>
                    <div className="text-darck px-3 py-3 ">
                        <Row>
                            <Col lg={9}>
                                <Row className='d-flex alighn-item-between'>
                                    <Col lg={3} className="bg-light">
                                        <DropDownBalvanka 
                                            titel="Район"
                                            lists={["Московский", "Ленинский", "Окябрьский"]}
                                        />
                                    </Col>
                                    <Col lg={3}>
                                        <DropDownBalvanka 
                                            titel="Статус ОКН"
                                            lists={["Восстановлено", "В процессе", "Передаются инвестрами", "Ищут инвестора"]}
                                        />
                                    </Col>
                                    <Col lg={3}>
                                        <DropDownBalvanka 
                                            titel="Площадь"
                                            lists={["до 160 кв. м.", "до 350 кв. м.", "до 700 кв. м.", "более 700 кв. м."]}
                                        />
                                    </Col>
                                    <Col lg={4}>
                                        <DropDownBalvanka 
                                            titel="Адрес"
                                            lists={["ул. Салтыкова-Щедрина, 55", "ул. Баумана, 30", "ул. Баумана, 32", "ул. Вилонова, 7", "ул. Подвойского, 6"]}
                                        />
                                    </Col>
                                    <Col lg={4}>
                                        <DropDownBalvanka 
                                            titel="Название"
                                            lists={["Дом мещанина Падина", "Дом Носовых", "Дом Цуриковых", "Дом Горбуновых", "Дом Алтынникова"]}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={3} className='d-flex flex-column justify-content-evenly'>
                                <Row className='mx-1'><Button variant="dark">Поиск</Button></Row>
                                <Row className='mt-3 mx-1'><Button variant="outline-secondary">Очистить</Button></Row>
                            </Col>      
                        </Row>
                    </div>
                </div>
                
                <div className='mt-5'>
                    <div className="bg-black text-white border rounded-4 px-3 py-3 ">
                        <h2 className='my-3 '>Найти объект культурного наследия</h2>
                    </div>
                    <Row className="g-2 mt-3">
                        <Col xs={6} md={4}>
                        <Button
                            variant="dark"
                            className="rounded-4 px-3 py-3 w-100"
                            as={Link}
                            to="/catalog"
                        >
                            <h3>Восстановленные</h3>
                            <p>Примеры того, как исторические здания обрели новую жизнь</p>
                        </Button>
                        </Col>

                        <Col xs={6} md={4}>
                        <Button
                            variant="dark"
                            className="rounded-4 px-3 py-3 w-100"
                            as={Link}
                            to="/catalog"
                        >
                            <h3>В процессе</h3>
                            <p>Здания, по которым уже ведутся работы по сохранению и реставрации</p>
                        </Button>
                        </Col>

                        <Col xs={6} md={4}>
                        <Button
                            variant="dark"
                            className="rounded-4 px-3 py-3 w-100"
                            as={Link}
                            to="/catalog"
                        >
                            <h3>Требуют восстановления</h3> {/* возможно, здесь нужен другой заголовок */}
                            <p>Здания, которые нуждаются в новом хозяине</p>
                        </Button>
                        </Col>
                    </Row>
                </div>

                <div className='my-5 bg-light border border-warning border-3 rounded-4'>
                    <div className='bg-warning text-black border rounded-4 px-3 py-3 mb-4'>
                        <h2 className='my-3'>ОКН, востановленные инвесторами</h2>
                    </div>
                    <Row className='mx-1'><ListCard objects={x}/></Row>
                    <Button variant="dark" as={Link} to="/catalog" className='mx-3 mb-3'>Показать ещё ... </Button>
                </div>

                <div className='my-5 bg-light border border-warning border-3 rounded-4'>
                    <div className='bg-warning text-black border rounded-4 px-3 py-3 mb-4'>
                        <h2 className='my-3'>ОКН, в процессе востановления</h2>
                    </div>
                    <Row className='mx-1'><ListCard objects={x}/></Row>
                    <Button variant="dark" as={Link} to="/catalog" className='mx-3 mb-3'>Показать ещё ... </Button>
                </div> 

                <div className='my-5 bg-light border border-warning border-3 rounded-4'>
                    <div className='bg-warning text-black border rounded-4 px-3 py-3 mb-4'>
                        <h2 className='my-3'>ОКН, предлагаемые инвесторам</h2>
                    </div>
                    <Row className='mx-1'><ListCard objects={x}/></Row>
                    <Button variant="dark" as={Link} to="/catalog" className='mx-3 mb-3'>Показать ещё ... </Button>
                </div>

                <div className="bg-primary p-5 mb-5 rounded-4 border-5" style={{ backgroundImage: `url(${mapImage})` }}>
                    <dir className='bg-dark text-white p-5 rounded-4 d-flex flex-column align-items-center'>
                        <h2 className='mb-4'>Карта домов старой Калуги</h2>
                        <p className='mb-4 text-center'>Используйте интерактивную карту для поиска объектов по районам.<br /> Фильтры помогут найти здания, подходящие под ваши критерии.</p>
                        <Button variant='outline-warning'>Открыть карту</Button>
                    </dir>
                </div>                 
            </div>
        </Container>
    )
}

export default SearchBlock