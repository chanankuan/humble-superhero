import { Transform } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateHeroDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  superpower: string;

  // Convert string to number
  @Transform(
    ({ value }) => {
      const parsedValue = parseInt(value, 10);
      return isNaN(parsedValue) ? value : parsedValue; // fallback to the original value if NaN
    },
    { toClassOnly: true },
  )
  @Min(1, { message: 'humility must be between 1 and 10' })
  @Max(10, { message: 'humility must be between 1 and 10' })
  @IsInt()
  @IsNotEmpty()
  humility: number;
}
