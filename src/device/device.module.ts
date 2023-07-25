import {forwardRef, Module} from '@nestjs/common';
import {DeviceService} from './device.service';
import {DeviceController} from './device.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {TypeBrand} from "../type/type-brand.model";
import {Type} from "../type/type.model";
import {Brand} from "../brand/brand.model";
import {Raiting} from '../raiting/raiting.model';
import {BasketDevice} from "./basket-device.model";
import {DeviceInfo} from "./device-info.model";
import {BrandModule} from "../brand/brand.module";
import {TypeModule} from "../type/type.module";
import {Device} from "./device.model";
import {AuthModule} from "../auth/auth.module";

@Module({
    providers: [DeviceService],
    controllers: [DeviceController],
    imports: [
        SequelizeModule.forFeature([TypeBrand, Type, Brand, Raiting, BasketDevice, DeviceInfo, Device]),
        forwardRef(() => AuthModule),
        TypeModule,
        BrandModule
    ],
    exports: []
})
export class DeviceModule {
}
