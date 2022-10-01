import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException, Param, Patch,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {DocsService} from "./docs.service";
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {PRODUCT_NOT_FOUND_ERROR} from "../constants/constants.constants";
import {CreateDocsDto} from "./dto/create-docs.dto";

@Controller('docs')
export class DocsController {
    constructor(
        private readonly docsService: DocsService
    ) {
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Post('')
    async create(@Body() dto: CreateDocsDto) {
        return this.docsService.create({...dto})
    }

    @UsePipes(new ValidationPipe())
    @Get('')
    async getAll() {
        return this.docsService.getAll()
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Delete(':id')
    async deleteById(@Param('id') id: string) {
        const deletedProduct = await this.docsService.deleteById(id)
        if (!deletedProduct) {
            throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
        }
        return deletedProduct;
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async updateById(@Param('id') id: string, @Body() dto: CreateDocsDto) {
        const updatedProduct = await this.docsService.updateById(id, {...dto})
        if (!updatedProduct) {
            throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
        }
        return updatedProduct;
    }

}
