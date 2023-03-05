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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImagesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_images_repository_1 = require("./product-images.repository");
const s3_service_1 = require("../s3/s3.service");
let ProductImagesService = class ProductImagesService {
    constructor(productImageRepository, s3Service) {
        this.productImageRepository = productImageRepository;
        this.s3Service = s3Service;
    }
    async uploadProductImage(files) {
        const imageUrl = [];
        await Promise.all(files.map(async (file, idx) => {
            const key = await this.s3Service.uploadImageToAWS_s3(file, idx);
            imageUrl.push(key);
        }));
        const result = await this.productImageRepository.registerImageUrl(imageUrl);
        return result;
    }
};
ProductImagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_images_repository_1.ProductImageRepository)),
    __metadata("design:paramtypes", [product_images_repository_1.ProductImageRepository,
        s3_service_1.S3Service])
], ProductImagesService);
exports.ProductImagesService = ProductImagesService;
//# sourceMappingURL=product-images.service.js.map