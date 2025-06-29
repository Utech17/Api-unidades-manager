// src/models/models.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ModelService } from './model.service';
import { ModelDto } from './dto/model.dto';

@Controller('models')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Post()
  create(@Body() modelDto: ModelDto) {
    return this.modelService.create(modelDto);
  }

  @Get()
  findAll() {
    return this.modelService.findAll();
  }

  @Get(':modelCode')
  findOne(@Param('modelCode') modelCode: string) {
    return this.modelService.findOne(modelCode);
  }

  @Put(':modelCode')
  update(@Param('modelCode') modelCode: string, @Body() modelDto: ModelDto) {
    return this.modelService.update(modelCode, modelDto);
  }

  @Delete(':modelCode')
  remove(@Param('modelCode') modelCode: string) {
    return this.modelService.remove(modelCode);
  }
}