import axios from "axios";
import { useFormik } from "formik"
import { useState } from "react";
import { Button } from "react-bootstrap";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  user: Yup.string().required('Nombre de usuario'),
  password: Yup.string().required('Requerido').min(6,"Cotraseña de 6 caracteres minimo"),
})

const IngresoModal = () => {

  const formik= useFormik({

    //Lo que necesita el formulario
    initialValues:{
        user:'',
      password:'',
    },

    //Validacion con YUP
    validationSchema: validationSchema,

    //Lo que sucede al enviar el formulario, una alerta
    onSubmit:(values)=> {
      alert(JSON.stringify(values,null,2));
      //console.log("Valores del formulario",values);
    }

  });


  const [datos,setDatos] = useState({
    user:"",
    password:""
  });

  const handleInputChange = (e: any) =>{
    let {name, value} = e.target;
    let newDatos =  {...datos, [name]: value};
    setDatos(newDatos);
  }

  const handleSubmit = async(e: any) =>{
    e.preventDefault();
    if(!e.target.checkValidity()){
        console.log("No enviar");
    } else {
        let res = await axios.post("http://localhost:8080/auth/login",datos);
        console.log(res.data);
    }
}

  return (
    <>
        <div className="border rounded-3 p-5 mt-5">
          <form onSubmit={handleSubmit}>

            {/* NOMBRE*/ }
          <div className="mb-3 mt-3">
            <label htmlFor="user" className="form-label">Usuario</label> 
            <input 
            type="text" 
            className="form-control"
            id="user"
            name="user"
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            value={datos.user}
            
            />
            {formik.touched.user && formik.errors.user ?(
              <div className="text-danger"> {formik.errors.user }</div>
            ) : null
          }

          </div>



            {/* PASSWORD*/ }

          <div className="mb-3 mt-3">
            <label htmlFor="password" className="form-label">Password</label> 
            <input 
            type="password" 
            className="form-control"
            id="password"
            name="password"
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            value={datos.password}
            
            />
            {formik.touched.password && formik.errors.password ?(
              <div className="text-danger"> {formik.errors.password }</div>
            ) : null
          }

          </div>

                <Button className="dark" type="submit">Ingresar</Button>

          </form>
          
        </div>
    </>
  )
}

export default IngresoModal
