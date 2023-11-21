import Accordion from 'react-bootstrap/Accordion';
import ArticuloInsumoTable from '../Tables/ArticuloInsumoTable';
import ArticuloManufacturadoTable from '../Tables/ArticuloManufacturadoTable';


function AcordeonProductInsumo() {
  return (
    <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Lista de productos</Accordion.Header>
        <Accordion.Body>
            <ArticuloManufacturadoTable/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Lista de insumos</Accordion.Header>
        <Accordion.Body>
            <ArticuloInsumoTable/>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

export default AcordeonProductInsumo;