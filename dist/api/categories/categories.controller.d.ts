import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    createCategory(createCategoryDto: CreateCategoryDto): Promise<{
        name: string;
        scientific: string;
        department: string;
    } & import("./entities/category.entity").Category>;
    getCategoryList(): Promise<import("./entities/category.entity").Category[]>;
    getCategory(id: number): Promise<import("./entities/category.entity").Category[]>;
    updateCategory(updateCategoryDto: UpdateCategoryDto, id: number): Promise<import("typeorm").UpdateResult>;
    deleteCategory(id: number): Promise<import("typeorm").DeleteResult>;
}
