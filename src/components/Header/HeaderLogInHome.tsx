import { useNavigate } from 'react-router-dom';
import '../../styles/HeaderStyle.css';

const HeaderLogInHome = () => {

    const navigate = useNavigate();

    function onLogOut() {

        window.localStorage.removeItem('tokenLogIn');
        navigate('/');
    }


    return (
<>
<header>
        <div className="header">
                
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoPNG.png" 
                    id="logoBSArriba" alt="logoBuenSabor" onClick={() => navigate('/')} style={{cursor: 'pointer'}}/>
                
            <div> 
                <div id="arriba">
                    
                        <button className="buttonA" onClick={() => navigate('/')}>Home</button> 
                    
                    
                        <button className="buttonA" onClick={() => navigate('/productos')}>Productos</button>
                    
                    
                        <button className="buttonA" onClick={() => navigate('/contactos')}>Contactos</button>


                        <button className="buttonA" onClick={() => navigate('/administracion')}>Administracion</button>
                    
                </div>
            </div>
            <div className="barraBuscar">
                <input type="text" className="cajaBuscar" placeholder="Buscar..."/>
                
                    <button type="submit" className="botonLupa"><img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoLupa.jpg" 
                        alt="submit" className="imagenLupa"/></button>
                
            </div>
            <div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Usuario
                </button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={() => navigate('/perfil')}>Perfil</li>
                    <li className="dropdown-item" onClick={() => navigate('/misCompras')}>Mis Compras</li>
                    <li className="dropdown-item" onClick={onLogOut}>LogOut</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="lineaBordo"/>
</header>

</>

    )

} 

export default HeaderLogInHome;
