import ArrayDistinct from '@modules/common/custom-validator/array-distinct';
import { MaxCharacterLength } from '@modules/common/custom-validator/max-character-length';
import {
  ArrayMaxSize,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { AssetInput } from './asset.input';
import { LocationMomentInput } from './location-moment.input';

export class CreateSwanlingInput {
  @IsOptional()
  @MaxLength(24, { message: 'Title must be shorter than or equal to 24 characters' })
  title?: string;

  @IsOptional()
  @IsNotEmpty()
  @MinLength(1)
  @MaxCharacterLength(500, { message: 'Caption must be shorter than or equal to 500 characters' })
  caption?: string;

  @IsOptional()
  objectURL?: string;

  @IsOptional()
  @IsNotEmpty()
  @ArrayMaxSize(10, { message: 'Only 10 image or video can be uploaded' })
  assets?: AssetInput[];

  @IsOptional()
  @IsString({
    each: true,
  })
  @Matches(/^[a-zA-Z]+$/, {
    each: true,
    message: 'Only letters are allowed in tags',
  })
  @MinLength(1, {
    each: true,
  })
  @MaxLength(20, {
    each: true,
  })
  @ArrayDistinct()
  tags?: string[];

  @IsOptional()
  taggedUsers?: string[];

  @IsOptional()
  @IsNumber()
  @Min(500, {
    message: 'Best Comment Bounty Prize must not be less than 500',
  })
  bestCommentBountyPrize?: number;

  @IsOptional()
  bountyId?: string;

  @IsOptional()
  location?: LocationMomentInput;

  @IsOptional()
  @IsBoolean()
  exclusiveContent?: boolean = false;
}
