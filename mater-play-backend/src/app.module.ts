import { Category } from 'src/entities/Category-entity';
import { Module, Controller } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MovieService } from './services/movie-service';
import { MovieController} from './controllers/movie-controller';
import { CategoryController} from './controllers/category-controller';
import { Movie } from './entities/movie-entity';
import { CategoryService } from './services/category-service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      entities: [Category, Movie],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Category, Movie]),
  ],
  controllers: [CategoryController, MovieController],
  providers: [CategoryService,MovieService],
})
export class AppModule {}
