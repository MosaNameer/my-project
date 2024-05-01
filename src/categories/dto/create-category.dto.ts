import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';
export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    imageUrl: string
}
