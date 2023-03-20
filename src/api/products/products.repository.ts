import { EntityRepository, Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {
  async getProductDetail(id: number) {
    const query = this.createQueryBuilder('product');

    await query
      .update()
      .set({ viewCount: () => 'view_count + 1' })
      .where('id =:id', { id })
      .execute();

    const result = await query
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('product.productImageUrl', 'productImageUrl')
      .leftJoinAndSelect(
        'product.productDetailImagesUrl',
        'productDetailImagesUrl',
      )
      .select([
        'product.id',
        'product.title',
        'product.description',
        'product.prevPrice',
        'product.sellPrice',
        'product.minAmount',
        // 'product.status',
        'product.viewCount',
        'category.name',
        'productImageUrl.storedFileName',
        'productDetailImagesUrl.storedFileName',
      ])
      .where('product.id = :id', { id })
      .getOne();

    return result;
  }

  async getProductList() {
    const query = this.createQueryBuilder('product');
    query
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('product.productImageUrl', 'productImageUrl')
      .select([
        'product.id',
        'product.title',
        'product.description',
        'product.sellPrice',
        'product.createdAt',
        'productImageUrl.storedFileName',
        'category.name',
      ])
      .where('product.isBest = :isBest', { isBest: false });
    const result = await query.getMany();
    return result;
  }
}
