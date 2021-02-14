import React from 'react';
import Majax from 'react-mathjax';
import { Card, CardBody, CardHeader, CardSubtitle, CardText, Alert, Row, Col, InputGroupText, Input, InputGroupAddon, InputGroup } from 'reactstrap';

const Example1 = () => {
    const inputGroupStyle = {
        height: "41px"
    };

    return (
        <Row className="justify-content-center">
            <Col lg="8">
                <Card className="mt-3 mb-3">
                    <CardHeader><h3>Пример 1</h3></CardHeader>
                    <CardBody>
                        <CardSubtitle><h4>Условие</h4></CardSubtitle>
                        <CardText>
                            В ЛЭП силу тока уменьшили в 2 раза и произвели
                            замену провода, уменьшив диаметр провода в 2 раза. Как изменятся тепловые потери в линии электропередач?
                        </CardText>
                        <CardSubtitle><h4>Входные данные</h4></CardSubtitle>
                        <Alert className="mt-3" color="info">Дробные значения нужно вводить через точку</Alert>
                        <Row>
                            <Col sm={2}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Majax.Node inline formula="I_{1}" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} />
                                </InputGroup>
                            </Col>
                            <Col sm={2}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Majax.Node inline formula="R_{1}" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} />
                                </InputGroup>
                            </Col>
                            <Col sm={2}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Majax.Node inline formula="t" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} />
                                </InputGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Example1;