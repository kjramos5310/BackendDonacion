import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { DonaBenService } from './donaben.service';
import { DonacionBeneficiario } from './donaben.entity';

@Controller('dona-beneficiario')
export class DonaBeneficiarioController {
  constructor(private readonly donabenService: DonaBenService) {}

  @Get()
  async obtenerTodos(): Promise<DonacionBeneficiario[]> {
    return await this.donabenService.obtenerTodos();
  }

  @Get(':id')
  async obtenerPorId(@Param('id', ParseIntPipe) id: number): Promise<DonacionBeneficiario> {
    return await this.donabenService.obtenerPorId(id);
  }

  @Post()
  async crear(@Body() data: Partial<DonacionBeneficiario>): Promise<DonacionBeneficiario> {
    return await this.donabenService.crear(data);
  }

  @Put(':id')
  async actualizar(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<DonacionBeneficiario>): Promise<DonacionBeneficiario> {
    return await this.donabenService.actualizar(id, data);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.donabenService.eliminar(id);
  }
}