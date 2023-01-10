import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';
import GraphemeSplitter from 'graphemer';

export function MaxCharacterLength(max: number, validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      name: 'MaxCharacterLength',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: unknown): boolean {
          return typeof value === 'string' && new GraphemeSplitter().countGraphemes(value) <= max;
        },
        defaultMessage: (validationArguments?: ValidationArguments): string =>
          `${validationArguments.property} must not exceed character length`,
      },
    });
  };
}
