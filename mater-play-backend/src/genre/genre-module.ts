import { Module } from "@nestjs/common";
import { GenreService } from "./genre-service";
import { GenreController } from "./genre-controller";
import { Genre} from "./genre-entity";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    imports:[TypeOrmModule.forFeature([Genre])],
    providers:[GenreService],
    controllers: [GenreController],

})
export class GenreModule{}
