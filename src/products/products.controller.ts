import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Get('category/:id')
  findAllByCategory(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findAllByCategory(id);
  }

  @Post()
  create(@Body() dto: CreateProductDto ) {
    return this.productsService.create(dto);
  }

  @Patch(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id', ParseIntPipe) id: number) {
    return this.productsService.update(updateProductDto, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}