import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ConstantsModel} from "./constants.schema";
import {CreateConstantsDto} from "./dto/create-constants.dto";
import {FindConstantsDto} from "./dto/find-constants.dto";

@Injectable()
export class ConstantsService {
    constructor(
        @InjectModel(ConstantsModel.name) private readonly constantsModel: Model<ConstantsModel>
    ) {}

    async create(dto: CreateConstantsDto) {
        return await this.constantsModel.create(dto);
    }

    async getAll(){
        return await this.constantsModel.find().exec();
    }

    async findByName(dto: FindConstantsDto) {
        return await this.constantsModel.findOne({name: dto.name}).exec();
    }

    async deleteById(id: string) {
        return await this.constantsModel.findByIdAndDelete(id).exec();
    }

    async updateById(id: string, dto: CreateConstantsDto) {
        return await this.constantsModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }

}
