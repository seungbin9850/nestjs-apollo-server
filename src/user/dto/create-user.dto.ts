import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateUserDTO {
  @Field()
  userId: string;

  @Field()
  password: string;

  @Field()
  name: string;
}
