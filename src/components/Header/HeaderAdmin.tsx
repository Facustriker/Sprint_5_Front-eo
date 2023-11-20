import { useNavigate } from "react-router-dom"


const HeaderAdmin = () => {

    const navigate = useNavigate();

  return (
    <>
        <header>        
        <div className="header">
                <div id="logo"> 
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoPNG.png" 
                    id="logoBSAdmin" alt="logoBuenSabor" onClick={() => navigate('/homePageLogged')}/>
                </div>
            <div> 
                <div id="arriba">
                    <label id="buttonAdmin">Administracion</label>
                </div>
            </div>
            <div id="contenedorPerfilCarrito">   
                <div id="contenedorPerfil">     
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/personitaPerfil.png" 
                    id="personitaPerfilImagen"/>        
                    <button id="botonMiPerfil">Mi perfil</button>   
                </div>
            </div>
        </div>
        <div className="lineaBordo"></div> 
    </header>
    </>
  )
}

export default HeaderAdmin
