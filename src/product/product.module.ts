import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import {ProductModel, ProductSchema} from "./product.schema";
import {FilesService} from "../files/files.service";

@Module({
  imports: [
      MongooseModule.forFeature([{name: ProductModel.name, schema: ProductSchema}])
  ],
  controllers: [ProductController],
  providers: [ProductService, FilesService]
})
export class ProductModule {}
