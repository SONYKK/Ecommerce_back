import {Module} from "@nestjs/common";
import {UsersModule} from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import {SequelizeModule} from "@nestjs/sequelize";
import {RolesModule} from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import {AuthModule} from './auth/auth.module';
import {BasketService} from './basket/basket.service';
import {BasketModule} from './basket/basket.module';
import {DeviceModule} from './device/device.module';
import {Basket} from "./basket/basket.model";
import {BasketDevice} from "./device/basket-device.model";
import {Brand} from "./brand/brand.model";
import {TypeBrand} from "./type/type-brand.model";
import {Type} from "./type/type.model";
import {Device} from "./device/device.model";
import {DeviceInfo} from "./device/device-info.model";
import {Raiting} from "./raiting/raiting.model";
import {TypeModule} from './type/type.module';
import {BrandModule} from './brand/brand.module';
import {RaitingModule} from './raiting/raiting.module';
import { FilesModule } from './files/files.module';
import { PostsModule } from './posts/posts.module';
import {Posts} from "./posts/post.model";


@Module({
    controllers: [],
    providers: [BasketService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User,
                Role,
                UserRoles,
                Basket,
                BasketDevice,
                Brand,
                TypeBrand,
                Type,
                Device,
                DeviceInfo,
                Raiting,
                Posts],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        BasketModule,
        DeviceModule,
        TypeModule,
        BrandModule,
        RaitingModule,
        FilesModule,
        PostsModule],
    exports: []
})
export class AppModule {

}