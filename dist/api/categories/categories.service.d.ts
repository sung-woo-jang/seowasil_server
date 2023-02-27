import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesRepository } from './categories.repository';
import { Category } from './entities/category.entity';
export declare class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: CategoriesRepository);
    createCategory(createCategoryDto: CreateCategoryDto): Promise<{
        name: string;
        scientific: string;
        department: string;
    } & Category>;
    getCategoryList(): Promise<Category[]>;
    getCategory(id: number): Promise<Category[]>;
    updateCategory(updateCategoryDto: UpdateCategoryDto, id: number): Promise<import("typeorm").UpdateResult>;
    deleteCategory(id: number): Promise<import("typeorm").UpdateResult>;
}
