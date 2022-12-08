import { FirebaseAuthGuard } from '@modules/common/firebase-admin';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { API } from '../dto/output/api.output.dto';
import { GatewayService } from '../service/gateway.service';

@Controller('gateway')
export class GatewayController {
  constructor(private readonly swanlingService: GatewayService) {}

  @Get('/health-check')
  @UseGuards(FirebaseAuthGuard)
  checkAPI(): API {
    return {
      message: 'Hello from Splurge Gateway!',
    };
  }

  @Get('swanling/health-check')
  checkSwanlingHealth() {
    return this.swanlingService.checkSwanlingHealth();
  }
}
