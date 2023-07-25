import {forwardRef, Module} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {AuthModule} from "../auth/auth.module";
import {Posts} from "./post.model";

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([Posts]),
    forwardRef(() => AuthModule)

  ],
  exports: [
    PostsService
  ]
})
export class PostsModule {}
