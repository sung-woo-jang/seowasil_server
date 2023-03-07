import { Public } from './../../common/decorators/skip-auth.decorator';
import { CreateOrderDto } from './dto/create-order.dto';
import { Controller, Post, Get, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Public()
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  /**
   * @description 주문하기
   */
  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }

  /**
   * @description 주문 목록 가져오기
   */
  @Get()
  getOrderList() {
    return this.ordersService.getOrderList();
  }
}
