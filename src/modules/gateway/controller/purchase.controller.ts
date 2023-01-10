import { FirebaseAuthGuard } from '@modules/common/firebase-admin';
import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreatePurchaseInput } from '../dto/input/create-purchase.input';
import { CreateSwanInput } from '../dto/input/create-swan.input';
import { UpdateSwanInput } from '../dto/input/update-swan.input';
import { PurchaseOutput } from '../dto/output/purchase.output';
import { SwanOutput } from '../dto/output/swan.output';
import { PurchaseService } from '../service/purchase.service';
import { SwanService } from '../service/swan.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post('/create')
  @UseGuards(FirebaseAuthGuard)
  async createPurchase(@Body() input: CreatePurchaseInput): Promise<PurchaseOutput> {
    return this.purchaseService.createPurchase(input);
  }

  @Get('/all')
  @UseGuards(FirebaseAuthGuard)
  async getPurchases(): Promise<PurchaseOutput[]> {
    return this.purchaseService.getPurchases();
  }

  @Get('/:id')
  @UseGuards(FirebaseAuthGuard)
  async getPurchase(@Param() id: string): Promise<PurchaseOutput> {
    return this.purchaseService.getPurchase(id);
  }
}
