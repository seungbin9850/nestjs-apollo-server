import { Injectable } from '@nestjs/common';
import { hash } from 'src/utils/bcrypt';
import { makeId } from 'src/utils/uuid';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(req: CreateUserDTO) {
    const user = new User();
    user.id = await makeId();
    user.userId = req.userId;
    user.password = hash(user.password);
    user.name = req.name;
    return await this.userRepository.save(user);
  }
}
