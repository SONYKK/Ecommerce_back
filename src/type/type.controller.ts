import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {TypeService} from "./type.service";
import {CreateTypeDto} from "./dto/create-type.dto";

@Controller('type')
export class TypeController {

    constructor(private typeService: TypeService) {
    }

    @Post('/create')
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    create(@Body() typeDto: CreateTypeDto) {
        return this.typeService.createType(typeDto);
    }


    @Get()
    getAll() {
        return this.typeService.getAllTypes();
    }

    @Get('/:value')
    getByValue(@Param('value') value: number) {
        return this.typeService.getTypeByValue(value);
    }

}
