import React, { useState } from 'react';
import Majax from 'react-mathjax';
import { inputGroupStyle } from './../../common/styles';
import { changeValue, setRes, mathjaxNode } from './../../common/example';
import { Card, CardBody, CardHeader, CardSubtitle, CardText, Alert, Row, Col, InputGroupText, Input, InputGroupAddon, InputGroup, CardFooter, Button } from 'reactstrap';

const Example1 = () => {
    const [p, setP] = useState(0);
    const [pInt, setPInpt] = useState(0);

    const [k, setK] = useState(0);
    const [kInpt, setKInpt] = useState(0);

    const [ne, setNe] = useState(0);
    const [neInpt, setNeInpt] = useState(0);

    const [nt, setNt] = useState(0);
    const [ntInpt, setNtInpt] = useState(0);

    const [pust, setPust] = useState(0);

    const resolve = () => {
        setP(pInt);
        setK(kInpt);
        setNe(neInpt);
        setNt(ntInpt);

        let pustRes = k*(p/(ne*nt));
        setPust(setRes(pustRes));
    }
    return (
        <Row className="justify-content-center">
            <Col lg="8">
                <Card className="mt-3 mb-3">
                    <CardHeader><h3>Пример 1</h3></CardHeader>
                    <CardBody>
                        <CardSubtitle><h4>Условие</h4></CardSubtitle>
                        <CardText>
                            Рассчитать установочную мощность электропечи,
                            полагая электрическую мощность P, коэффициент
                            запаса мощности равным k, электрический КПД
                            и термический КПД.
                        </CardText>
                        <CardSubtitle><h4>Входные данные</h4></CardSubtitle>
                        <Alert className="mt-3" color="info">Дробные значения нужно вводить через точку</Alert>
                        <Row>
                            <Col sm={2}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("P, кВт")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setPInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                            <Col sm={2}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("k")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setKInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("Эл. КПД, \\%")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setNeInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("Терм. КПД, \\%")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setNtInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                        </Row>
                        <CardSubtitle className="mt-3"><h4>Решение</h4></CardSubtitle>
                        <CardText>
                            Воспользуемся формулой (5.12):
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula={`P_{уст}=k\\frac{P_{2}}{η_{э}η_{т}}=${k}\\frac{${p}}{${ne}*${nt}}=${pust} кВт`} />
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={resolve}>Рассчитать</Button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    )
}

export default Example1;