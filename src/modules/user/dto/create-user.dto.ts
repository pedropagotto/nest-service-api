import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  passwordHash: string;
}
