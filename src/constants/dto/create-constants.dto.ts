import {IsString} from "class-validator";


export class CreateConstantsDto {
    @IsString()
    text: string;

    @IsString()
    name: string;
}