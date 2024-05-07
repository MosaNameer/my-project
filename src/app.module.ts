import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { TagsModule } from './tags/tags.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      // autoLoadEntities: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    UsersModule,
    CategoriesModule,
    ProductsModule,
    TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
