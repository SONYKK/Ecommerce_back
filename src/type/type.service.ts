import {Injectable} from '@nestjs/common';
import {CreateTypeDto} from "./dto/create-type.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Type} from './type.model';

@Injectable()
export class TypeService {

    constructor(@InjectModel(Type) private typeRepository: typeof Type) {
    }

    async createType(typeDto: CreateTypeDto) {
        const type = await this.typeRepository.create(typeDto);
        return type

    }

    async getAllTypes() {
        const types = await this.typeRepository.findAll({include: {all: true}});
        return types
    }

    async getTypeByValue(value: number) {
        const type = await this.typeRepository.findOne({where: {value}, include: {all: true}});
        return type;
    }
}
