import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Acordeon from './Accordion';

function TabSubHeader() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="ProductosInsumos" title="Productos e Insumos">
        Tab content for Home
      </Tab>
      
      <Tab eventKey="ConfigParam" title="Configuracion de Parametros">
            <Acordeon/>
      </Tab>
    </Tabs>
  );
}

export default TabSubHeader;