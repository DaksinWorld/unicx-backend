import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConstantsController } from './constants.controller';
import { ConstantsService } from './constants.service';
import {ConstantsModel, ConstantsSchema} from "./constants.schema";

@Module({
  imports: [
      MongooseModule.forFeature([{name: ConstantsModel.name, schema: ConstantsSchema}])
  ],
  controllers: [ConstantsController],
  providers: [ConstantsService]
})
export class ConstantsModule {}
