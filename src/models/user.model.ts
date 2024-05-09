import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  @ApiProperty()
  id: number;

  @Column({ allowNull: false })
  @ApiProperty()
  name: string;

  @Column({ allowNull: false })
  @ApiProperty()
  lastname: string;

  @Column({ allowNull: false, unique: true })
  @ApiProperty()
  email: string;

  @Column({ allowNull: false })
  @ApiProperty()
  password: string;
}

export const userProvider = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
