import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
  ) { }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({ 
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  private async sleep(s: number = 1): Promise<unknown> {
    return new Promise(resolve => {
      setTimeout(resolve, s * 1000)
      console.log('Sleeping for', s, 'seconds')
    });
  }

  async create(dto: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.create(dto).save();
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<any> {
    const category = await this.findOne(id);
    return await this.categoryRepository.save({ ...category, ...updateCategoryDto });
  }

  async remove(id: number): Promise<string> {
    const category = await this.findOne(id);
    await this.categoryRepository.softRemove(category);

    return 'Deleted';
  }


}
