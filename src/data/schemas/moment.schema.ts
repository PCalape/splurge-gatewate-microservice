import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { MomentTypeEnum } from '@enums/moment-type.enum';
import { Asset } from '@enums/asset.dto';
mongoose.set('debug', process.env.DB_LOGGING_FLAG === 'enabled');

@Schema({ timestamps: true })
export class Swanling {
  @Prop({ index: true })
  serial?: string;

  @Prop()
  title?: string;

  @Prop()
  caption?: string;

  @Prop([String])
  tags?: string[];

  @Prop()
  creatorId: string;

  @Prop()
  ownerId: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.Decimal128 }] })
  value?: number;

  @Prop()
  objectURL?: string;

  @Prop(raw([Asset]))
  assets?: Asset[];

  @Prop({ default: true })
  isBrandNew?: boolean;

  @Prop()
  bountyId?: string;

  @Prop()
  momentPlaceId?: string;

  lastPurchasedAt?: Date;

  createdAt?: Date;

  updatedAt?: Date;

  score?: number;

  @Prop([String])
  taggedUsers?: string[];

  @Prop({ default: null })
  deletedAt?: Date;

  @Prop({ default: false })
  deleted?: boolean;

  @Prop({ default: false })
  deletedByAdmin?: boolean;

  @Prop({ default: true })
  isListed?: boolean;

  isTrending?: boolean;

  @Prop({ enum: MomentTypeEnum, default: MomentTypeEnum.EGG })
  stage?: MomentTypeEnum;

  @Prop({ default: false })
  isExclusive?: boolean;
}

export type SwanlingDocument = Swanling & Document;
export const SwanlingSchema = SchemaFactory.createForClass(Swanling);
SwanlingSchema.index({ caption: 'text', title: 'text' });
