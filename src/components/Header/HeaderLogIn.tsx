import { useNavigate } from 'react-router-dom';
import '../../styles/HeaderStyle.css';


const HeaderLogIn = () => {

    const navigate = useNavigate();

    function onLogOut() {

        window.localStorage.removeItem('tokenLogIn');
        window.localStorage.setItem('isLoggedIn', "false");
        navigate('/');
    }


    return (
<>
<header>
        <div className="header">
                
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoPNG.png" 
                    id="logoBSArriba" alt="logoBuenSabor" onClick={() => navigate('/homePageLogged')} style={{cursor: 'pointer'}}/>
                
            <div> 
                <div id="arriba">
                    
                        <button className="buttonA" onClick={() => navigate('/homePageLogged')}>Home</button> 
                    
                    
                        <button className="buttonA" onClick={() => navigate('/products')}>Productos</button>
                    
                    
                        <button className="buttonA" onClick={() => navigate('/contact')}>Contactos</button>


                        <button className="buttonA" onClick={() => navigate('/administracion')}>Administracion</button>
                    
                    
                        <button className="buttonA" onClick={() => navigate('/ABMPersonas')}>Personas</button>

                </div>
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

export default HeaderLogIn;
