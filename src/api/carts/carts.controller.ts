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
import { Public } from 'src/common/decorators/skip-auth.decorator';

@Public()
@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  async createCart(@Body() createCartDto: CreateCartDto) {
    return await this.cartsService.createCart(createCartDto);
  }

  @Get('/:user_id')
  async getCartByUser(@Param('user_id', ParseIntPipe) userId: number) {
    return await this.cartsService.getCartByUser(userId);
  }

  @Patch('/:id')
  async updateCart() {
    return await this.cartsService.updateCart();
  }

  @Delete('/:id')
  async deleteCart(@Param('id', ParseIntPipe) id: number) {
    return await this.cartsService.deleteCart(id);
  }
}
