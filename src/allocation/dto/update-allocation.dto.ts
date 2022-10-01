import {IsString} from "class-validator";


export class UpdateAllocationDto {
    @IsString()
    token: string;

    @IsString()
    date: string;

    @IsString()
    percentage: string;

    @IsString()
    profit: string;
}
