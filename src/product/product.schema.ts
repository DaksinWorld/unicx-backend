import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = ProductModel & Document;

@Schema()
export class ProductModel {
    @Prop()
    type: string;

    @Prop()
    photoUrl: any[];

    @Prop()
    status: string;

    @Prop()
    softCap: string;

    @Prop()
    title: string;

    @Prop()
    startedAt: string;

    @Prop()
    lockedPercentage: string;

    @Prop()
    durationDays: number;

    @Prop()
    totalWhitelist: number;

    @Prop()
    whitelistedUsers: number;

    @Prop()
    tokenAddress: string;

    @Prop()
    maxPool: number;

    @Prop()
    poolCurrency: string;

    @Prop()
    poolValue: number;

    @Prop()
    successPercentage: number;

    @Prop()
    maxUsers: number;

    @Prop()
    totalUsers: number;

    @Prop()
    twitter: string;

    @Prop()
    liveText: string;

    @Prop()
    site: string;

    @Prop()
    telegram: string;

    @Prop()
    badgesUser: number;

    @Prop()
    graph: any[]

    @Prop()
    text: string;

}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
