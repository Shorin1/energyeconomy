import React, { useState } from 'react';
import Majax from 'react-mathjax';
import { inputGroupStyle } from './../../common/styles';
import { changeValue, setRes, mathjaxNode } from './../../common/example';
import { Card, CardBody, CardHeader, CardSubtitle, CardText, Alert, Row, Col, InputGroupText, Input, InputGroupAddon, InputGroup, CardFooter, Button } from 'reactstrap';

const Example2 = () => {
    const [n, setN] = useState(0);
    const [nInpt, setNInpt] = useState(0);

    const [p, setP] = useState(0);
    const [pInpt, setPInpt] = useState(0);

    const [tau, setTau] = useState(0);
    const [tauInpt, setTauInpt] = useState(0);

    const [deltaW, setDeltaW] = useState(0);

    const resolve = () => {
        setN(nInpt);
        setP(pInpt);
        setTau(tauInpt);

        let deltaWRes = 0.1*n*p*tau;
        setDeltaW(setRes(deltaWRes));
    }

    return (
        <Row className="justify-content-center">
            <Col lg="8">
                <Card className="mt-3 mb-3">
                    <CardHeader><h3>Пример 2</h3></CardHeader>
                    <CardBody>
                        <CardSubtitle><h4>Условие</h4></CardSubtitle>
                        <CardText>
                            Для освещения открытой территории в ночное время используются n ламп ДРЛ мощностью P Вт.
                            Определить годовую экономию электрической энергии при использовании
                            ЭПРА, если количество часов работы ламп составляет τ ч в
                            год, а экономия электрической энергии за счет использования ЭПРА составит 10% ее годового потребления.
                        </CardText>
                        <CardSubtitle><h4>Входные данные</h4></CardSubtitle>
                        <Alert className="mt-3" color="info">Дробные значения нужно вводить через точку</Alert>
                        <Row>
                            <Col sm={2}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("n")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setNInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                            <Col sm={2}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("P, Вт")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setPInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                            <Col sm={2}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("τ, ч")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setTauInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                        </Row>
                        <CardSubtitle className="mt-3"><h4>Решение</h4></CardSubtitle>
                        <CardText>
                            При работе освещения потребление электрической
                            энергии рассчитывается по формуле
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="W=\sum n_{i} P_{i} τ_{i}" />,
                        </CardText>
                        <CardText>
                            где {mathjaxNode("n_{i}")} – количество осветительных приборов одинаковой мощности, шт.; {mathjaxNode("P_{i}")} – мощность применяемых одинаковых ламп, кВт
                            ; {mathjaxNode("τ_{i}")} – число часов работы в году, ч.
                        </CardText>
                        <CardText>
                            Поскольку экономия энергии составит 10% от годового потребления W, то она определится выражением
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula={`ΔW=0.1*${n}*${p}*${tau}=${deltaW} Вт*ч/год`} />
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

export default Example2;