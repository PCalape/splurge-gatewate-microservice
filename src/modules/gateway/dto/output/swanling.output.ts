import { Asset } from '@enums/asset.dto';
import { SwanlingTypeEnum } from '@enums/swanling-type.enum';

export class SwanlingOutput {
  serial?: string;
  title?: string;
  caption?: string;
  tags?: string[];
  creatorId: string;
  ownerId: string;
  value?: number;
  objectURL?: string;
  assets?: Asset[];
  isBrandNew?: boolean;
  bountyId?: string;
  momentPlaceId?: string;
  lastPurchasedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  score?: number;
  taggedUsers?: string[];
  deletedAt?: Date;
  deleted?: boolean;
  deletedByAdmin?: boolean;
  isListed?: boolean;
  isTrending?: boolean;
  stage?: SwanlingTypeEnum;
  isExclusive?: boolean;
}
