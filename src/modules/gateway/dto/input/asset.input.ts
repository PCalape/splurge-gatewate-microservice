import { MomentCategoryEnum } from '@enums/moment-category.enum';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AssetTaggedUserInput } from './asset-tagged-user.input';

export class AssetInput {
  @IsNotEmpty()
  @IsEnum(MomentCategoryEnum)
  type: MomentCategoryEnum;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  thumbnail: string;

  @IsOptional()
  taggedUsers?: AssetTaggedUserInput[];

  @IsOptional()
  text?: string;
}
