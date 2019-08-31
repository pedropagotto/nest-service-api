import { CreateUserDto } from './dto/create-user.dto';
import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/database/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY') private readonly USERS_REPOSITORY: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.USERS_REPOSITORY.findAll<User>();
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.id = 1;
    user.firstName = 'adasdsa';
    user.lastName = 'test';
    user.email = 'jegue@test';
    user.passwordHash = 'bunda';

    return await user.save();
  }
}
