
import { ApiProperty } from '@nestjs/swagger';

export class Hello {
    @ApiProperty()
    id: number
    @ApiProperty()
    text: string
}