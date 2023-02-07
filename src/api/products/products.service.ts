import { ProductImageRepository } from './../product-images/product-images.repository';
import { CategoriesRepository } from './../categories/categories.repository';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Product } from './entities/product.entity';
import * as AWS from 'aws-sdk';
import { extname } from 'path';

@Injectable()
export class ProductsService {
  private readonly s3: AWS.S3;
  constructor(
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: CategoriesRepository,
    @InjectRepository(ProductImageRepository)
    private productImageRepository: ProductImageRepository,
  ) {
    AWS.config.update({
      region: 'ap-northeast-2',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
    });
    this.s3 = new AWS.S3();
  }

  async createProduct(
    createProductDto: CreateProductDto,
    files: Array<Express.Multer.File>,
  ): Promise<Product> {
    const category = await this.categoriesRepository.findOne({
      id: createProductDto.category_id,
    });

    const product = await this.productsRepository.save({
      ...createProductDto,
      category,
    });

    await Promise.all(
      files.map(async (file: Express.Multer.File, idx: number) => {
        const key = await this.uploadImg(file, idx);
        await this.registerImageUrl(key, product);
      }),
    );

    return this.getProductDetail(product.id);
  }

  async uploadImg(file: Express.Multer.File, idx: number): Promise<string> {
    const key = `${idx}-${Date.now()}${extname(file.originalname)}`;
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      ACL: 'private',
      Key: key,
      Body: file.buffer,
    };

    return new Promise((resolve, reject) => {
      this.s3.putObject(params, (err) => {
        if (err) reject(err);
        resolve(key);
      });
    });
  }

  async registerImageUrl(imgurl: string, product: Product) {
    const result = await this.productImageRepository
      .create({
        storedFileName: imgurl,
        product,
      })
      .save();
    return result;
  }

  /*********************************************************** */

  async getProductDetail(id: number) {
    const query = this.productsRepository.createQueryBuilder('product');

    await query
      .update()
      .set({ viewCount: () => 'view_count + 1' })
      .where('id =:id', { id })
      .execute();

    const result = await query
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('product.productImageUrl', 'productImageUrl')
      // .select([
      //   'product.title',
      //   'product.description',
      //   'product.prevPrice',
      //   'product.sellPrice',
      //   'product.minAmount',
      //   'product.status',
      //   'product.viewCount',
      //   'category.name',
      //   'productImageUrl.storedFileName',
      // ])
      .where('product.id = :id', { id })
      .getOne();

    return result;
  }

  async getProductList() {
    return await this.productsRepository.find({
      select: ['title', 'description'],
      relations: ['category_id'],
    });
  }

  async updateProduct(updateProductDto: UpdateProductDto, id: number) {
    const board = await this.productsRepository
      .createQueryBuilder('product')
      .update(Product)
      .set({ ...updateProductDto })
      .where('id = :id', { id })
      .execute();
    return board;
  }

  async deleteProduct(id: number) {
    return await this.productsRepository.softDelete(id);
  }

  async restoreProduct(id: number) {
    return await this.productsRepository.restore(id);
  }
}
