import { IsNotEmpty, IsString } from 'class-validator';
import { AssetTaggedUserLocationInput } from './asset-tagged-user-location.input';

export class AssetTaggedUserInput {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  location: AssetTaggedUserLocationInput;
}
