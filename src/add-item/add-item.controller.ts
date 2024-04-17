import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AddItemService } from './add-item.service';
import { CreateAddItemDto } from './dto/create-add-item.dto';
import { UpdateAddItemDto } from './dto/update-add-item.dto';

@Controller('add-item')
export class AddItemController {
  constructor(private readonly addItemService: AddItemService) {}

  @Post()
  create(@Body() createAddItemDto: CreateAddItemDto) {
    return this.addItemService.create(createAddItemDto);
  }

  @Get()
  findAll() {
    return this.addItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddItemDto: UpdateAddItemDto) {
    return this.addItemService.update(+id, updateAddItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addItemService.remove(+id);
  }
}
