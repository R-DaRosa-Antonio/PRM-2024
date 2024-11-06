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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const Category_entity_1 = require("src/entities/Category-entity");
const common_1 = require("@nestjs/common");
const category_service_1 = require("../services/category-service");
let CategoryController = class CategoryController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    async findById(id) {
        const found = await this.service.findById(id);
        if (!found) {
            throw new common_1.HttpException('Category not found', common_1.HttpStatus.NOT_FOUND);
        }
        return found;
    }
    create(category) {
        return this.service.save(category);
    }
    async update(id, category) {
        const found = await this.service.findById(id);
        if (!found) {
            throw new common_1.HttpException('Category not found', common_1.HttpStatus.NOT_FOUND);
        }
        category.id = found.id;
        return this.service.save(category);
    }
    async remove(id) {
        const found = await this.service.findById(id);
        if (!found) {
            throw new common_1.HttpException('Category not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.service.remove(id);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof Category_entity_1.Category !== "undefined" && Category_entity_1.Category) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_b = typeof Category_entity_1.Category !== "undefined" && Category_entity_1.Category) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "remove", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category-controller.js.map