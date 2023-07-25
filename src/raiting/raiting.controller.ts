import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RaitingService} from "./raiting.service";
import {CreateRaitingDto} from "./dto/create-raiting.dto";

@Controller('raiting')
export class RaitingController {

    constructor(private raitingService: RaitingService) {
    }

    @Post('/create')
    @Roles('USER')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    create(@Body() raitingDto: CreateRaitingDto) {
        return this.raitingService.createRaiting(raitingDto);
    }

    @Get('/:value')
    getByValue(@Param('value') value: number) {
        return this.raitingService.getRaitingByValue(value);
    }
}
