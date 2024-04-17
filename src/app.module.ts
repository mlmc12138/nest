import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddItemModule } from './add-item/add-item.module';

@Module({
  imports: [AddItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
