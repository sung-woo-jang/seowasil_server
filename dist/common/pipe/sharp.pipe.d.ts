/// <reference types="multer" />
import { PipeTransform } from '@nestjs/common';
export declare class SharpPipe implements PipeTransform<Array<Express.Multer.File>> {
    transform(files: Array<Express.Multer.File>): Promise<Express.Multer.File[]>;
}
