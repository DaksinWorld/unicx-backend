import {IsArray, IsNumber, IsString} from "class-validator";


export class CreateProductDto {
    @IsString()
    type: string;

    @IsArray()
    photoUrl?: any[];

    @IsString()
    status: string;

    @IsString()
    softCap: string;

    @IsString()
    title: string;

    @IsString()
    startedAt: string;

    @IsString()
    tokenAddress: string;

    @IsNumber()
    totalWhitelist: number;

    @IsNumber()
    whitelistedUsers: number

    @IsString()
    lockedPercentage: string;

    @IsNumber()
    durationDays: number;

    @IsNumber()
    maxPool: number;

    @IsString()
    poolCurrency: string;

    @IsNumber()
    poolValue: number;

    @IsNumber()
    maxUsers: number;

    @IsNumber()
    totalUsers: number;

    @IsString()
    twitter: string;

    @IsString()
    site: string;

    @IsString()
    liveText: string;

    @IsNumber()
    participants: number;

    @IsString()
    telegram: string;

    @IsNumber()
    successPercentage: number;

    @IsNumber()
    badgesUser: number;

    @IsArray()
    graph: any[]

    @IsString()
    text: string;
}
