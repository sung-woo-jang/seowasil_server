import { CategoriesRepository } from './../categories/categories.repository';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsRepository } from './products.repository';
import { Product } from './entities/product.entity';
import { ProductImageRepository } from '../product-images/product-images.repository';
export declare class ProductsService {
    private productsRepository;
    private categoriesRepository;
    private productImageRepository;
    constructor(productsRepository: ProductsRepository, categoriesRepository: CategoriesRepository, productImageRepository: ProductImageRepository);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    getProductDetail(id: number): Promise<Product>;
    getProductList(): Promise<Product[]>;
    updateProduct(updateProductDto: UpdateProductDto, id: number): Promise<import("typeorm").UpdateResult>;
    deleteProduct(id: number): Promise<import("typeorm").UpdateResult>;
    restoreProduct(id: number): Promise<import("typeorm").UpdateResult>;
}
