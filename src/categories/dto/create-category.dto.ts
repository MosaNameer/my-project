import { IsNotEmpty, IsString, IsInt, IsPositive } from 'class-validator';
export class CreateCategoryDto {
    @IsNotEmpty({ message: 'Field name must be added' })
    @IsString()
    name: string;
    
    @IsNotEmpty({ message: 'Field description must be added' })
    @IsString()
    description: string;
}
