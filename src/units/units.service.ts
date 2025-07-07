import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UnitDto } from './dto/unit.dto';
import { UploadService } from '../upload/upload.service';
import { unlinkSync, existsSync } from 'fs';

@Injectable()
export class UnitsService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService
  ) {}

  async create(unitDto: UnitDto, base64Image?: string) {
    let imageName: string | undefined = undefined;
    if (base64Image) {
      imageName = await this.uploadService.saveUnitImage(base64Image);
    }
    // Only include 'image' if it exists in the Prisma schema for 'unit'
    const data: any = { ...unitDto };
    if ('image' in this.prisma.unit.fields || (imageName !== undefined && unitDto.hasOwnProperty('image'))) {
      data.image = imageName;
    }
    return this.prisma.unit.create({
      data,
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

  async update(plate: string, unitDto: UnitDto, base64Image?: string) {
    let imageName = unitDto.image;
    if (base64Image) {
      // Buscar unidad actual para obtener el nombre de la imagen
      const current = await this.prisma.unit.findUnique({ where: { plate } });
      if ((current as any)?.image) {
        // Sobrescribir la imagen existente
        imageName = await this.uploadService.saveUnitImage(base64Image, (current as any).image);
      } else {
        // Si no hay imagen previa, crear una nueva
        imageName = await this.uploadService.saveUnitImage(base64Image);
      }
    }
    // Only include 'image' if it exists en el DTO o se generó
    const updateData: any = { ...unitDto };
    if ('image' in unitDto || imageName !== undefined) {
      updateData.image = imageName;
    }
    return this.prisma.unit.update({
      where: { plate },
      data: updateData,
      include: { model: true },
    });
  }

  async remove(plate: string) {
    // Eliminar imagen asociada si existe
    const current = await this.prisma.unit.findUnique({ where: { plate } }) as (UnitDto & { image?: string }) | null;
    if (current?.image) {
      const path = `C:/image-server/${current.image}`;
      if (existsSync(path)) unlinkSync(path);
    }
    return this.prisma.unit.delete({
      where: { plate },
    });
  }
}
