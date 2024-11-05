"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const typeorm_1 = require("typeorm");
const Category_entity_1 = require("./Category-entity");
let Movie = class Movie {
};
exports.Movie = Movie;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Movie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], Movie.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'age-rating', length: 2, nullable: false }),
    __metadata("design:type", String)
], Movie.prototype, "ageRating", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Movie.prototype, "poster", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Category_entity_1.Category, { eager: true }),
    (0, typeorm_1.JoinTable)({
        name: 'movie_category'
    }),
    __metadata("design:type", Array)
], Movie.prototype, "categories", void 0);
exports.Movie = Movie = __decorate([
    (0, typeorm_1.Entity)('movies')
], Movie);
//# sourceMappingURL=movie-entity.js.map