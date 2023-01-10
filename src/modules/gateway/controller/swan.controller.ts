import { FirebaseAuthGuard } from '@modules/common/firebase-admin';
import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateSwanInput } from '../dto/input/create-swan.input';
import { UpdateSwanInput } from '../dto/input/update-swan.input';
import { SwanOutput } from '../dto/output/swan.output';
import { SwanService } from '../service/swan.service';

@Controller('swan')
export class SwanController {
  constructor(private readonly swanService: SwanService) {}

  @Post('/create')
  @UseGuards(FirebaseAuthGuard)
  async createSwan(@Body() input: CreateSwanInput): Promise<SwanOutput> {
    return this.swanService.createSwan(input);
  }

  @Patch('/update/:id')
  @UseGuards(FirebaseAuthGuard)
  async updateSwan(@Param() id: string, @Body() input: UpdateSwanInput): Promise<void> {
    await this.swanService.updateSwan(id, input);
  }

  @Get('/all')
  @UseGuards(FirebaseAuthGuard)
  async getSwans(): Promise<SwanOutput[]> {
    return this.swanService.getSwans();
  }

  @Get('/:id')
  @UseGuards(FirebaseAuthGuard)
  async getSwan(@Param() id: string): Promise<SwanOutput> {
    return this.swanService.getSwan(id);
  }
}
