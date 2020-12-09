
import { ApiProperty } from '@nestjs/swagger';

export class Hello {
    @ApiProperty()
    id: Number
    @ApiProperty()
    text: String
}