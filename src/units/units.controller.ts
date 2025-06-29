import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitDto } from './dto/unit.dto';

@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Post()
  create(@Body() unitDto: UnitDto) {
    return this.unitsService.create(unitDto);
  }

  @Get()
  findAll() {
    return this.unitsService.findAll();
  }

  @Get(':plate')
  findOne(@Param('plate') plate: string) {
    return this.unitsService.findOne(plate);
  }

  @Put(':plate')
  update(@Param('plate') plate: string, @Body() unitDto: UnitDto) {
    return this.unitsService.update(plate, unitDto);
  }

  @Delete(':plate')
  remove(@Param('plate') plate: string) {
    return this.unitsService.remove(plate);
  }
}
