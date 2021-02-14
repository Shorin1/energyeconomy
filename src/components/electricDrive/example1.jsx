import React, { useState } from 'react';
import Majax from 'react-mathjax';
import { inputGroupStyle } from './../../common/styles';
import { changeValue, setRes, mathjaxNode } from './../../common/example';
import { Card, CardBody, CardHeader, CardSubtitle, CardText, Alert, Row, Col, InputGroupText, Input, InputGroupAddon, InputGroup, CardFooter, Button } from 'reactstrap';

const Example1 = () => {
    const [qNom, setQNom] = useState(0);
    const [qNomInpt, setQNomInpt] = useState(0);

    const [nNom, setnNom] = useState(0);
    const [nNomInpt, setnNomInpt] = useState(0);

    const [NNom, setNNom] = useState(0);
    const [NNomInpt, setNNomInpt] = useState(0);

    const [t, setT] = useState(0);
    const [tInpt, setTInpt] = useState(0);

    const [q, setQ] = useState(0);
    const [n, setn] = useState(0);
    const [N, setN] = useState(0);
    const [deltaW, setDeltaW] = useState(0);

    const resolve = () => {
        setQNom(qNomInpt);
        setnNom(nNomInpt);
        console.log(nNom);
        setNNom(NNomInpt);
        setT(tInpt);

        let qRes = 0.91*qNom;
        setQ(setRes(qRes, 0));

        let nRes = (q/qNom)*nNom;
        setn(setRes(nRes, 0));
        
        let NRes = NNom*(Math.pow(n, 3)/Math.pow(nNom, 3));
        setN(setRes(NRes, 0));

        let deltaWRes = (N-NNom)*t*1;
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
                            Экономия воды в системах водоснабжения связана с
                            устранением ненужных избытков давления (напора) без ущерба
                            для потребителей. С этой целью сетевой насос снабдили частотным преобразователем, позволяющим снизить расход воды на 9%.
                            Номинальная производительность насоса {mathjaxNode("Q_{ном}")} {mathjaxNode("м^3/ч")},
                            номинальное число оборотов электродвигателя равно {mathjaxNode("n_{ном}")} об/мин.
                            Определить годовую экономию электроэнергии за счет внедрения
                            частотного регулятора, если мощность электродвигателя насоса
                            составляет {mathjaxNode("N_{ном}")} Вт, число часов работы в год равно {mathjaxNode("t")} ч.
                    </CardText>
                        <CardSubtitle><h4>Входные данные</h4></CardSubtitle>
                        <Alert className="mt-3" color="info">Дробные значения нужно вводить через точку</Alert>
                        <Row>
                            <Col sm={3}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("Q, м^3/ч")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setQNomInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("n_{ном}, об/мин")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setnNomInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("N_{ном}, Вт")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setNNomInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {mathjaxNode("T, ч")}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input style={inputGroupStyle} onChange={e => setTInpt(changeValue(e))} />
                                </InputGroup>
                            </Col>
                        </Row>
                        <CardSubtitle className="mt-3"><h4>Решение</h4></CardSubtitle>
                        <CardText>
                            При неизменном давлении производительность насоса прямо пропорциональна числу оборотов электродвигателя:
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="\frac{Q_{ном}}{Q}=\frac{n_{ном}}{n}" />
                        </CardText>
                        <CardText>
                            где {mathjaxNode("Q_{ном}")} – номинальная производительность насоса, {mathjaxNode("м^3/ч")};
                            {mathjaxNode("Q")} – производительность насоса на пониженных оборотах, {mathjaxNode("м^3/ч")}. Согласно
                            условию она равна
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula={`Q=0.91Q_{ном}=0.91*${qNom}=${q} м^3/ч`} />
                        </CardText>
                        <CardText>
                            Тогда пониженное число оборотов электродвигателя определится
                            по формуле
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula={`n=\\frac{Q}{Q_{ном}}n_{ном}=\\frac{${q}}{${qNom}}${nNom}=${n} об/мин`} />
                        </CardText>
                        <CardText>
                            а соответствующая мощность будет равна
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula={`N=N_{ном}\\frac{n^3}{n^3_{ном}}=${NNom}*\\frac{${n}^3}{${nNom}^3}=${N} кВт`} />
                        </CardText>
                        <CardText>
                            Экономия электрической энергии за год рассчитывается по
                            формуле
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula={`ΔW=(N-N_{ном})TK_{и}=(${N}-${NNom})*${t}*1=${deltaW}`} />
                        </CardText>
                    </CardBody>
                </Card>
                <CardFooter>
                    <Button onClick={resolve}>Рассчитать</Button>
                </CardFooter>
            </Col>
        </Row>
    )
}

export default Example1;