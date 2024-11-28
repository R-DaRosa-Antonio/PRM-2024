import { SupabaseService } from './../@libs/supabase/supabase.service';
import { Category } from '../categories/category-entity';
import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Movie } from './movie-entity';
import { MovieService } from './movie-service';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('movies')
export class MovieController {

    constructor(
        private readonly service: MovieService,
        private readonly SupabaseService: SupabaseService
    ) {}

    @Get()    
    findAll(@Query('categoryId') categoryId?: string): Promise<Movie[]> {
        if(categoryId){
            return this.service.findByCategory({
                id:Number(categoryId),
            } as Category)
        }

        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Movie> {

        const found = await this.service.findById(id);

        if(!found){
            throw new HttpException('Movie not found', HttpStatus.NOT_FOUND); 

        }


        return found;

    }
    @Post()
    create(@Body()Movie: Movie):Promise<Movie>{
        return this.service.save(Movie)
    }


    @Put(':id')
    async update
    
        (@Param('id', ParseUUIDPipe) id: string, 
        @Body() movie:Movie,
            ): Promise <Movie>{
        const found = await this.service.findById(id);

        if(!found){
            throw new HttpException('Movie not found', HttpStatus.NOT_FOUND); 

        }
        movie.id = found.id;

        return this.service.save(movie);

    }

    
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string):Promise<void>{
        const found = await this.service.findById(id);

        if(!found){
            throw new HttpException('Category not found', HttpStatus.NOT_FOUND); 

        }
        
        return this.service.remove(id);
    }

    @Post(':id/upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile()file: Express.Multer.File){

        if(!file){
            throw new HttpException('File not exist', HttpStatus.BAD_REQUEST); 

        }

        const result = await this.SupabaseService.upload(file);

        if(result){
            throw new HttpException('Unable to upload file', HttpStatus.INTERNAL_SERVER_ERROR);


        };

        return result;
    }

}
