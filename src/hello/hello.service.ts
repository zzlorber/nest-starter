import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HelloService {
  constructor(@InjectModel('Hello') private helloModel: Model<any>) { }

  async getHellos(): Promise<any> {
    return this.helloModel.find()
  }
}