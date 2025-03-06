// usuario.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { UsuarioRol } from '../Usuario_Rol/Usuario_Rol.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async obtenerTodos(): Promise<Usuario[]> {
    return this.usuarioService.obtenerTodos(); // No es necesario agregar más aquí si ya estás utilizando 'relations' en el servicio
  }

  @Get(':id')
  async ObtenerporId(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return await this.usuarioService.obtenerPorId(id);
  }

  @Post()
  async crear(@Body() data: Partial<Usuario>): Promise<Usuario> {
    return await this.usuarioService.crear(data);
  }

  @Put(':id')
  async actualizar(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Usuario>): Promise<Usuario> {
    return await this.usuarioService.actualizar(id, data);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.usuarioService.eliminar(id);
  }

}
