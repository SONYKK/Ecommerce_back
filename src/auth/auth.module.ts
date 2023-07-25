import {forwardRef, Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {TypeModule} from "../type/type.module";
import {BrandModule} from "../brand/brand.module";
import {RaitingModule} from "../raiting/raiting.module";
import {DeviceModule} from "../device/device.module";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        forwardRef(() => UsersModule),
        forwardRef(() => TypeModule),
        forwardRef(() => BrandModule),
        forwardRef(() => RaitingModule),
        forwardRef(() => DeviceModule),
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'SECRET',
            signOptions: {
                expiresIn: '24h'
            }
        })
    ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {
}
