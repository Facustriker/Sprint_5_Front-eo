import { Component } from 'react';
import axios from "axios";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { Form, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderLogIn from '../components/Header/HeaderLogIn';
import PageError403 from './PageError403';

const url = 'http://localhost:8080/api/v1/personas';
const urlID = 'http://localhost:8080/api/v1/personas/';


class ABMPersonas extends Component {


  state ={
    data:[],
    modalInsertar: false,
    modalEliminar:false,
    form:{
      id: '',
      nombre: '',
      apellido: '',
      telefono: '',
      password: '',
      legajo: '',
      email: '',
      rol: '',
      fechaAlta: '',
      tipoModal: '',
    },
    error: false,
  }

  

  peticionPost = async () => {
    const tokenLogIn = window.localStorage.getItem('tokenLogIn');

    const config = {
      headers: {
        'Authorization': `Bearer ${tokenLogIn}`
      }
    };

    try {
      await axios.post(url, this.state.form, config);
      this.modalInsertar();
      this.peticionGet();
      toast.success('Persona agregada exitosamente');
    } catch (error) {
      console.error('ERROR:', error);
      toast.error('ERROR: Verifique los datos ingresados');
    }
  }

  peticionGet = () => {
    const tokenLogIn = window.localStorage.getItem('tokenLogIn');

    const config = {
      headers: {
        'Authorization': `Bearer ${tokenLogIn}`
      }
    };

    axios.get(url, config).then(response => {
      this.setState({data: response.data});
    }).catch(error=>{
      toast.error('ERROR 403: Permiso denegado')
      this.setState({ error: true });
      console.log(error.message);
    })
  }

  peticionPut = async () => {
    const tokenLogIn = window.localStorage.getItem('tokenLogIn');

    const config = {
      headers: {
        'Authorization': `Bearer ${tokenLogIn}`
      }
    };

    try {
      await axios.put(urlID + this.state.form.id, this.state.form, config);
      this.modalInsertar();
      this.peticionGet();
      toast.success('Persona actualizada exitosamente');
    } catch (error) {
      console.error('ERROR:', error);
      toast.error('ERROR: Verifique los datos ingresados');
    }
  }

  peticionDelete = async () => {
    const tokenLogIn = window.localStorage.getItem('tokenLogIn');

    const config = {
      headers: {
        'Authorization': `Bearer ${tokenLogIn}`
      }
    };

    try {
      await axios.delete(urlID + this.state.form.id, config);
      this.setState({ modalEliminar: false });
      this.peticionGet();
      toast.success('Persona eliminada exitosamente');
    } catch (error) {
      console.error('ERROR:', error);
      toast.error('No se pudo realizar la operacion');
    }
  }

  seleccionarPersona=(persona:any)=>{
    this.setState({
      tipoModal: 'actualizar',
      form:{
      id: persona.id,
      nombre: persona.nombre,
      apellido: persona.apellido,
      telefono: persona.telefono,
      password: persona.password,
      legajo: persona.legajo,
      email: persona.email,
      rol: persona.rol,
      fechaAlta: persona.fechaAlta,
    }
    })
  }

  asignarTipoModal = (tipo: string) => {
    this.setState({
      form: {
        ...this.state.form,
        tipoModal: tipo,
      },
    });
  };

  modalInsertar = ()=>{
    this.setState({modalInsertar: !this.state.modalInsertar});
  }

  handleChange = async (e:any)=>{
    e.persist();
    await this.setState({
      form:{
      ...this.state.form,
      [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form)
  }

  componentDidMount() {
    this.peticionGet();
  }
  
  render(){
    const {form, error}=this.state;
    

    
    
    return (
      <>
        <HeaderLogIn />
        <div>
          {error ? (
            <PageError403 />
          ) : (
            <>
              <br />
              <a href="/administracion">
              <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/botonVolverHistoria14.jpg" 
            alt="btonVolver" id="imagenFlechitaADMIN" style={{cursor: 'pointer'}}/>
            </a>
      <br/><br/>
        <table className='table'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>Contraseña</th>
              <th>Email</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
          {((this.state.data as any) || []).map((persona:any) =>{
              return(
                <tr key={persona.id}>
                  <td>{persona.nombre}</td>
                  <td>{persona.apellido}</td>
                  <td>{persona.telefono}</td>
                  <td>{persona.password}</td>
                  <td>{persona.email}</td>
                  <td>{persona.rol}</td>
                  <td>
                    <button className='btn btn-primary' onClick={()=>{this.seleccionarPersona(persona); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                    {"   "}
                    <button className='btn btn-danger' onClick={()=>{this.seleccionarPersona(persona); this.setState({modalEliminar:true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>


    <Modal isOpen={this.state.modalInsertar}>
        <ModalHeader style={{display: 'block'}}>
          <button onClick={()=>this.modalInsertar()} style={{float: 'right'}}>x</button>
        </ModalHeader>
        <ModalBody>
          <div id="contenedorBotonesRegistrarseIngresar">
            <div id="fondoBotonesRegistrarseIngresar">
                <button className="botonParteSuperiorFormulario">Registro personas</button>
            </div>
          </div>

          <Form id="contenedorCamposFormulario">

            <div className="columna">
            <FormGroup className="mb-3" controlId="formNombre">
              <label htmlFor="firstname">Nombre</label>
              <input type="text" name='nombre' id='nombre' onChange={this.handleChange} value={form?form.nombre: ''}/>
              <br />
            </FormGroup>
            


            <FormGroup className="mb-3" controlId="formPassword">
              <label htmlFor="firstname">Contraseña</label>
              <input type="text" name='password' id='password' onChange={this.handleChange} value={form?form.password: ''}/>
              <br />
            </FormGroup>


            <FormGroup className="mb-3" controlId="formEmail">
              <label htmlFor="firstname">E-mail</label>
              <input type="text" name='email' id='email' onChange={this.handleChange} value={form?form.email: ''}/>
              <br />
            </FormGroup>

            <FormGroup className="mb-3" controlId="formApellido">
              <label htmlFor="firstname">Apellido</label>
              <input type="text" name='apellido' id='apellido' onChange={this.handleChange} value={form?form.apellido: ''}/>
              <br />
            </FormGroup>

            <FormGroup className="mb-3" controlId="formTelefono">
              <label htmlFor="firstname">Telefono</label>
              <input type="number" name='telefono' id='telefono' onChange={this.handleChange} value={form?form.telefono: ''}/>
              <br />
            </FormGroup>

            <FormGroup className="mb-3" controlId="formRol">
              <label htmlFor="firstname">Rol</label>
              <input type="text" name='rol' id='rol' onChange={this.handleChange} value={form?form.rol: ''}/>
              <br />
            </FormGroup>

          </div>
          </Form>
        </ModalBody>

        <ModalFooter id="contenedorBotonRegistrarse">
          {this.state.form.tipoModal=='insertar'?
          <button id="botonRegistrarse" onClick={()=>{this.modalInsertar(); this.peticionPost()}}>
            Registrarse
          </button>: <button id="botonRegistrarse" className='btn btn-primary' onClick={()=>this.peticionPut()}>
            Actualizar
          </button>
          }
        </ModalFooter>
      </Modal>

      <Modal isOpen={this.state.modalEliminar}>
        <ModalBody>
            Esta seguro que desea eliminar la persona {form && form.nombre} ?
        </ModalBody>
        <ModalFooter>
            <button className='btn btn-danger' onClick={()=>this.peticionDelete()}>Si</button>
            <button className='btn btn-secundary' onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
        </>
      )}
    </div>
  </>
);
}        
}

export default ABMPersonas;
