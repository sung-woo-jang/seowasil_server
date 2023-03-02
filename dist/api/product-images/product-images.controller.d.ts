/// <reference types="multer" />
import { ProductImagesService } from './product-images.service';
export declare class ProductImagesController {
    private readonly productImagesService;
    constructor(productImagesService: ProductImagesService);
    uploadProductImage(files: Array<Express.Multer.File>): Promise<import("./entities/product-image.entity").ProductImage>;
}
