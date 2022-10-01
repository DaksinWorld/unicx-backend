import { Injectable } from '@nestjs/common';
import { CreateAllocationDto } from './dto/create-allocation.dto';
import { UpdateAllocationDto } from './dto/update-allocation.dto';
import {InjectModel} from "@nestjs/mongoose";
import {AllocationModel} from "./allocation.scheme";
import {Model} from "mongoose";

@Injectable()
export class AllocationService {
  constructor(
      @InjectModel(AllocationModel.name) private readonly allocationModel: Model<AllocationModel>
  ) {
  }

  async create(createAllocationDto: CreateAllocationDto) {
    return await this.allocationModel.create(createAllocationDto)
  }

  async findAll() {
    return await this.allocationModel.find().exec()
  }

  async findOne(id: string) {
    return await this.allocationModel.findOne({_id: id}).exec()
  }

  async update(id: string, updateAllocationDto: UpdateAllocationDto) {
    return await this.allocationModel.findByIdAndUpdate(id, updateAllocationDto).exec()
  }

  async remove(id: string) {
    return await this.allocationModel.findByIdAndRemove(id).exec()
  }
}
