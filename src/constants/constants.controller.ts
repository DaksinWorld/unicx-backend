import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Patch,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {ConstantsService} from "./constants.service";
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {CreateConstantsDto} from "./dto/create-constants.dto";
import {PRODUCT_NOT_FOUND_ERROR} from "./constants.constants";
import {FindConstantsDto} from "./dto/find-constants.dto";

@Controller('constants')
export class ConstantsController {
    constructor(
        private readonly constantsService: ConstantsService,
    ) {
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Post('')
    async create(@Body() dto: CreateConstantsDto) {
        return this.constantsService.create({...dto})
    }

    @UsePipes(new ValidationPipe())
    @Get('')
    async getAll() {
        return this.constantsService.getAll()
    }

    @UsePipes(new ValidationPipe())
    @Post('find')
    async findById(@Body() dto: FindConstantsDto) {
        const product = await this.constantsService.findByName(dto)
        if (!product) {
            throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
        }
        return product;
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Delete(':id')
    async deleteById(@Param('id') id: string) {
        const deletedProduct = await this.constantsService.deleteById(id)
        if (!deletedProduct) {
            throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
        }
        return deletedProduct;
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async updateById(@Param('id') id: string, @Body() dto: CreateConstantsDto) {
        const updatedProduct = await this.constantsService.updateById(id, {...dto})
        if (!updatedProduct) {
            throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
        }
        return updatedProduct;
    }
}
