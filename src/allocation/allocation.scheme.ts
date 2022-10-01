import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AllocationDocument = AllocationModel & Document;

@Schema()
export class AllocationModel {
    @Prop()
    token: string;

    @Prop()
    date: string;

    @Prop()
    percentage: string;

    @Prop()
    profit: string;
}

export const AllocationSchema = SchemaFactory.createForClass(AllocationModel);
