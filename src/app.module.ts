import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { AppService } from './app.service';
import { productProvider } from './models/product.model';
import { ExcelService } from './product/excel.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    ProductModule,
  ],
  controllers: [],
  providers: [AppService, ...productProvider, ExcelService],
})
export class AppModule {}
