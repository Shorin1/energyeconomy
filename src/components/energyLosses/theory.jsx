import React from 'react';
import Majax from 'react-mathjax';
import { Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap';
import { textStyle } from '../../common/styles';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';

const Theory = () => {
    return (
        <Row className="justify-content-center">
            <Col lg="8">
                <Card className="mt-3">
                    <CardHeader><h3>Потери энергии в трансформаторах</h3></CardHeader>
                    <CardBody>
                        <CardText style={textStyle}>
                            При транспортировке электроэнергии потребителям для снижения напряжения в сети используются понижающие трансформаторы.
                        </CardText>
                        <CardText style={textStyle}>
                            Пусть у трансформатора имеются две индуктивно связанные
                            между собой обмотки на общем магнитопроводе. На первичную
                            обмотку трансформатора подаются переменные ток и напряжение <Majax.Node inline formula="U_{1}" /> <Majax.Node inline formula="I_{1}" />,
                            а со вторичной обмотки трансформатора снимаются переменные ток и
                            напряжение <Majax.Node inline formula="U_{2}" /> <Majax.Node inline formula="I_{2}" />, (см. рис. 5.1).
                        </CardText>
                        <CardText style={textStyle}>
                            Предположим, что мощность без потерь передается из первичной обмотки трансформатора во вторичную обмотку.
                            Тогда для идеального трансформатора справедливы равенства
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="P_{1}=P_{2}" />, <Majax.Node inline formula="I_{1}U_{1}=I_{2}U_{2}" /> (5.3)
                        </CardText>
                        <CardText style={textStyle}>
                            ЭДС, индуцируемая в первичной и вторичной обмотке трансформатора,
                            оценивается по количеству витков и изменению магнитного потока, проходящего через один виток:
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="U_{1} ≈ ε_{1} = -N_{1}\frac{dΦ_{0}}{dt}" />, <Majax.Node inline formula="U_{2}≈ε_{2}=-N_{2}\frac{dΦ_{0}}{dt}" /> (5.4)
                        </CardText>
                        <CardText>
                            где <Majax.Node inline formula="N_{1}" /> и <Majax.Node inline formula="N_{2}" /> – число витков в первичной
                            и вторичной обмотке; <Majax.Node inline formula="Φ_{0}" /> – магнитный поток. Из формул (5.3) и (5.4) следует
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="K=\frac{U_{1}}{U_{2}}=\frac{N_{1}}{N_{2}}=\frac{I_{2}}{I_{1}}" /> (5.5)
                        </CardText>
                        <CardText style={textStyle}>
                            Здесь <Majax.Node inline formula="K" /> – это коэффициент трансформации и для понижающего
                            трансформатора (<Majax.Node inline formula="U_{2} < U_{1}" />) он всегда превышает единицу. Также
                            из формулы (5.5) следует, что число витков во вторичной обмотке
                            понижающего трансформатора будет меньше, чем число витков в
                            первичной обмотке при постоянном сечении проводников.
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="P_{1}=P_{2}" /><br />
                            <img src={img1} /><br />
                            Рис. 5.1. Схема трансформатора
                        </CardText>
                        <CardText style={textStyle}>
                            Трансформатору можно сопоставить электрическую цепь,
                            представленную на рис. 5.2, а, причем, кроме нагрузки потребителей <Majax.Node inline formula="R" />, в ней будет присутствовать и индуктивное
                            сопротивление <Majax.Node inline formula="X_{l}" /> обмоток трансформатора.
                            Наличие индуктивного сопротивления в трансформаторах приводит к дополнительным потерям за
                            счет реактивной мощности в цепи переменного тока. Однако эта
                            реактивная мощность может быть уменьшена путем введения в
                            электрическую цепь конденсатора (рис. 5.2, б).
                        </CardText>
                        <CardText className="text-center">
                            <img src={img2} /><br />
                            Рис. 5.2. Электрическая цепь для трансформатора:<br />
                            а – без компенсатора; б – с компенсатором в виде батареи конденсаторов
                        </CardText>
                        <CardText style={textStyle}>
                            Чтобы разобраться, каким образом действуют компенсаторные устройства, необходимо ввести понятие полного сопротивления цепи, или импеданса.
                            В общем случае импеданс представляет
                            собой комплексное число, действительная часть которого описывает активное сопротивление цепи <Majax.Node inline formula="R" />,
                            а мнимая часть – реактивное сопротивление цепи <Majax.Node inline formula="X" />:
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="Z=R+jX" /> (5.6)
                        </CardText>
                        <CardText>
                            где <Majax.Node inline formula="j" /> – мнимая единица. Реактивное сопротивление цепи определяется выражением
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="X=X_{L}-X_{C}" /> (5.7)
                        </CardText>
                        <CardText style={textStyle}>
                            Именно это соотношение «подсказывает», что для уменьшения реактивного сопротивления цепи,
                            обусловленного индуктивностью, необходимо ввести в цепь емкостное сопротивление
                            , <Majax.Node inline formula="X_{C}" /> близкое по значению к <Majax.Node inline formula="X_{L}" /> Знак
                            «–» в формуле (5.7) возникает вследствие разности фаз между током и напряжением на
                            индуктивном и емкостном сопротивлении (рис. 5.3). Известно, что на индуктивности ток по
                            фазе отстает от напряжения на <Majax.Node inline formula="π / 2" />, а на емкости ток по фазе опережает напряжение на <Majax.Node inline formula="π/2" />.
                            Таким образом, общая разность фаз для напряжений на индуктивности и емкости будет равна π,
                            что соответствует противоположному направлению векторов <Majax.Node inline formula="U_{L}" /> и <Majax.Node inline formula="U_{C}" /> (см. рис. 5.3, б).
                            Аналогичную векторную диаграмму можно построить и для сопротивлений (см. рис. 5.4, а).
                        </CardText>
                        <CardText className="text-center">
                            <img src={img3} /><br />
                            Рис. 5.3. Векторные диаграммы для токов и напряжений: <br />
                            а – для цепи с индуктивностью; б – для цепи с индуктивностью и емкостью
                        </CardText>
                        <CardText style={textStyle}>
                            Для наглядной интерпретации полного сопротивления цепи
                            в рассмотрение вводят понятие треугольника сопротивлений. Гипотенуза этого треугольника равна модулю импеданса:
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="|Z|=\sqrt{R^2+(X_{L}-X_{C})^2}" /> (5.8)
                        </CardText>
                        <CardText>
                            а катеты равны соответственно активному и реактивному сопротивлению цепи (рис. 5.4, а).
                        </CardText>
                        <CardText className="text-center">
                            <img src={img4} /><br />
                            Рис. 5.4. Векторные диаграммы: <br />
                            а – для сопротивлений; б – для мощностей
                        </CardText>
                        <CardText style={textStyle}>
                            Аналогичным образом можно ввести понятие полной мощности <Majax.Node inline formula="S" />, активной
                            мощности <Majax.Node inline formula="P" /> и реактивной
                            мощности <Majax.Node inline formula="Q" /> (рис. 5.4, б). Из рис. 5.4 видно, что реактивное сопротивление и
                            реактивная мощность будут тем меньше, чем меньше будет
                            угол <Majax.Node inline formula="ϕ" /> в треугольнике сопротивлений или в треугольнике мощностей.
                            Косинус этого угла называют коэффициентом мощности, по определению он равен
                        </CardText>
                        <CardText className="text-center">
                            <Majax.Node inline formula="cosϕ=\frac{R}{|Z|}=\frac{P}{S}" /> (5.9)
                        </CardText>
                        <CardText style={textStyle}>
                            Чем меньше <Majax.Node inline formula="cosϕ" /> тем больше потребляемая реактивная мощность 
                            устройствами. Кроме трансформаторов, потребителями реактивной мощности являются 
                            электродвигатели, сварочные аппараты, индукционные электроплиты и другое электротехническое
                            оборудование. Реактивная мощность таких устройств может быть
                            уменьшена за счет введения различных компенсаторов.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Theory;