import { Movie } from '../entities/movie-entity';
import { MovieService } from '../services/movie-service';
export declare class MovieController {
    private service;
    constructor(service: MovieService);
    findAll(categoryId?: string): Promise<Movie[]>;
    findById(id: string): Promise<Movie>;
    create(Movie: Movie): Promise<Movie>;
    update(id: string, movie: Movie): Promise<Movie>;
    remove(id: string): Promise<void>;
}
