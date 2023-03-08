import { UpdateDeliverAddressDto } from './dto/update-deliver-address.dto';
import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';
import { DeliverAddressRepository } from './deliver-address.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';

@Injectable()
export class DeliverAddressService {
  constructor(
    @InjectRepository(DeliverAddressRepository)
    private deliverAddressRepository: DeliverAddressRepository,
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async createAddress(createDeliverAddressDto: CreateDeliverAddressDto) {
    const { user_id } = createDeliverAddressDto;
    const user = await this.usersRepository.getById(user_id);
    return await this.deliverAddressRepository.createAddress(
      createDeliverAddressDto,
      user,
    );
  }

  // 사용자별 배송지 목록 가져오기
  async getDeliveryAddresses(user_id: number) {
    return await this.deliverAddressRepository.getDeliveryAddresses(user_id);
  }

  // 사용자별 기본 배송지 가져오기
  async getDefaultDeliveryAddresses(user_id: number) {
    return await this.deliverAddressRepository.getDefaultDeliveryAddresses(
      user_id,
    );
  }

  async updateDefaultDeliverAddressByUserId(
    updateDeliverAddressDto: UpdateDeliverAddressDto,
  ) {
    return await this.deliverAddressRepository.updateDefaultDeliverAddressByUserId(
      updateDeliverAddressDto,
    );
  }
}
