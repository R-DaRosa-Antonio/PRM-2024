import { Category } from "src/entities/category-entity";
import { Repository } from "typeorm";
export declare class CategoryService {
    private repository;
    constructor(repository: Repository<Category>);
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category>;
    save(category: Category): Promise<Category>;
    remove(id: number): Promise<void>;
}
