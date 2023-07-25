import {forwardRef, Module} from '@nestjs/common';
import {BrandController} from './brand.controller';
import {BrandService} from './brand.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Brand} from "./brand.model";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [BrandController],
    providers: [BrandService],
    imports: [
        SequelizeModule.forFeature([Brand]),
        forwardRef(() => AuthModule)
    ],
    exports: [
        BrandService
    ]
})
export class BrandModule {
}
