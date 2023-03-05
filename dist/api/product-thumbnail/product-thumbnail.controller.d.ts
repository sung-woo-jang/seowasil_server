/// <reference types="multer" />
import { ProductThumbnailService } from './product-thumbnail.service';
export declare class ProductThumbnailController {
    private readonly productThumbnailService;
    constructor(productThumbnailService: ProductThumbnailService);
    uploadProductThumbnailImage(file: Express.Multer.File): Promise<import("./entities/product-thumbnail.entity").ProductThumbnail>;
}
