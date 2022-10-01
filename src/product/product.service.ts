import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ProductModel} from "./product.schema";
import {CreateProductDto} from "./dto/create-product.dto";
import {FindProductDto} from "./dto/find-product.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(ProductModel.name) private readonly productModel: Model<ProductModel>
    ) {}

    async create(dto: CreateProductDto) {
        return await this.productModel.create(dto);
    }

    async getAll(){
        return await this.productModel.find().exec();
    }

    async findById(id: string) {
        return await this.productModel.findById(id, ).exec();
    }

    async findByCategory(dto: FindProductDto) {
        return await this.productModel.find({type: dto.type}).exec()
    }

    async deleteById(id: string) {
        return await this.productModel.findByIdAndDelete(id).exec();
    }

    async updateById(id: string, dto: CreateProductDto) {
        return await this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }

    async deleteAll() {
        return await this.productModel.deleteMany().exec()
    }

}
