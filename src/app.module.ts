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
import { AllocationModule } from './allocation/allocation.module';
<<<<<<< HEAD
=======
import { join } from 'path';
>>>>>>> 9342e598fd28a7af0f8114b90e11a826608e1249

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/uploads'
    }),
    ServeStaticModule.forRoot({
<<<<<<< HEAD
      rootPath: `${path}/client`,
=======
      rootPath: join(__dirname, 'client'),
>>>>>>> 9342e598fd28a7af0f8114b90e11a826608e1249
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
    DocsModule,
    AllocationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
