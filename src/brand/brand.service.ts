import {Injectable} from '@nestjs/common';
import {CreateBrandDto} from "./dto/create-brand.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Brand} from "./brand.model";

@Injectable()
export class BrandService {

    constructor(@InjectModel(Brand) private brandRepository: typeof Brand) {
    }

    async createBrand(brandDto: CreateBrandDto) {
        const brand = await this.brandRepository.create(brandDto);
        return brand
    }

    async getAllBrands() {
        const brands = await this.brandRepository.findAll({include: {all: true}});
        return brands
    }

    async getBrandByValue(value: number) {
        const brand = await this.brandRepository.findOne({where: {value}, include: {all: true}});
        return brand;
    }
}
