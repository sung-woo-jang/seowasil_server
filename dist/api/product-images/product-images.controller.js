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
exports.ProductImagesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const skip_auth_decorator_1 = require("../../common/decorators/skip-auth.decorator");
const sharp_pipe_1 = require("../../common/pipe/sharp.pipe");
const product_images_service_1 = require("./product-images.service");
let ProductImagesController = class ProductImagesController {
    constructor(productImagesService) {
        this.productImagesService = productImagesService;
    }
    async uploadProductImage(files) {
        return await this.productImagesService.uploadProductImage(files);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, skip_auth_decorator_1.Public)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10)),
    __param(0, (0, common_1.UploadedFiles)(sharp_pipe_1.SharpPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ProductImagesController.prototype, "uploadProductImage", null);
ProductImagesController = __decorate([
    (0, common_1.Controller)('product-images'),
    __metadata("design:paramtypes", [product_images_service_1.ProductImagesService])
], ProductImagesController);
exports.ProductImagesController = ProductImagesController;
//# sourceMappingURL=product-images.controller.js.map