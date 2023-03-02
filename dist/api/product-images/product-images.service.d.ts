/// <reference types="multer" />
import { ProductImageRepository } from './product-images.repository';
export declare class ProductImagesService {
    private productImageRepository;
    private readonly s3;
    constructor(productImageRepository: ProductImageRepository);
    uploadProductImage(files: Array<Express.Multer.File>): Promise<import("./entities/product-image.entity").ProductImage>;
    uploadImageToAWS_s3(file: Express.Multer.File, idx: number): Promise<string>;
    registerImageUrl(imgurl: string[]): Promise<import("./entities/product-image.entity").ProductImage>;
}
