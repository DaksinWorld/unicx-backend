import { IsString} from "class-validator";


export class FindProductDto {
    @IsString()
    type: string;
}