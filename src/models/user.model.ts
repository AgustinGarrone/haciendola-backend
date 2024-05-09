import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  lastname: string;

  @Column({ allowNull: false, unique: true })
  email: string;

  @Column({ allowNull: false })
  password: string;
}

export const userProvider = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
