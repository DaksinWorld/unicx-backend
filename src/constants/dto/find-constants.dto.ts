import { IsString} from "class-validator";


export class FindConstantsDto {
    @IsString()
    name: string;
}