import { numberWithCommas } from './../../common/utils/numberWithCommas';
import { UsersRepository } from './../users/users.repository';
import { ProductsRepository } from './../products/products.repository';
import { SmsService } from '../../sms/sms.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { getByteLength } from 'src/common/utils/getByteLength';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersRepository)
    private ordersRepository: OrdersRepository,
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
    private smsService: SmsService,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const { user_id, product_id } = createOrderDto;
    const user = await this.usersRepository.findOne({ id: user_id });
    const product = await this.productsRepository.findOne({ id: product_id });
    const order = this.ordersRepository.create({
      ...createOrderDto,
      user,
      product,
    });

    const content = [
      '서와실 농원 상품 주문 완료.',
      '\n',
      '입금 정보: 352-0654-1560-03 농협(주민창)',
      '\n',
      `상품명: ${product.title}`,
      '\n',
      `주문 금액: ${numberWithCommas(order.price)}원`,
      '\n',
      `주문해 주셔서 감사합니다.`,
      '\n',
      `입금 완료 후 입금 완료 연락(문자/통화)을 주시면 감사하겠습니다.`,
    ].join('');

    const byteLength = getByteLength(content);

    const result = await this.smsService.sendSMS(
      createOrderDto.phoneNumber,
      content,
      byteLength,
    );
    if (result) return await this.ordersRepository.save(order);
    else
      throw new HttpException(
        '알 수 없는 오류로 인해 서비스가 제한되었습니다. 다시 수행해주세요.',
        HttpStatus.BAD_REQUEST,
      );
  }

  async getOrderList() {
    const result = await this.ordersRepository.getOrderList();
    return result;
  }
}
