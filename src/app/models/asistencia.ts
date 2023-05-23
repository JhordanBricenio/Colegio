import { User } from "./user";

export class Asistencia {
    id: number;
    fecha: Date;
    presente: number;
    //ausente: number;
    //justificado:number;
   // tardanza:number;
    user: User;

}
