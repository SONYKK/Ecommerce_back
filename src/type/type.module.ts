import {forwardRef, Module} from '@nestjs/common';
import {TypeService} from './type.service';
import {TypeController} from './type.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Type} from "./type.model";
import {JwtService} from "@nestjs/jwt";
import {AuthModule} from "../auth/auth.module";

@Module({
    providers: [TypeService],
    controllers: [TypeController],
    imports: [
        SequelizeModule.forFeature([Type]),
        forwardRef(() => AuthModule)

    ],
    exports: [
        TypeService
    ]
})
export class TypeModule {
}
