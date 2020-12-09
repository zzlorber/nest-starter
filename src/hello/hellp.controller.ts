import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { HelloService } from './hello.service'
import { Hello } from './hello'

@ApiTags('simple project hello')
@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) { }
  @Get()
  @ApiResponse({
    status: 200,
    description: '',
    type: [Hello],
  })
  async getHellos() {
    return this.helloService.getHellos()
  }
}

