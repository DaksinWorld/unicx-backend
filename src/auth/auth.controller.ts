import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Headers,
  Post, UseGuards,
  UsePipes,
  ValidationPipe, Get, Param,
} from '@nestjs/common';
import { AuthDto, RegisterAuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { ALREADY_REGISTERED_ERROR } from './auth.constants';
import {JwtAuthGuard} from "./guards/jwt.guard";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: RegisterAuthDto) {
    const oldUser = await this.authService.findUser(dto.login);
    if (oldUser) {
      throw new BadRequestException(ALREADY_REGISTERED_ERROR);
    }
    return this.authService.createUser(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() { login, password }: AuthDto) {
    const { email } = await this.authService.validateUser(login, password);
    return this.authService.login(email);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getOne(@Headers() headers) {
    const user = await this.authService.decode(headers.authorization.split(' ')[1])
    // @ts-ignore
    return await this.authService.getOne(user.email)
  }

  @Post('isAdmin')
  @UseGuards(JwtAuthGuard)
  async isAdmin(@Headers() headers) {
    const user = await this.authService.decode(headers.authorization.split(' ')[1])

    // @ts-ignore
    if(user.email === 'onosov@gmail.com' || user.email === 'matoday.ma@gmail.com') {
      return true
    } else {
      return false
    }
  }
}
