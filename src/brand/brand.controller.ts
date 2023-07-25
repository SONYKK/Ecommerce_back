import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {BrandService} from "./brand.service";
import {CreateBrandDto} from './dto/create-brand.dto';

@Controller('brand')
export class BrandController {

    constructor(private brandService: BrandService) {
    }

    @Post('/create')
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    create(@Body() brandDto: CreateBrandDto) {
        return this.brandService.createBrand(brandDto);
    }


    @Get()
    getAll() {
        return this.brandService.getAllBrands();
    }

    @Get('/:value')
    getByValue(@Param('value') value: number) {
        return this.brandService.getBrandByValue(value);
    }

}
