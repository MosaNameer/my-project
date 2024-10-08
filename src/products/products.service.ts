import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { CategoriesService } from 'src/categories/categories.service';
import { TagsService } from 'src/tags/tags.service';
import { Tag } from 'src/tags/entities/tag.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
    @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
    private readonly categoriesService: CategoriesService,
    private readonly tagsService: TagsService
  ) { }

  async create(dto: CreateProductDto): Promise<Product> {
    const category = await this.categoriesService.findOne(dto.category);
    const tags = await this.tagsService.findByIds(dto.tags);
    return await this.productRepository.create({
      ...dto,
      category,
      tags
    }).save();
  }

  async update(updateProductDto: UpdateProductDto, productId: number): Promise<Product> {
    const product = await this.findOne(productId);
    const category = await this.categoriesService.findOne(updateProductDto.category)
    const tags = await this.tagsService.findByIds(updateProductDto.tags);
    return await this.productRepository.save({ ...product, ...updateProductDto, category, tags });
  }

  findAll(categoryId?: number): Promise<Product[]> {
    return this.productRepository.find({
      where: { category: categoryId ? { id: categoryId } : undefined },
      relations: { category: true, tags: true },
      select: {
        id: true,
        name: true,
        price: true,
        category: {
          id: true,
          name: true
        },
        tags: {
          id: true,
          name: true
        }
      }
    });
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: { category: true, tags: true },
      select: {
        id: true,
        name: true,
        price: true,
        category: {
          id: true,
          name: true
        },
        tags: {
          id: true,
          name: true
        }
      }
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async findAllByCategory(categoryId: number): Promise<Product[]> {
    const category = await this.categoryRepository.findOne({ where: { id: categoryId } });
    if (!category)
      throw new BadRequestException('Category not found');
    return this.findAll(categoryId)
  }

  async remove(id: number): Promise<any> {
    const product = await this.findOne(id);
    return await this.productRepository.softDelete(product.id);
  }
}
