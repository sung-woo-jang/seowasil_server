/// <reference types="multer" />
import { ProductImageRepository } from './product-images.repository';
import { S3Service } from '../s3/s3.service';
export declare class ProductImagesService {
    private productImageRepository;
    private s3Service;
    constructor(productImageRepository: ProductImageRepository, s3Service: S3Service);
    uploadProductImage(files: Array<Express.Multer.File>): Promise<import("./entities/product-image.entity").ProductImage>;
}
