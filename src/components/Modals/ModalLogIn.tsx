import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import * as Yup from 'yup';
import {useFormik} from "formik";
import BotonRegistrarse from "../BotonesLog/BotonRegistrarse";
import { useNavigate } from "react-router-dom";
import { ClientLogin } from "../../types/ClientLogin";
import BotonLogin from "../BotonesLog/BotonLogin";

type ModalIngresoProps = {

    show: boolean;
    onHide:() => void;
    modalType: ModalType;
    cliente: ClientLogin;
}


const ModalLogin = ({show, onHide, cliente}: ModalIngresoProps) => {

    const navigate = useNavigate();

    function onLogIn() {
      window.localStorage.setItem('isLoggedIn', 'true');
      navigate('/homePageLogged')
    }

    function handleSaveUpdate(object: ClientLogin) {
      object.usuario
    }
  
    const validationSchema = () => {

        return Yup.object().shape({
          email: Yup.string().required('Por favor, ingrese una direccion de correo electronico'),
          contrasena: Yup.string().required('Por favor, ingrese una contraseña'),  
        });
    };


    const formik = useFormik({

        initialValues: cliente,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (object: ClientLogin) => handleSaveUpdate(object),        
    });
  
  
  
  
    return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="contenedorBotonesRegistrarseIngresar">
            <div id="fondoBotonesRegistrarseIngresar">
                <button className="botonParteSuperiorFormulario"><BotonRegistrarse/></button>
                <button className="botonParteSuperiorFormulario"><BotonLogin/></button>
            </div>
          </div>

          <Form onSubmit={formik.handleSubmit} id="contenedorCamposFormularioLogin">

            <div className="columnaLogin">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formik.values.usuario || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.usuario && formik.touched.usuario)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.usuario}
              </Form.Control.Feedback>
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="formContrasena">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                name="contrasena"
                type="password"
                value={formik.values.contrasena || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.contrasena && formik.touched.contrasena)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.contrasena}
              </Form.Control.Feedback>
            </Form.Group>
            </div>

          </Form>
        </Modal.Body>

        <Modal.Footer id="contenedorBotonRegistrarse">
          <Button onClick={() => {onHide(); onLogIn()}} type="submit" disabled={!formik.isValid} id="botonRegistrarse">
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalLogin