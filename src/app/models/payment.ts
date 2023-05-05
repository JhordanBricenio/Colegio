import { User } from "./user";

export class Payment {
    id: number;
    name: string;
    description: string;
    amount: number;
    date: string;
    status: string;
    user: User;
    // degrees: Degree[] = [];
}
