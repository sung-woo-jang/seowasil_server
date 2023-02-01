import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliverAddressService } from './deliver-address.service';
import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';
import { UpdateDeliverAddressDto } from './dto/update-deliver-address.dto';

@Controller('deliver-address')
export class DeliverAddressController {
  constructor(private readonly deliverAddressService: DeliverAddressService) {}

  @Post()
  create(@Body() createDeliverAddressDto: CreateDeliverAddressDto) {
    return this.deliverAddressService.create(createDeliverAddressDto);
  }

  @Get()
  findAll() {
    return this.deliverAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliverAddressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliverAddressDto: UpdateDeliverAddressDto) {
    return this.deliverAddressService.update(+id, updateDeliverAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliverAddressService.remove(+id);
  }
}
