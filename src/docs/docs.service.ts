import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {DocsModel} from "./docs.schema";
import {CreateDocsDto} from "./dto/create-docs.dto";

@Injectable()
export class DocsService {
    constructor(
        @InjectModel(DocsModel.name) private readonly constantsModel: Model<DocsModel>
    ) {}

    async create(dto: CreateDocsDto) {
        return await this.constantsModel.create(dto);
    }

    async getAll(){
        return await this.constantsModel.find().exec();
    }

    async deleteById(id: string) {
        return await this.constantsModel.findByIdAndDelete(id).exec();
    }

    async updateById(id: string, dto: CreateDocsDto) {
        return await this.constantsModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
}
