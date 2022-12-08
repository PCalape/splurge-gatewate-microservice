import { MomentCategoryEnum } from './moment-category.enum';

export class Asset {
  type: MomentCategoryEnum;
  url: string;
  thumbnail: string;
  taggedUsers?;
  text?: string;
}
