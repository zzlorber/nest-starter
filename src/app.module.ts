import { Module, NestModule, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { HelloModule } from './hello/hello.module';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/nest'
dotenv.config()
@Module({
  imports: [
    HelloModule, 
    HttpModule, 
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGO_URI)
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure() { }
}
