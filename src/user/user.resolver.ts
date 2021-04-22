import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  hello() {
    return 'hello';
  }

  @Mutation(() => User)
  async register(@Args() arg: CreateUserDTO) {
    return await this.userService.createUser(arg);
  }
}
