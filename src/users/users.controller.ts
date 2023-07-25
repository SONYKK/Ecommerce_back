import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {JwtAuthGuard} from 'src/auth/jwt-auth.guard';
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {addRoleDto} from './dto/add-role.dto';
import {BanUserDto} from "./dto/ban-user.dto";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @Post('/create')
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Post('/role')
    addRole(@Body() dto: addRoleDto) {
        return this.usersService.addRole(dto);
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Post('/ban')
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto);
    }
}
