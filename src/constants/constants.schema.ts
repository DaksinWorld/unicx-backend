import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConstantsDocument = ConstantsModel & Document;

@Schema()
export class ConstantsModel {
    @Prop()
    name: string;

    @Prop()
    text: string;
}

export const ConstantsSchema = SchemaFactory.createForClass(ConstantsModel);
