import { Course } from "./course";

export class Degree {
    id: number;
    name: string;
    description: string;
    courses: Course[] = [];

}
