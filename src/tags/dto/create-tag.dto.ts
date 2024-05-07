import { IsNotEmpty, IsString } from "class-validator";

export class CreateTagDto {

    @IsNotEmpty({ message: 'Field name must be added' })
    @IsString()
    name: string;

}
