import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    const user = this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async create(createMenuDto: CreateUserDto): Promise<User> {
    const menu = this.usersRepository.create(createMenuDto);
    return await this.usersRepository.save(menu);
  }

  async update(id: number, updateMenuDto: UpdateUserDto): Promise<User> {
    const menu = await this.findOne(id);
    Object.assign(menu, updateMenuDto);
    return await this.usersRepository.save(menu);
  }

  async remove(id: number) {
    const menu = await this.findOne(id);
    return await this.usersRepository.remove(menu);
  }
}
