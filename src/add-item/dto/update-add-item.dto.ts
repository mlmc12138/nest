import { PartialType } from '@nestjs/mapped-types';
import { CreateAddItemDto } from './create-add-item.dto';

export class UpdateAddItemDto extends PartialType(CreateAddItemDto) {}
