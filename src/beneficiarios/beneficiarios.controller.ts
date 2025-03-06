import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { BeneficiarioService } from './beneficiarios.service';
import { Beneficiario } from './beneficiarios.entity';

@Controller('beneficiario')
export class BeneficiarioController {
  constructor(private readonly beneficiarioService: BeneficiarioService) {}

  @Get()
  async obtenerTodos(): Promise<Beneficiario[]> {
    return this.beneficiarioService.obtenerTodos();
  }

  @Get(':id')
  async ObtenerporId(@Param('id', ParseIntPipe) id: number): Promise<Beneficiario> {
    return await this.beneficiarioService.obtenerPorId(id);
  }

  @Post()
  async crear(@Body() data: Partial<Beneficiario>): Promise<Beneficiario> {
    return await this.beneficiarioService.crear(data);
  }

  @Put(':id')
  async actualizar(@Param('id', ParseIntPipe) id: number, @Body() data:Partial<Beneficiario>): Promise<Beneficiario>{
    return await this.beneficiarioService.actualizar(id, data);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.beneficiarioService.eliminar(id);
  }
}