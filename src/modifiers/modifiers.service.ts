import { Injectable } from '@nestjs/common';
import { CreateModifierDto } from './dto/create-modifier.dto';
import { UpdateModifierDto } from './dto/update-modifier.dto';
import { Modifier } from './entities/modifier.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ModifiersService {
  constructor(
    @InjectRepository(Modifier) private readonly modifierRepository: Repository<Modifier>,
  ) { }

  findAll(): Promise<Modifier[]> {
    return this.modifierRepository.find();
  }

  findOne(id: number) {
    const modifier = this.modifierRepository.findOne({
      where: { id }
    });
  }

  create(createModifierDto: CreateModifierDto) {
    return this.modifierRepository.create(createModifierDto).save();
  }

  update(id: number, updateModifierDto: UpdateModifierDto) {
    return `This action updates a #${id} modifier`;
  }

  remove(id: number) {
    return `This action removes a #${id} modifier`;
  }
}
