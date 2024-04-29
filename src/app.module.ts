import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [User, Category],
    }),
    UsersModule,
    CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
