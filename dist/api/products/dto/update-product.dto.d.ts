import { Status } from '../entities/product.entity';
export declare class UpdateProductDto {
    title: string;
    description: string;
    prevPrice: number;
    sellPrice: number;
    minAmount: number;
    status: Status;
}
