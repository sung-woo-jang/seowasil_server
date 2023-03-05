/// <reference types="multer" />
import { S3Service } from '../s3/s3.service';
import { ProductThumbnailRepository } from './product-thumbnail.respsitory';
export declare class ProductThumbnailService {
    private productThumbnailRepository;
    private s3Service;
    constructor(productThumbnailRepository: ProductThumbnailRepository, s3Service: S3Service);
    uploadProductThumbnailImage(file: Express.Multer.File): Promise<import("./entities/product-thumbnail.entity").ProductThumbnail>;
}
