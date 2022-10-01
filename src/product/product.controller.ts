import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    NotFoundException,
    Param,
    Patch,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {ProductService} from "./product.service";
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {CreateProductDto} from "./dto/create-product.dto";
import {PRODUCT_NOT_FOUND_ERROR} from "./product.constants";
import {FileInterceptor} from "@nestjs/platform-express";
import {FileElementResponse} from "../files/dto/file-element.reposonse";
import {MFile} from "../files/mfile.class";
import {FilesService} from "../files/files.service";
import {FindProductDto} from "./dto/find-product.dto";

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
        private readonly filesService: FilesService
    ) {
    }

    @UseGuards(JwtAuthGuard)
    @Get('checkJwt')
    async checkJwt() {
        return 'success'
    }

    @UseGuards(JwtAuthGuard)
    @Post('')
    @UseInterceptors(FileInterceptor('file'))
    async create(@Body() dto: CreateProductDto, @UploadedFile() file: Express.Multer.File) {
        const images = await this.uploadFile(file)
        return this.productService.create({...dto, photoUrl: images})
    }

    @UsePipes(new ValidationPipe())
    @Get('')
    async getAll() {
        return await this.productService.getAll()
    }

    @Delete('deleteAll-1')
    async deleteAll() {
        return await this.productService.deleteAll()
    }

    @UsePipes(new ValidationPipe())
    @Get('find/:id')
    async findById(@Param('id') id: string) {
        const product = await this.productService.findById(id)
        if (!product) {
            throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
        }
        return product;
    }

    @UsePipes(new ValidationPipe())
    @Post('findByCategory')
    async findByCategory( @Body() dto: FindProductDto) {
        return await this.productService.findByCategory(dto);
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Delete(':id')
    async deleteById(@Param('id') id: string) {
        const deletedProduct = await this.productService.deleteById(id)
        if (!deletedProduct) {
            throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
        }
        return deletedProduct;
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    @UseInterceptors(FileInterceptor('file'))
    async updateById(@Param('id') id: string, @Body() dto: CreateProductDto, @UploadedFile() file: Express.Multer.File) {
        const images = await this.uploadFile(file)
        const updatedProduct = await this.productService.updateById(id, {...dto, photoUrl: images})
        if (!updatedProduct) {
            throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
        }
        return updatedProduct;
    }

    @Post('upload')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<FileElementResponse[]> {
        const saveArray: MFile[] = [new MFile(file)];
        if (file.mimetype.includes('image')) {
            const buffer = await this.filesService.convertToWebP(file.buffer);
            saveArray.push(new MFile({
                originalname: `${file.originalname.split('.')[0]}.webp`,
                buffer
            }));
        }
        return this.filesService.saveFiles(saveArray);
    }
}
