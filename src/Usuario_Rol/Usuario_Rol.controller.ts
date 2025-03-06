import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsuarioRolService } from './Usuario_Rol.service';
import { UsuarioRol } from './Usuario_Rol.entity';

@Controller('usuario-rol')
export class UsuarioRolController {
  constructor(private readonly usuarioRolService: UsuarioRolService) {}

  @Get()
  async obtenerTodos(): Promise<UsuarioRol[]> {
    return await this.usuarioRolService.obtenerTodos();
  }

  @Get(':id')
  async obtenerPorId(@Param('id', ParseIntPipe) id: number): Promise<UsuarioRol> {
    return await this.usuarioRolService.obtenerPorId(id);
  }

  @Post()
  async crear(@Body() data: Partial<UsuarioRol>): Promise<UsuarioRol> {
    return await this.usuarioRolService.crear(data);
  }

  @Put(':id')
  async actualizar(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<UsuarioRol>): Promise<UsuarioRol> {
    return await this.usuarioRolService.actualizar(id, data);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.usuarioRolService.eliminar(id);
  }
}