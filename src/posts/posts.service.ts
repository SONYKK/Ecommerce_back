import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Posts} from "./post.model";
import {CreatePostDto} from "./dto/add-post.dto";

@Injectable()
export class PostsService {

    constructor(@InjectModel(Posts) private postRepository: typeof Posts) {
    }

    async createPost(postDto: CreatePostDto) {
        const post = await this.postRepository.create(postDto)
        return post;
    }

    async getAllPosts() {
        const post = await this.postRepository.findAll()
        return post;

    }

    async getPostByValue(value: string) {
        const post = await this.postRepository.findOne({where: {value}, include: {all: true}})
        return post;
    }
}
