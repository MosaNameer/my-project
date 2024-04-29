import { IsNotEmpty, IsString, IsInt, IsPositive } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty({ message: 'Field name must be added' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Field age must be added' })
  @IsInt()
  @IsPositive()
  age: number;

  @IsString()
  email: string;
  
}
