import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  // 주문 정보 생성

  // 주문 정보 가져오기

  // 주문 정보 상세 가져오기

  /* 특정 상태에서만 수정/삭제 가능 */
  // 주문 정보 수정

  // 주문 정보 삭제
}
