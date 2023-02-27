import { OrderDetail } from './../../order-details/entities/order-detail.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Category } from 'src/api/categories/entities/category.entity';
import { ProductImage } from 'src/api/product-images/entities/product-image.entity';
export declare enum Status {
    SALE = "\uD310\uB9E4\uC911",
    PREPARING = "\uC0C1\uD488 \uC900\uBE44\uC911",
    SOLDOUT = "\uD488\uC808"
}
export declare class Product extends CommonEntity {
    title: string;
    description: string;
    prevPrice: number;
    sellPrice: number;
    minAmount: number;
    status: Status;
    viewCount: number;
    category: Category;
    orderDetail: OrderDetail[];
    productImageUrl: ProductImage;
}
