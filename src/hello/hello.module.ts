import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HelloService } from './hello.service';
import { HelloController } from './hellp.controller';
import { HelloSchema } from './schemas/hello.schema';

@Module({
  providers: [HelloService],
  imports: [MongooseModule.forFeature([{ name: 'Hello', schema: HelloSchema }])],
  exports: [HelloService],
  controllers: [HelloController],
})

export class HelloModule {
}
