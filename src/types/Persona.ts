import Domicilio from "./Domicilio";
import Pedido from "./Pedido";
import { Rol } from "./Rol";
import Usuario from "./Usuario";

export default interface Persona{
    id: number,
    firstname: string,
    lastname: string,
    usuario: Usuario,
    telefono: string,
    password: string,
    email: string,
    legajo: string,
    domicilios: Domicilio[],
    pedidos: Pedido[],
    fechaNacimiento: string,
    rol: Rol,
    authorities: any
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
}