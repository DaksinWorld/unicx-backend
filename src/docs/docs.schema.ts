import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DocsDocument = DocsModel & Document;

@Schema()
export class DocsModel {
    @Prop()
    htmlText: string;
}

export const DocsSchema = SchemaFactory.createForClass(DocsModel);
