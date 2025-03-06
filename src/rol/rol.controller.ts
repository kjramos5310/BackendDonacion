import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { RolService } from './rol.service';
import { Rol } from './rol.entity';

@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Get()
  async obtenerTodos(): Promise<Rol[]> {
    return this.rolService.obtenerTodos();
  }

  @Get(':id')
  async ObtenerporId(@Param('id', ParseIntPipe) id: number): Promise<Rol> {
    return await this.rolService.obtenerPorId(id);
  }

  @Post()
  async crear(@Body() data: Partial<Rol>): Promise<Rol> {
    return await this.rolService.crear(data);
  }

  @Put(':id')
  async actualizar(@Param('id', ParseIntPipe) id: number, @Body() data:Partial<Rol>): Promise<Rol>{
    return await this.rolService.actualizar(id, data);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.rolService.eliminar(id);
  }
}