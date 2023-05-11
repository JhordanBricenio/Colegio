import { Course } from "./course";
import { Payment } from "./payment";
import { Role } from "./role";
import { Servicio } from "./servicio";
import { Workshop } from "./workshop";

export class User {
    id: number;
    name: string;
    lastname: string;
    dni: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    photo: string;
    father: string;
    roles: Role[]= [];
    payments: Payment[] = [];
    // tags: Tag[] = [];
    // degrees: Degree[] = [];
     services: Servicio[] = [];
     courses:Course[] = [];
     workshops:Workshop[]= [];
}
