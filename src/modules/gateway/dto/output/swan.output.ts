import { AccountRequestStatusEnum } from '@enums/account-request-status.enum';
import { GenderEnum } from '@enums/gender.enum';
import { NameDisplayPreferenceEnum } from '@enums/name-display-preference.enum';

export class SwanOutput {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  name?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  isDefended?: boolean;
  nameDisplayPreference?: NameDisplayPreferenceEnum;
  email?: string;
  phoneNumber?: string;
  photoURL?: string;
  defaultPhotoURL?: string;
  gender?: GenderEnum;
  birthdate?: Date;
  aboutMe?: string;
  value?: number;
  isVerified?: boolean;
  isBanned?: boolean;
  isAdmin?: boolean;
  fbAccessToken?: string;
  isSubscribedToEmail?: boolean;
  status?: AccountRequestStatusEnum;
}
