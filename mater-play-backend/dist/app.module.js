"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const Category_entity_1 = require("./entities/Category-entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const movie_service_1 = require("./services/movie-service");
const movie_controller_1 = require("./controllers/movie-controller");
const category_controller_1 = require("./controllers/category-controller");
const movie_entity_1 = require("./entities/movie-entity");
const category_service_1 = require("./services/category-service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                database: process.env.DB_NAME,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                entities: [Category_entity_1.Category, movie_entity_1.Movie],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([Category_entity_1.Category, movie_entity_1.Movie]),
        ],
        controllers: [category_controller_1.CategoryController, movie_controller_1.MovieController],
        providers: [category_service_1.CategoryService, movie_service_1.MovieService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map