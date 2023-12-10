import { Controller, Post, Get } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  index(): User[] {
    return this.usersService.findAll();
  }

  @Post()
  Create(user: User): User {
    return this.usersService.create(user);
  }
}
