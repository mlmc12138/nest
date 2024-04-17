import { Module } from '@nestjs/common';
import { AddItemService } from './add-item.service';
import { AddItemController } from './add-item.controller';

@Module({
  controllers: [AddItemController],
  providers: [AddItemService],
})
export class AddItemModule {}
