import {IsString} from "class-validator";

export class CreateBrandDto {

    @IsString({message: 'Должно быть строкой'})
    readonly name: string;

}