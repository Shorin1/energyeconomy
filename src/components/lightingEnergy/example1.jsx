import React, { useState } from 'react';
import Majax from 'react-mathjax';
import { inputGroupStyle } from './../../common/styles';
import { changeValue, setRes, mathjaxNode } from './../../common/example';
import { Card, CardBody, CardHeader, CardSubtitle, CardText, Alert, Row, Col, InputGroupText, Input, InputGroupAddon, InputGroup, CardFooter, Button } from 'reactstrap';

const Example1 = () => {
    const [h, setH] = useState(0)
    const [hInpt, setHInpt] = useState(0)

    const [hZam, setHZam] = useState(0);
    const [hZamInpt, setHZamInpt] = useState(0);

    const [w, setW] = useState(0);
    const [wInpt, setWInpt] = useState(0);

    const [kEl, setKEl] = useState(0);
    const [kElInpt, setKElInpt] = useState(0);

    const [deltaW, setDeltaW] = useState(0);

    const resolve = () => {
        setH(hInpt);
        setHZam(hZamInpt);
        setW(wInpt);
        setKEl(kElInpt);

        let deltaWRes = w * ((1 - kEl * h) / hZam);
        setDeltaW(setRes(deltaWRes));
    }

    return (
        <Row className="justify-content-center">
            <Col lg="8">
                <Card className="mt-3 mb-3">
                    <CardHeader><h3>Пример 1</h3></CardHeader>
                    <CardBody>
                        <CardSubtitle><h4>Условие</h4></CardSubtitle>
                        <CardText>
                            Определить экономию электрической энергии на
                            освещение за год при замене люминесцентных ламп со световой
                            отдачей {mathjaxNode("H")} лм/Вт на светодиодные лампы со световой отдачей
                            {mathjaxNode("H_{зам}")} лм/Вт, если годовое потребление электроэнергии составляет
                            {mathjaxNode("W_{год}")} кВт·ч/год. Коэффициент запаса считать равным {mathjaxNode("K_{эл}")}.
                        </CardText>
                        <CardSubtitle><h4>Входные данные</h4></CardSubtitle>
                        <Alert className="mt-3" color="info">Дробные значения нужно вводить через точку</Alert>
                        <Row>
                            <Col sm={2}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("H, лм/Вт")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setHInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("H_{зам}, лм/Вт")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setHZamInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("W_{год}, кВт*ч/год")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setWInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                            <Col sm={2}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("K_{эл}")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setKElInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                        </Row>
                        <CardSubtitle className="mt-3"><h4>Решение</h4></CardSubtitle>
                        <CardText>
                            Экономию электрической энергии определим по
                            формуле
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="ΔW=W_{год}(1-K_{ист}K_{эл})" />
                        </CardText>
                        <CardText>
                            где {mathjaxNode("K_{ист}=H/H_{зам}")}, {mathjaxNode("H")} – световая отдача существующих ламп
                            ; {mathjaxNode("H_{зам}")} – световая отдача ламп после замены. Подставляя численные значения, имеем
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula={`ΔW=${w}*(\\frac{1-${kEl}*${h}}{${hZam}})=${deltaW} кВт*ч/год`} />
                        </CardText>
                        <CardText>
                            Для достижения энергосберегающего эффекта в газоразрядных лампах применяются различные электронные пускорегулирующие аппараты (ЭПРА), способные уменьшать подведенную
                            мощность и осуществлять пуск газового разряда в щадящем режиме с предварительным разогревом электродов. Эффект от их
                            использования может доходить до 20% экономии энергии, при
                            этом еще возрастает срок службы ламп.
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