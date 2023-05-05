import { Tag } from "./tag";

export class Blog {
    id: number;
    title: string;
    content: string;
    image: string;
    date: string;
    author: string;
    tags: Tag[]= [];

}
