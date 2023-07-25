import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeliverAddressService } from './deliver-address.service';
import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';
import { UpdateDeliverAddressDto } from './dto/update-deliver-address.dto';

@Controller('deliver-address')
export class DeliverAddressController {
  constructor(private readonly deliverAddressService: DeliverAddressService) {}
  // 사용자별 배송지 등록
  // 사용자별 배송지 목록 가져오기
  // 사용자별 기본 배송지 가져오기
  // 배송지 변경
}
