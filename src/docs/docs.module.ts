import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {DocsModel, DocsSchema} from "./docs.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DocsModel.name, schema: DocsSchema
      }
    ])
  ],
  providers: [DocsService],
  controllers: [DocsController]
})
export class DocsModule {}
