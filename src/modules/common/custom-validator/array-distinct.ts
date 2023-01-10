import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export default function ArrayDistinct(validationOptions?: ValidationOptions) {
  return (object: unknown, propertyName: string): void => {
    registerDecorator({
      name: 'ArrayDistinct',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: unknown): boolean {
          if (Array.isArray(value)) {
            const distinct = [...new Set(value.map((v): unknown => v))];
            return distinct.length === value.length;
          }
          return false;
        },
        defaultMessage(args: ValidationArguments): string {
          return `${args.property} must not contains duplicate entry`;
        },
      },
    });
  };
}
