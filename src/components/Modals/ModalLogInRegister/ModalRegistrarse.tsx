import { useFormik } from "formik";
import * as yup from "yup";
import { Form, Modal } from "react-bootstrap";
import { AuthService } from "../../../services/AuthService";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ModalRegistrarse: React.FC = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  
  const validationSchema = yup.object().shape({
    username: yup.string().required("Este campo es obligatorio"),
    password: yup.string().required("Este campo es obligatorio"),
    firstname: yup.string().required("El nombre es obligatorio"),
    lastname: yup.string().required("El apellido es obligatorio"),
    telefono: yup.string().required("El telefono es obligatorio"),
    email: yup
      .string()
      .email("Formato de correo electrónico inválido")
      .required("Este campo es obligatorio"),
    direccion: yup.string().required("La direccion es obligatoria"),
    departamento: yup.string().required("El departamento es obligatorio"),
    fechaNacimiento: yup.string().required("La fecha de nacimiento es obligatoria"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      telefono: '',
      password: '',
      email: '',
      direccion: '',
      departamento: '',
      fechaNacimiento: ''
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const token = await AuthService.register(values);
        console.log("Registro realizado. Token:", token);
        toast.success("Registro realizado");
        handleHide();
        navigate("/");
      } catch (error) {
        toast.error('Revise los datos ingresados');
        console.error("Error al registrarse");
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
         

          <Form.Group controlId="firstname">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="firstname"
              type="text"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.firstname && formik.touched.firstname)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstname}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.username && formik.touched.username
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.username}
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
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          

          <Form.Group controlId="lastname">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              name="lastname"
              type="text"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.lastname && formik.touched.lastname
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastname}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.email && formik.touched.email)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="fechaNacimiento">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              name="fechaNacimiento"
              type="text"
              value={formik.values.fechaNacimiento}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.fechaNacimiento && formik.touched.fechaNacimiento
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.fechaNacimiento}
            </Form.Control.Feedback>
          </Form.Group>

    

          <Form.Group controlId="telefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              name="telefono"
              type="text"
              value={formik.values.telefono}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.telefono && formik.touched.telefono
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.telefono}
            </Form.Control.Feedback>
          </Form.Group>

          

          <Form.Group controlId="direccion">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              name="direccion"
              type="text"
              value={formik.values.direccion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.direccion && formik.touched.direccion)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.direccion}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="departamento">
            <Form.Label>Departamento</Form.Label>
            <Form.Control
              name="departamento"
              type="text"
              value={formik.values.departamento}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.departamento && formik.touched.departamento)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.departamento}
            </Form.Control.Feedback>
          </Form.Group>
          
        

        
          <Modal.Footer className="mt-4" id="contenedorBotonRegistrarse">
            <Button variant="primary" type="submit" disabled={!formik.isValid} id="botonRegistrarse">
              Registrarse
            </Button>
          </Modal.Footer>

        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalRegistrarse;