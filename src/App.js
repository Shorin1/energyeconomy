import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Majax from 'react-mathjax';
import { HashRouter, Route } from 'react-router-dom';
import PowerLines from './components/powerLines/powerLines';
import { Container } from 'reactstrap';
import Contents from './components/contents/contents';
import Header from './components/header/header';
import EnergyLosses from './components/energyLosses/energyLosses';
import ElectricDrive from './components/electricDrive/electricDrive';
import ElectroInstallations from './components/electroInstallations/electroInstallations';
import LightingEnergy from './components/lightingEnergy/lightingEnergy';
import HouseElectro from './components/houseElectro/houseElectro';

function App() {
  return (
    <Container className="p-0" fluid>
      <HashRouter>
        <Header />
        <Majax.Provider>
          <Route exact path="/" component={Contents} />
          <Route path="/powerLines" component={PowerLines} />
          <Route path="/energyLosses" component={EnergyLosses} />
          <Route path="/electricDrive" component={ElectricDrive} />
          <Route path="/electroInstallations" component={ElectroInstallations} />
          <Route path="/lightingEnergy" component={LightingEnergy} />
          <Route path="/houseElectro" component={HouseElectro} />
        </Majax.Provider>
      </HashRouter>
    </Container>
  );
}

export default App;
