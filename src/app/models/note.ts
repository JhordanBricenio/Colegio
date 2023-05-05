import { Course } from "./course";

export class Note {
    id: number;
    name: string;
    description: string;
    note: number;
    date : string;
    courses: Course[] = [];
    // degrees: Degree[] = [];

}
