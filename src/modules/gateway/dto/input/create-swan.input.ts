import { GenderEnum } from '@enums/gender.enum';
import { NameDisplayPreferenceEnum } from '@enums/name-display-preference.enum';
import {
  IsEmail,
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateSwanInput {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/, {
    message: "Username doesn't meet the required criteria.",
  })
  username: string;

  @IsOptional()
  @MaxLength(25, { message: 'First Name must be shorter than or equal to 25 characters.' })
  firstName?: string;

  @IsOptional()
  @MaxLength(25, { message: 'Last Name must be shorter than or equal to 25 characters.' })
  lastName?: string;

  @IsOptional()
  @IsEnum(NameDisplayPreferenceEnum)
  nameDisplayPreference?: NameDisplayPreferenceEnum;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsNotEmpty()
  @IsEnum(GenderEnum)
  gender?: GenderEnum;

  @IsOptional()
  @IsISO8601()
  birthdate?: Date;

  @IsOptional()
  @IsString()
  aboutMe?: string;
}
