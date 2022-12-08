import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from '@modules/common/common.module';
import { GatewayModule } from './gateway/gateway.module';
@Module({
  imports: [ConfigModule.forRoot(), CommonModule, GatewayModule],
})
export class AppModule {}
