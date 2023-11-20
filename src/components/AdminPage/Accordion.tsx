import Accordion from 'react-bootstrap/Accordion';
import RubroArticuloInsumoTable from '../Tables/RubroArticuloInsumoTable';
import UnityTable from '../Tables/UnityTable';
import RubroArticuloManufacturadoTable from '../Tables/RubroArticuloManufacturadoTable';

function Acordeon() {
  return (
    <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Categorias de Insumos</Accordion.Header>
        <Accordion.Body>
             <RubroArticuloInsumoTable/>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Categorias de Productos</Accordion.Header>
        <Accordion.Body>
            <RubroArticuloManufacturadoTable/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Unidades de Medida</Accordion.Header>
        <Accordion.Body>
            <UnityTable/>
        </Accordion.Body>
        
      </Accordion.Item>
    </Accordion>
  );
}

export default Acordeon;