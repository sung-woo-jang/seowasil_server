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
exports.ProductThumbnailController = void 0;
const product_thumbnail_service_1 = require("./product-thumbnail.service");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const sharp_pipe_1 = require("../../common/pipe/sharp.pipe");
let ProductThumbnailController = class ProductThumbnailController {
    constructor(productThumbnailService) {
        this.productThumbnailService = productThumbnailService;
    }
    async uploadProductThumbnailImage(file) {
        return await this.productThumbnailService.uploadProductThumbnailImage(file);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)(sharp_pipe_1.SharpPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductThumbnailController.prototype, "uploadProductThumbnailImage", null);
ProductThumbnailController = __decorate([
    (0, common_1.Controller)('product-thumbnail'),
    __metadata("design:paramtypes", [product_thumbnail_service_1.ProductThumbnailService])
], ProductThumbnailController);
exports.ProductThumbnailController = ProductThumbnailController;
//# sourceMappingURL=product-thumbnail.controller.js.map