import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Acordeon from './Accordion';
import AccordionProductInsumo from './AccordionProductInsumo';

function TabSubHeader() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="ProductosInsumos" title="Productos e Insumos">
            <AccordionProductInsumo/>
      </Tab>
      
      <Tab eventKey="ConfigParam" title="Configuracion de Parametros">
            <Acordeon/>
      </Tab>
    </Tabs>
  );
}

export default TabSubHeader;