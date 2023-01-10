import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GatewayController } from './controller/gateway.controller';
import { GatewayService } from './service/gateway.service';
import { SwanController } from './controller/swan.controller';
import { SwanService } from './service/swan.service';
import { SwanlingController } from './controller/swanling.controller';
import { SwanlingService } from './service/swanling.service';
import { PurchaseService } from './service/purchase.service';
import { PurchaseController } from './controller/purchase.controller';

@Module({
  imports: [HttpModule],
  providers: [GatewayService, SwanService, SwanlingService, PurchaseService],
  controllers: [GatewayController, SwanController, SwanlingController, PurchaseController],
})
export class GatewayModule {}
