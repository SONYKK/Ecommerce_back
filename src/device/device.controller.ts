import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {DeviceService} from "./device.service";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {CreateDeviceDto} from "./dto/create-device.dto";

@Controller('device')
export class DeviceController {

    constructor(private deviceService: DeviceService) {
    }

    @Post('/create')
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    create(@Body() deviceDto: CreateDeviceDto) {
        return this.deviceService.createDevice(deviceDto);
    }

    @Get()
    getAll() {
        return this.deviceService.getAllDevices();
    }
}
