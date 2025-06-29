import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ModelDto } from './dto/model.dto';

@Injectable()
export class ModelService {
  constructor(private prisma: PrismaService) {}

  async create(modelDto: ModelDto) {
    return this.prisma.model.create({
      data: modelDto,
    });
  }

  async findAll() {
    return this.prisma.model.findMany();
  }

  async findOne(modelCode: string) {
    return this.prisma.model.findUnique({
      where: { modelCode },
    });
  }

  async update(modelCode: string, modelDto: ModelDto) {
    return this.prisma.model.update({
      where: { modelCode },
      data: modelDto,
    });
  }

  async remove(modelCode: string) {
    return this.prisma.model.delete({
      where: { modelCode },
    });
  }
}