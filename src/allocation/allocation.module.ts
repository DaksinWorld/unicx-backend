import { Module } from '@nestjs/common';
import { AllocationService } from './allocation.service';
import { AllocationController } from './allocation.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {AllocationModel, AllocationSchema} from "./allocation.scheme";

@Module({
  imports: [
    MongooseModule.forFeature([{name: AllocationModel.name, schema: AllocationSchema}])
  ],
  controllers: [AllocationController],
  providers: [AllocationService]
})
export class AllocationModule {}
