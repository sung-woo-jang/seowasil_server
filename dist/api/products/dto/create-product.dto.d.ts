import { Product } from '../entities/product.entity';
declare const CreateProductDto_base: import("@nestjs/common").Type<Pick<Product, "description" | "title" | "prevPrice" | "sellPrice" | "minAmount" | "status">>;
export declare class CreateProductDto extends CreateProductDto_base {
    category_id: number;
    productImage_id: number;
}
export {};
