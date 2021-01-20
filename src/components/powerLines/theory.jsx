import React from 'react';
import Majax from 'react-mathjax';
import { Card, CardBody, CardHeader, CardText, Row, Col } from 'reactstrap';

const Theory = () => {
    const textStyle = {
        textIndent: "20px"
    };

    return (
        <Row className="justify-content-center">
            <Col lg="8">
                <Card className="mt-3">
                    <CardHeader><h3>Передача электрической энергии  по линиям электропередач</h3></CardHeader>
                    <CardBody>
                        <CardText style={textStyle}>
                            Транспортирование электрической энергии от источника к потребителю осуществляется по линиям электропередач. Потери в
                            ЛЭП можно оценить исходя из тепловых потерь в проводнике,
                            обусловленных законом Джоуля – Ленца:
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="Q=I^2Rτ" /> (5.1)
                        </CardText>
                        <CardText>
                            где <Majax.Node inline formula="Q" /> – количество теплоты, выделяемое в проводнике, <Majax.Node inline formula="Дж" />;
                            <Majax.Node inline formula="I" /> – сила тока в проводнике, <Majax.Node inline formula="А" />;
                            <Majax.Node inline formula="R" /> – его сопротивление, <Majax.Node inline formula="Ом" />;
                            <Majax.Node inline formula="τ" /> – время, <Majax.Node inline formula="с" />;
                            <Majax.Node inline formula="ρ" /> – удельное сопротивление, <Majax.Node inline formula="Ом*мм^2/м" />;
                            <Majax.Node inline formula="l" /> – длина проводника, <Majax.Node inline formula="м" />;
                            <Majax.Node inline formula="S" /> – площадь его поперечного сечения, <Majax.Node inline formula="мм^2" />.
                            Для расчета передаваемой мощности можно воспользоваться средними значениями тока и напряжения в сети:
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="P=UI" />
                        </CardText>
                        <CardText style={textStyle}>
                            Для уменьшения тепловых потерь согласно (5.1) необходимо уменьшить сопротивление проводов или силу тока в них.
                            Уменьшение сопротивления возможно при увеличении площади поперечного сечения провода,
                            однако это утяжеляет провод и увеличивает затраты на материалы для его изготовления.
                        </CardText>
                        <CardText style={textStyle}>
                            Например, для уменьшения количества тепловых потерь за
                            счет уменьшения R в 100 раз нужно увеличить массу провода также в 100 раз. Аналогичный эффект может быть достигнут за счет
                            уменьшения тока в 10 раз.
                        </CardText>
                        <CardText style={textStyle}>
                            Значит, необходимо снижать силу тока в ЛЭП. Тогда согласно
                            формуле (5.2) для сохранения передаваемой мощности надо увеличивать напряжение в сети.
                            Таким образом, экономически целесообразно при передаче электрической энергии на большие расстояния использовать высокие и сверхвысокие напряжения.
                        </CardText>
                        <CardText style={textStyle}>
                            Линии электропередач делятся на воздушные (ВЛЭП) и подземные (КЛЭП).
                            Воздушные ЛЭП выполняют в основном из легких, прочных и хорошо проводящих ток металлов и сплавов: алюминия и сталеалюминия.
                            Кабельные линии электропередач изготавливают с добавлением меди – наиболее токопроводящего металла, что позволяет снизить
                            потери при транспортировке электрической энергии при высоких нагрузках.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default Theory;