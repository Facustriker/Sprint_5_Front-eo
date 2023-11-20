import { Button } from "react-bootstrap";
import ModalLogIn from "./ModalLogIn";
import { useState } from "react";
import { ModalType } from "../../../types/ModalType";
import ModalRegistrarse from "./ModalRegistrarse";


const BotonesLoginRegistro = () => {
    
      const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
      const [mostrarModalRegistrarse, setMostrarModalRegistrarse] = useState(false);
      const [mostrarModalLogin, setMostrarModalLogin] = useState(false);

  const handleClick = (modal: ModalType) => {
    setModalType(modal);

    if (modal === ModalType.CREATE) {
      setMostrarModalRegistrarse(true);
    } else if (modal === ModalType.LOGIN) {
      setMostrarModalLogin(true);
    }
  };

  const handleCerrarModalRegistrarse = () => {
    setMostrarModalRegistrarse(false);
  };

  const handleCerrarModalLogin = () => {
    setMostrarModalLogin(false);
  };
  
    return (
        <>
        <div id="contenedorBotonesLogInRegisterHeader">
            <Button
                onClick={() => handleClick(ModalType.CREATE)}
                className="buttonIngresar">
                Registrarse
            </Button>
            <Button
                onClick={() => handleClick(ModalType.LOGIN)}
                className="buttonIngresar">
                Ingresar
            </Button>
        </div>
        
  
        {mostrarModalRegistrarse && (
          <ModalRegistrarse
            show={mostrarModalRegistrarse}
            onHide={handleCerrarModalRegistrarse}
          />
        )}
  
        {mostrarModalLogin && (
          <ModalLogIn
            show={mostrarModalLogin}
            onHide={handleCerrarModalLogin}
            modalType={modalType}
          />
        )}
      </>
  )
}

export default BotonesLoginRegistro