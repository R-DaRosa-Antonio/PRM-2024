import { Category } from "./Category-entity";
export declare class Movie {
    id: string;
    title: string;
    description: string;
    ageRating: string;
    poster: string;
    categories: Category[];
}
