import React from 'react';
import Majax from 'react-mathjax';
import { Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap';
import { textStyle } from '../../common/styles';

const Theory = () => {
    return (
        <Row className="justify-content-center">
            <Col lg="8">
                <Card className="mt-3">
                    <CardHeader><h3>Электротермические установки</h3></CardHeader>
                    <CardBody>
                        <CardText style={textStyle}>
                            Электротермические установки (электропечи) служат для преобразования электрической энергии в теплоту, которая передается
                            обрабатываемому материалу для качественного изменения его характеристик. Они классифицируются по способу преобразования
                            электрической энергии в тепловую: 1) прямой и косвенный нагрев
                            за счет сопротивления; 2) электродуговой разогрев; 3) нагрев в переменном магнитном поле; 4) нагрев в переменном электрическом
                            поле; 5) нагрев электронным пучком; 6) лазерный разогрев;
                            7) плазменный разогрев
                        </CardText>
                        <CardText style={textStyle}>
                            <b><i>По рабочей температуре печи</i></b> делят на низкотемпературные
                            (до 500–600 <Majax.Node inline formula="°С" />),
                            среднетемпературные (до 1250 <Majax.Node inline formula="°С" />) и
                            высокотемпературные (свыше 1250 <Majax.Node inline formula="°С" />).
                            Чем выше температура печи, тем более огнеупорные материалы используются в кладке и футеровке.
                        </CardText>
                        <CardText style={textStyle}>
                            <b><i>По режиму работы</i></b> электропечи делят на 2 группы: 1) непрерывного действия; 2) периодического действия.
                        </CardText>
                        <CardText style={textStyle}>
                            Энергосбережение при эксплуатации электропечей может быть
                            достигнуто за счет:
                        </CardText>
                        <CardText style={textStyle}>
                            – поддержания низкой температуры наружной поверхности
                            печи 40–50<Majax.Node inline formula="°С" />;
                        </CardText>
                        <CardText style={textStyle}>
                            – использования современных теплоизоляционных материалов;
                        </CardText>
                        <CardText style={textStyle}>
                            – улучшения герметичности печей;
                        </CardText>
                        <CardText style={textStyle}>
                            – применения автоматического регулирования температуры,
                            форсированного разогрева в начале процесса.
                        </CardText>
                        <CardText style={textStyle}>
                            Электрическая мощность <Majax.Node inline formula="Р" /> электропечей определяется полезным тепловым потоком, требуемым для нагрева обрабатываемого
                            материала. Тогда установленную мощность печи можно оценить
                            по формуле [8]:
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="P_{уст}=k\frac{P}{η_{э}η_{т}}" /> (5.12)
                        </CardText>
                        <CardText>
                            где <Majax.Node inline formula="k = 1,1–1,6" /> – коэффициент запаса мощности печи, учитывающий увеличение тепловых потерь в
                            процессе эксплуатации; <Majax.Node inline formula="η_{э}" /> и <Majax.Node inline formula="η_{т}" /> – электрический и тепловой КПД. Коэффициент запаса зависит
                            от типа электротермической установки и ее мощности. Самым высоким КПД обладают печи и установки нагрева за
                            счет сопротивления с <Majax.Node inline formula="η_{э}=0,9–1,0" /> и <Majax.Node inline formula="η_{т}=0,7–0,9" />.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default Theory;