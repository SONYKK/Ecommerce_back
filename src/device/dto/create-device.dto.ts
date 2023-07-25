import {IsNumber, IsString} from "class-validator";

export class CreateDeviceDto {

    @IsString({message: 'Должно быть строкой'})
    readonly name: string;

    @IsNumber({}, {message: 'Должно быть числом'})
    readonly price: number;

    @IsNumber({}, {message: 'Должно быть числом'})
    readonly typeId: number;

    @IsNumber({}, {message: 'Должно быть числом'})
    readonly brandId: number;
}