import { ItemType } from '@enums/item-type.enum';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreatePurchaseInput {
  @IsNotEmpty()
  @IsString()
  itemId: string;

  @IsNotEmpty()
  @IsEnum(ItemType)
  itemType: string;

  @IsNotEmpty()
  cost: number;

  @IsNotEmpty()
  newValue: number;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
