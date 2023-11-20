import { EstadoPedido } from "./EstadoPedido";
import { FormaPago } from "./FormaPago";
import { TipoEnvio } from "./TipoEnvio";


export default interface Pedido {
    id: number,
    fechaPedido: Date,
    horaEstimadaFinalizacion: Date,
    total: number,
    totalCosto: number,
    nroPedido: string,
    estado: EstadoPedido,
    tipoEnvio: TipoEnvio,
    formaPago: FormaPago,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
}