import React from 'react';
import Majax from 'react-mathjax';
import { Card, CardBody, CardHeader, CardText, Col, Row, Table } from 'reactstrap';
import { textStyle } from '../../common/styles';

const Theory = () => {
    return (
        <Row className="justify-content-center">
            <Col lg="8">
                <Card className="mt-3">
                    <CardHeader><h3>Экономия электрической энергии бытовыми электроприборами</h3></CardHeader>
                    <CardBody>
                        <CardText style={textStyle}>
                            В быту электроэнергия в основном расходуется для питания
                            бытовых электроприборов и на освещение. Расчет экономии энергии при замене старых ламп на энергосберегающие лампы в этом
                            случае осуществляется точно таким же образом, как и для промышленных предприятий.
                        </CardText>
                        <CardText style={textStyle}>
                            Среди большого многообразия бытовых электроприборов, используемых в повседневной жизни, можно выделить устройства,
                            потребляющие значительное количество электрической энергии:
                            электроплиты и электрические духовые шкафы, кондиционеры,
                            посудомоечные машины, утюги, чайники, пылесосы, морозильные
                            и холодильные камеры, стиральные машины, бойлеры, телевизоры
                            с жидкокристаллическим экраном, мониторы, компьютеры и др.
                            Для удобства расчетов экономии электрической энергии при замене старых электроприборов новыми электроприборы разбиваются на классы по энергопотреблению. Самым экономным по расходованию электроэнергии считается класс А, далее идут классы
                            B, C, D, E, G. Классы А+, А++, А+++ еще более энергосберегающие, чем класс А.
                        </CardText>
                        <CardText style={textStyle}>
                            Класс энергоэффективности холодильника определяется индексом <Majax.Node inline formula="I" />:
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="I=\frac{E_{факт. год}}{E_{станд. год}}*100%" />, (5.15)
                        </CardText>
                        <CardText>
                            где <Majax.Node inline formula="E_{факт. год}" />, <Majax.Node inline formula="E_{станд. год}" /> – фактическое и
                            стандартное (класс D) годовое потребление электрической энергии.
                        </CardText>
                        <CardText style={textStyle}>
                            В табл. 5.2 представлено сравнение энергопотребления некоторых видов бытовой техники в зависимости от класса
                        </CardText>
                        <CardText>
                            Таблица 5.2
                            <h4 align="center">Энергопотребление бытовой техники</h4>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Наименование</th>
                                        <th>A++</th>
                                        <th>A+</th>
                                        <th>A</th>
                                        <th>B</th>
                                        <th>C</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Стиральная машина без сушки, <Majax.Node inline formula="кВт·ч/кг" />
                                        (хлопок 6 кг t = 60 <Majax.Node inline formula="°С" />)</td>
                                        <td>&lt;0,12</td>
                                        <td>0,12-0,14</td>
                                        <td>0,14-0,17</td>
                                        <td>0,35-0,39</td>
                                        <td>0,35-0,39</td>
                                    </tr>
                                    <tr>
                                        <td>Стиральная машина c сушкой, <Majax.Node inline formula="кВт·ч/кг" />
                                        (хлопок 6 кг t = 60 <Majax.Node inline formula="°С" />)</td>
                                        <td>&lt;0,48</td>
                                        <td>0,48-0,58</td>
                                        <td>0,58-0,68</td>
                                        <td>0,68-0,81</td>
                                        <td>0,81-0,93</td>
                                    </tr>
                                    <tr>
                                        <td>Холодильник</td>
                                        <td><Majax.Node inline formula="I" />&lt;0,48</td>
                                        <td>30 &le; <Majax.Node inline formula="I" /> &lt; 42</td>
                                        <td>42 &le; <Majax.Node inline formula="I" /> &lt; 55</td>
                                        <td>55 &le; <Majax.Node inline formula="I" /> &lt; 75</td>
                                        <td>75 &le; <Majax.Node inline formula="I" /> &lt; 90</td>
                                    </tr>
                                    <tr>
                                        <td>Посудомоечная машина, <Majax.Node inline formula="кВт·ч/кг" />
                                        (12 предметов)</td>
                                        <td>&lt;0,74</td>
                                        <td>0,74-0,90</td>
                                        <td>0,90-1,06</td>
                                        <td>1,06-1,25</td>
                                        <td>1,25-1,45</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardText>
                        <CardText style={textStyle}>
                            На классы по энергопотреблению разбивается также офисная
                            техника и техника промышленного назначения.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Theory;