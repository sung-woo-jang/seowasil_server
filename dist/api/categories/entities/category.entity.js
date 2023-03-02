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
exports.Category = void 0;
const product_entity_1 = require("../../products/entities/product.entity");
const common_entity_1 = require("../../../common/entities/common.entity");
const typeorm_1 = require("typeorm");
let Category = class Category extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '카테고리명', nullable: false }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        comment: '학명(Thuja occidentalis)',
        nullable: true,
    }),
    __metadata("design:type", String)
], Category.prototype, "scientific", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '과명(측백나무과)', nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (product) => product.category, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Category.prototype, "product", void 0);
Category = __decorate([
    (0, typeorm_1.Index)(['name'], { unique: true }),
    (0, typeorm_1.Entity)()
], Category);
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map