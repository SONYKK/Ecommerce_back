import {IsString} from "class-validator";

export class CreateTypeDto {

    @IsString({message: 'Должно быть строкой'})
    readonly name: string;

}