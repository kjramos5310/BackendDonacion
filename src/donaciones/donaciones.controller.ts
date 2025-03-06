import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { DonanteService } from './donaciones.service';
import { Donante } from './donaciones.entity';

@Controller('donante')
export class DonanteController {
  constructor(private readonly donanteService: DonanteService) {}

  @Get()
  async obtenerTodos(): Promise<Donante[]> {
    return this.donanteService.obtenerTodos();
  }

  @Get(':id')
  async ObtenerporId(@Param('id', ParseIntPipe) id: number): Promise<Donante> {
    return await this.donanteService.obtenerPorId(id);
  }

  @Post()
  async crear(@Body() data: Partial<Donante>): Promise<Donante> {
    return await this.donanteService.crear(data);
  }

  @Put(':id')
  async actualizar(@Param('id', ParseIntPipe) id: number, @Body() data:Partial<Donante>): Promise<Donante>{
    return await this.donanteService.actualizar(id, data);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.donanteService.eliminar(id);
  }
}