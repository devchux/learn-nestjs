/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('api')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('age') age: number,
    @Body('email') email: string,
  ) {
    return this.userService.insertUser(firstName, lastName, age, email);
  }

  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUsers(id);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('age') age: number,
    @Body('email') email: string,
  ) {
    return this.userService.updateUser(id, firstName, lastName, age, email);
  }
}
