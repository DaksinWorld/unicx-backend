import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import {getMongoConfig} from "./config/mongo.config";
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import {FilesModule} from "./files/files.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import {path} from "app-root-path";
import {ConstantsModule} from "./constants/constants.module";
import { DocsModule } from './docs/docs.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/uploads'
    }),
    ServeStaticModule.forRoot({
      rootPath: `${path}/client`,
      serveRoot: '/'
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    AuthModule,
    ProductModule,
    FilesModule,
    ConstantsModule,
    DocsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
