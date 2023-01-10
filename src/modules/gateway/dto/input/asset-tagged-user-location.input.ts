import { IsNotEmpty, IsNumber } from 'class-validator';

export class AssetTaggedUserLocationInput {
  @IsNotEmpty()
  @IsNumber()
  x: number;

  @IsNotEmpty()
  @IsNumber()
  y: number;
}
