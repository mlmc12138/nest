import { Injectable } from '@nestjs/common';
import { CreateAddItemDto } from './dto/create-add-item.dto';
import { UpdateAddItemDto } from './dto/update-add-item.dto';

@Injectable()
export class AddItemService {
  create(createAddItemDto: CreateAddItemDto) {
    return 'This action adds a new addItem';
  }

  findAll() {
    return `This action returns all addItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addItem`;
  }

  update(id: number, updateAddItemDto: UpdateAddItemDto) {
    return `This action updates a #${id} addItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} addItem`;
  }
}
