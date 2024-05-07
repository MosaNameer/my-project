import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
  ) { }

  async findAll(): Promise<Tag[]> {
    return await this.tagRepository.find();
  }

  async findOne(id: number): Promise<Tag> {
    const tag = await this.tagRepository.findOne({
      where: { id }
    });

    if (!tag) {
      throw new NotFoundException('Tag not found');
    }

    return tag;
  }

  async create(dto: CreateTagDto): Promise<Tag>{
    return await this.tagRepository.create(dto).save();
  }

  async update(id: number, dto: UpdateTagDto): Promise<any> {
    const tag = await this.findOne(id);
    if (!tag) {
      throw new NotFoundException('Tag not found');
    }

    return await this.tagRepository.save({ ...tag, ...dto });
  }

  async remove(id: number): Promise<string> {
    const tag = await this.findOne(id);
    await this.tagRepository.softRemove(tag);
    return 'Deleted';
  }

  async findByIds(ids: number[]): Promise<Tag[]> {
    return await this.tagRepository.find({
        where: { id: In(ids) }
      })
  }
} 
