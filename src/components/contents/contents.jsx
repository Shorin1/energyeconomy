import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardHeader, ListGroup, ListGroupItem, Row, Col, CardBody } from 'reactstrap';

const Contents = () => {
    return (
        <Row className="justify-content-center">
            <Col lg="6">
                <Card className="mt-3">
                    <CardHeader><h3>Оглавление</h3></CardHeader>
                    <CardBody>
                        <ListGroup>
                            <ListGroupItem>
                                <NavLink to="/powerLines">1 - Передача электрической энергии по линиям электропередач</NavLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <NavLink to="/energyLosses">2 - Потери энергии в трансформаторах</NavLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <NavLink to="/electricDrive">3 - Использование электрической энергии на производстве. Электропривод</NavLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <NavLink to="/electroInstallations">4 - Электротермические установки</NavLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <NavLink to="/lightingEnergy">5 - Использование электрической энергии для освещения</NavLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <NavLink to="/houseElectro">6 - Экономия электрической энергии бытовыми электроприборами</NavLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <NavLink to="/tasks">Задачи</NavLink>
                            </ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default Contents;