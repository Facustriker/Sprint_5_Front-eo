import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Modal } from "react-bootstrap";
import { AuthService } from "../../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const ModalLogIn: React.FC = () => {
  
  const navigate = useNavigate();
  const [show, setShow] = useState(true);


  const validationSchema = Yup.object({
    email: Yup.string().required("El correo electrónico es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const tokenLogIn = await AuthService.login(values);
        console.log("Inicio de sesión exitoso. Token:", tokenLogIn);
        navigate('/homePageLogged');
        toast.success('Inicio de sesión exitoso');
      } catch (error) {
        toast.error('Revise los datos ingresados');
        console.error("Error al iniciar sesión:");
      }
    },
  });

  const handleHide = () => {
    setShow(false);
  };

  return (
<Modal
      show={show}
      onHide={handleHide}
      centered
      backdrop="static"
      className="modal-xl"
    >
  <Modal.Header closeButton>
    <Modal.Title></Modal.Title>
  </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit} id="contenedorCamposFormulario">
          <Form.Group controlId="email">
            <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                name="email"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(
                formik.errors.email && formik.touched.email
                )}/>
                <Form.Control.Feedback type="invalid">
                {formik.errors.email}
                </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(
                formik.errors.password && formik.touched.password
                )}/>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
          </Form.Group>

          <Modal.Footer className="mt-4" id="contenedorBotonRegistrarse">
            <Button variant="primary" type="submit" disabled={!formik.isValid} id="botonRegistrarse">
              Iniciar sesion
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalLogIn;