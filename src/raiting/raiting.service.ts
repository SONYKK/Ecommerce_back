import {Injectable} from '@nestjs/common';
import {CreateRaitingDto} from "./dto/create-raiting.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Raiting} from './raiting.model';

@Injectable()
export class RaitingService {

    constructor(@InjectModel(Raiting) private raitingRepository: typeof Raiting) {
    }

    async createRaiting(raitingDto: CreateRaitingDto) {
        const raiting = await this.raitingRepository.create(raitingDto);
        return raiting
    }

    async getRaitingByValue(value: number) {
        const raiting = await this.raitingRepository.findOne({where: {value}, include: {all: true}});
        return raiting;
    }
}
