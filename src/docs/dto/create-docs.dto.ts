import {IsString} from "class-validator";


export class CreateDocsDto {
    @IsString()
    htmlText: string
}