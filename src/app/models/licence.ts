import { Degree } from "./degree";
import { User } from "./user";

export class Licence {
    id: number;
    fechaMatricula: string;
    fechaInicio: string;
    fechaFin: string;
    statusRegistration: string;
    statusPayment: string;
    costo: string;
    descuento: string;
    periodoAcademico: string;
    turno: string;
    seccion: string;
    jornada: string;
    usuarioRegistro: string;
    fechaModificacion: string;
    comentarios: string;

    degree:Degree;

    userDTO:User;
}
