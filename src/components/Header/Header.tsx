import { useNavigate } from 'react-router-dom';
import '../../styles/HeaderStyle.css';

import BotonesLoginRegistro from '../Modals/ModalLogInRegister/BotonesLoginRegistro';

const Header = () => {

const navigate = useNavigate();


    return (

        
<>
<header>
        <div className="header">
                
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoPNG.png" 
                    id="logoBSArriba" alt="logoBuenSabor" onClick={() => navigate('/')}/>
                
            <div> 
                <div id="arriba">
                    
                        <button className="buttonA" onClick={() => navigate('/')}>Home</button> 
                    
                        <button className="buttonA" onClick={() => navigate('/products')}>Productos</button>
                
                        <button className="buttonA" onClick={() => navigate('/contact')}>Contactos</button>

                </div>
            </div>
            <div className="barraBuscar">
                <input type="text" className="cajaBuscar" placeholder="Buscar..."/>
                
                    <button type="submit" className="botonLupa"><img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoLupa.jpg" 
                        alt="submit" className="imagenLupa"/></button>
                
            </div>
            <div><BotonesLoginRegistro/></div>
        </div>
        <div className="lineaBordo"/>
</header>
    
   
</>

    )

} 

export default Header;
