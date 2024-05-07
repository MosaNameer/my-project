import { IsNotEmpty, IsString, IsInt, IsPositive, IsArray, IsNumber } from 'class-validator';
export class CreateProductDto {

    @IsNotEmpty({ message: 'Field name must be added' })
    @IsString()
    name: string;

    @IsNotEmpty({ message: 'Field imageUrl must be added' })
    @IsString()
    imageUrl: string;

    @IsNotEmpty({ message: 'Field description must be added' })
    @IsString()
    description: string;

    @IsNotEmpty({ message: 'Field price must be added' })
    @IsPositive()
    price: number;

    @IsNotEmpty({ message: 'Field quantity must be added' })
    @IsInt()
    quantity: number;

    @IsNotEmpty({ message: 'Field category must be added' })
    @IsInt()
    category: number;

    @IsArray()
    tags?: number[];
}
