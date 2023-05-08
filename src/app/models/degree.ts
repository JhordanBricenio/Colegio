import { Course } from "./course";

export class Degree {
    id: number;
    name: string;
    description: string;
    icon: string;
    courses: Course[] = [];

}
