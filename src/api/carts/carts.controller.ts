import { CreateCartDto } from './dto/create-cart.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CartsService } from './carts.service';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  async createCart(@Body() createCartDto: CreateCartDto) {
    return await this.cartsService.createCart(createCartDto);
  }

  @Get('/:id')
  async getCartDetail(@Param('id', ParseIntPipe) id: number) {
    return await this.cartsService.getCartDetail(id);
  }

  @Get()
  async getCartList() {
    return await this.cartsService.getCartList();
  }

  @Patch('/:id')
  async updateCart() {
    return await this.cartsService.updateCart();
  }

  @Delete('/:id')
  async deleteCart() {
    return await this.cartsService.deleteCart();
  }
}
