import { Controller, Get, Req, Post, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { ResponseData } from '../common/interfaces/result.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(@Req() request: Request): string {
    return 'string sad';
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // return 'This action adds a new cat';
    this.usersService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
