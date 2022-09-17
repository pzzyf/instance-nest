import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Message } from './model/message.model';

@Module({
  imports: [SequelizeModule.forFeature([Message])],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
