import { UpdateDeliverAddressDto } from './dto/update-deliver-address.dto';
import { Public } from './../../common/decorators/skip-auth.decorator';
import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Patch,
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
  async getDeliveryAddresses(@Param('user_id', ParseIntPipe) user_id: number) {
    return await this.deliverAddressService.getDeliveryAddresses(user_id);
  }

  // 사용자별 기본 배송지 가져오기
  @Get('/isDefault/:user_id')
  async getDefaultDeliveryAddresses(
    @Param('user_id', ParseIntPipe) user_id: number,
  ) {
    return await this.deliverAddressService.getDefaultDeliveryAddresses(
      user_id,
    );
  }

  // 배송지 변경
  @Patch()
  // 기본 배송지 변경하는 API 생성하면 이름 바꾸기. (지금은 귀찮)
  async updateDefaultDeliverAddressByUserId(
    @Body() updateDeliverAddressDto: UpdateDeliverAddressDto,
  ) {
    return await this.deliverAddressService.updateDefaultDeliverAddressByUserId(
      updateDeliverAddressDto,
    );
  }
}
