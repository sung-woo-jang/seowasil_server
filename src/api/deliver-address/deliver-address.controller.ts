import { Public } from './../../common/decorators/skip-auth.decorator';
import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { DeliverAddressService } from './deliver-address.service';

@Public()
@Controller('deliver-address')
export class DeliverAddressController {
  constructor(private readonly deliverAddressService: DeliverAddressService) {}

  // 사용자별 배송지 등록
  @Post()
  async createAddress(
    @Body() createDeliverAddressDto: CreateDeliverAddressDto,
  ) {
    return this.deliverAddressService.createAddress(createDeliverAddressDto);
  }

  // 사용자별 배송지 목록 가져오기
  @Get('/:user_id')
  async getDeliveryAddressesListByUserId(
    @Param('user_id', ParseIntPipe) user_id: number,
  ) {
    return await this.deliverAddressService.getDeliveryAddressesListByUserId(
      user_id,
    );
  }

  // 기본 배송지 설정
}
