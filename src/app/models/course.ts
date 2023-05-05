import { Degree } from "./degree";
import { User } from "./user";

export class Course {
    id: number;
    name: string;
    description: string;
    credits: number;
    hours: number;
    semester: number;
    photo: string;
    users: User[] = [];
    degrees: Degree[] = [];

}
