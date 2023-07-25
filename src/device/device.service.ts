import {Injectable} from '@nestjs/common';
import {CreateDeviceDto} from "./dto/create-device.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Device} from "./device.model";
import {TypeService} from "../type/type.service";
import {BrandService} from "../brand/brand.service";

@Injectable()
export class DeviceService {

    constructor(@InjectModel(Device) private deviceRepository: typeof Device,
                private typeService: TypeService,
                private brandService: BrandService) {
    }

    async createDevice(deviceDto: CreateDeviceDto) {
        const device = await this.deviceRepository.create(deviceDto);
        const type = await this.typeService.getTypeByValue(deviceDto.typeId);
        const brand = await this.brandService.getBrandByValue(deviceDto.brandId);

        await device.$set('typeId', [type.id]);
        await device.$set('brandId', [brand.id]);

        device.type = type;
        device.brand = brand;
        return device;
    }

    async getAllDevices() {
        const devices = await this.deviceRepository.findAll({include: {all: true}});
        return devices
    }

    async getDeviceByName(name: string) {
        const device = await this.deviceRepository.findOne({where: {name}, include: {all: true}})
        return device;
    }
}
