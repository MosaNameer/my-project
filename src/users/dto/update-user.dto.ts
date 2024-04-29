import { IsString, IsUrl, IsNotEmpty,IsOptional, IsNumber, IsPositive } from 'class-validator';

export class UpdateUserDto {

    @IsString()
    name: string;
    
    @IsNumber()
    @IsPositive()
    age: number;
    
    @IsOptional()
    @IsString()
    email: string;
    
}
