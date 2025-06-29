import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UnitDto } from './dto/unit.dto';

@Injectable()
export class UnitsService {
  constructor(private prisma: PrismaService) {}

  async create(unitDto: UnitDto) {
    return this.prisma.unit.create({
      data: unitDto,
      include: { model: true },
    });
  }

  async findAll() {
    return this.prisma.unit.findMany({
      include: { model: true },
    });
  }

  async findOne(plate: string) {
    return this.prisma.unit.findUnique({
      where: { plate },
      include: { model: true },
    });
  }

  async update(plate: string, unitDto: UnitDto) {
    return this.prisma.unit.update({
      where: { plate },
      data: unitDto,
      include: { model: true },
    });
  }

  async remove(plate: string) {
    return this.prisma.unit.delete({
      where: { plate },
    });
  }
}
