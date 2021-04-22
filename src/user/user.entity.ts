import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn({ length: 45 })
  @Field((type) => ID)
  id: string;

  @Column({ name: 'user_id', length: 45, unique: true })
  userId: string;

  @Column({ length: 80 })
  password: string;

  @Column({ length: 10 })
  @Field((type) => String)
  name: string;
}
