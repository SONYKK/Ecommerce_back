import {Module} from '@nestjs/common';
import {BasketController} from './basket.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {BasketService} from "./basket.service";
import {BasketDevice} from "../device/basket-device.model";

@Module({
    controllers: [BasketController],
    providers: [BasketService],
    imports: [
        SequelizeModule.forFeature([User, BasketDevice]),

    ],
    exports: []
})
export class BasketModule {
}
