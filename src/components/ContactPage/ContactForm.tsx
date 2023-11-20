import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './ContactFormStyle.css';
import Button from 'react-bootstrap/Button';


function FormFloatingBasicExample() {
  return (
    <>
    <div>
    <FloatingLabel className="a" controlId="floatingInput" label="Nombre">
        <Form.Control type="nombre" placeholder="Nombre" />
      </FloatingLabel>
      <FloatingLabel className="a" controlId="floatingInput" label="Apellido">
        <Form.Control type="apellido" placeholder="Apellido" />
      </FloatingLabel>
      <FloatingLabel className="a" controlId="floatingInput" label="Correo Electronico">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel className="a" controlId="floatingInput" label="Motivo de contacto">
        <Form.Control type="motivo" placeholder="Descripcion" />
      </FloatingLabel>
    </div>
      <div id="b">
      <Button  variant='dark'>Enviar</Button>
      </div>
    </>
  );
}

export default FormFloatingBasicExample;