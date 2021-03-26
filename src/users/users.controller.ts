import { Controller, Get, Req, Post, Param, Body } from '@nestjs/common';
import { Request } from 'express'
import { ResponseData } from '../common/interfaces/result.interface'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Req() request: Request): Promise<ResponseData> {
    return 'This action returns all cats';
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): string {
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
