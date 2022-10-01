import {IsString} from "class-validator";


export class CreateAllocationDto {
    @IsString()
    token: string;

    @IsString()
    date: string;

    @IsString()
    percentage: string;

    @IsString()
    profit: string;
}
