import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(createProductDto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
    getProductDetail(id: number): Promise<import("./entities/product.entity").Product>;
    getProductList(): Promise<import("./entities/product.entity").Product[]>;
    updateProduct(updateProductDto: UpdateProductDto, id: number): Promise<import("typeorm").UpdateResult>;
    deleteProduct(id: number): Promise<import("typeorm").DeleteResult>;
    restoreProduct(id: number): Promise<import("typeorm").UpdateResult>;
}
