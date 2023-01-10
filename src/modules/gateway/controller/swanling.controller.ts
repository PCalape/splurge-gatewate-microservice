import { FirebaseAuthGuard } from '@modules/common/firebase-admin';
import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateSwanlingInput } from '../dto/input/create-swanling.input';
import { UpdateSwanlingInput } from '../dto/input/update-swanling.input';
import { SwanlingOutput } from '../dto/output/swanling.output';
import { SwanlingService } from '../service/swanling.service';

@Controller('swanling')
export class SwanlingController {
  constructor(private readonly swanlingService: SwanlingService) {}

  @Post('/create')
  @UseGuards(FirebaseAuthGuard)
  async createSwanling(@Body() input: CreateSwanlingInput): Promise<SwanlingOutput> {
    return this.swanlingService.createSwanling(input);
  }

  @Patch('/update/:id')
  @UseGuards(FirebaseAuthGuard)
  async updateSwanling(@Param() id: string, @Body() input: UpdateSwanlingInput): Promise<void> {
    await this.swanlingService.updateSwanling(id, input);
  }

  @Get('/all')
  @UseGuards(FirebaseAuthGuard)
  async getSwanlings(): Promise<SwanlingOutput[]> {
    return this.swanlingService.getSwanlings();
  }

  @Get('/:id')
  @UseGuards(FirebaseAuthGuard)
  async getSwanling(@Param() id: string): Promise<SwanlingOutput> {
    return this.swanlingService.getSwanling(id);
  }
}
