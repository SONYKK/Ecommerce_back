import {forwardRef, Module} from '@nestjs/common';
import {RaitingService} from './raiting.service';
import {RaitingController} from './raiting.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Raiting} from "./raiting.model";
import {AuthModule} from "../auth/auth.module";

@Module({
    providers: [RaitingService],
    controllers: [RaitingController],
    imports: [
        SequelizeModule.forFeature([Raiting]),
        forwardRef(() => AuthModule)
    ],
    exports: [
        RaitingService
    ]
})
export class RaitingModule {
}