import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GatewayController } from './controller/gateway.controller';
import { GatewayService } from './service/gateway.service';

@Module({
  imports: [HttpModule],
  providers: [GatewayService],
  controllers: [GatewayController],
})
export class GatewayModule {}
