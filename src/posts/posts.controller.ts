import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import { CreatePostDto } from './dto/add-post.dto';
import { PostsService } from './posts.service';


@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) {}

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Post('/create')
    create(@Body() postDto: CreatePostDto) {
        return this.postsService.createPost(postDto);
    }

    @Get()
    getAll() {
        return this.postsService.getAllPosts();
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.postsService.getPostByValue(value);
    }
}
