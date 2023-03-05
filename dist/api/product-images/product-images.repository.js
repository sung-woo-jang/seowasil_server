"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImageRepository = void 0;
const typeorm_1 = require("typeorm");
const product_image_entity_1 = require("./entities/product-image.entity");
let ProductImageRepository = class ProductImageRepository extends typeorm_1.Repository {
    async registerImageUrl(imgurl) {
        const result = await this.create({
            storedFileName: imgurl,
        }).save();
        return result;
    }
};
ProductImageRepository = __decorate([
    (0, typeorm_1.EntityRepository)(product_image_entity_1.ProductImage)
], ProductImageRepository);
exports.ProductImageRepository = ProductImageRepository;
//# sourceMappingURL=product-images.repository.js.map