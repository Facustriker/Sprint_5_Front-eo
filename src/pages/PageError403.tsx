import { useNavigate } from "react-router-dom"
import '../styles/PageError.css'

const PageError403 = () => {

    const navigate = useNavigate();

  return (
    <>
    <div id="contenedorPalabrasError">
        <h1 id="textoError403">ERROR 403</h1>
        <h1 id="textoPermisoDenegado">Permiso denegado</h1>
        <button onClick={() => navigate('/homePageLogged')} id="botonRegistrarse">Volver a Inicio</button>
    </div>
    </>
  )
}

export default PageError403