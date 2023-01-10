import { SwanlingCategoryEnum } from './swanling-category.enum';

export class Asset {
  type: SwanlingCategoryEnum;
  url: string;
  thumbnail: string;
  taggedUsers?;
  text?: string;
}
