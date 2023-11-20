export default interface Domicilio {
    id: number,
    calle: string,
    numero: number,
    localidad: string,
    codigoPostal: number,
    numeroDpto: number,
    pisoDpto: number,
    fechaAlta: Date,
    fechaModificacion: Date,
    fechaBaja: Date,
}