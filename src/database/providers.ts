import { Sequelize } from 'sequelize-typescript';
import { Product } from 'src/models/product.model';
import { User } from 'src/models/user.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'testdata',
        database: 'haciendola',
      });
      sequelize.addModels([Product, User]);
      sequelize
        .sync()
        .then(() => {
          console.log('Synchronization successful');
        })
        .catch((error) => {
          console.error('Synchronization failed:', error);
        });
      return sequelize;
    },
  },
];
