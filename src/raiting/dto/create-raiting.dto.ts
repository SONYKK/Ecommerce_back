import {IsNumber} from "class-validator";

export class CreateRaitingDto {

    @IsNumber({}, {message: 'Должно быть числом'})
    readonly rate: number;

}