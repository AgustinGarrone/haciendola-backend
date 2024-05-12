import { Sequelize } from 'sequelize-typescript';
import { Product } from 'src/models/product.model';
import { User } from 'src/models/user.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'db',
        port: 5432,
        username: 'user123',
        password: 'password123',
        database: 'haciendola',
      });
      sequelize.addModels([Product, User]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
