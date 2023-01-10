import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export function IsNotBlankString(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      name: 'IsNotBlankString',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: unknown): boolean {
          return typeof value === 'string' && value.trim().length > 0;
        },
        defaultMessage: (validationArguments?: ValidationArguments): string =>
          `${validationArguments.property} should not be an empty string`,
      },
    });
  };
}
