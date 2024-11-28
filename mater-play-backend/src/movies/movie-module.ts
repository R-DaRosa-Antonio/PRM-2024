import { SupabaseModule } from './../@libs/supabase/supabase.module';
import { MovieController } from './movie-controller';
import { Module} from "@nestjs/common";
import { MovieService } from "./movie-service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/categories/category-entity';
import { Movie } from './movie-entity';


@Module({
    imports:[TypeOrmModule.forFeature([Category, Movie])], SupabaseModule,
    providers:[MovieService],
    controllers: [MovieController],

})
export class MovieModule{}