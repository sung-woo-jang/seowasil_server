/// <reference types="multer" />
export declare class S3Service {
    private readonly s3;
    constructor();
    uploadImageToAWS_s3(file: Express.Multer.File, idx: number): Promise<string>;
}
