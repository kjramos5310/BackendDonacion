import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioRol } from './Usuario_Rol.entity';

@Injectable()
export class UsuarioRolService {
  constructor(
    @InjectRepository(UsuarioRol)
    private readonly usuarioRolRepository: Repository<UsuarioRol>,
  ) {}

  async obtenerTodos(): Promise<UsuarioRol[]> {
    return await this.usuarioRolRepository.find({
      relations: ['id_usuario', 'id_rol'],
    });
  }
  

  async obtenerPorId(id: number): Promise<UsuarioRol> {
    const usuarioRol = await this.usuarioRolRepository.findOne({ 
      where: {id_usuario_rol: id},
      relations: ['id_usuario', 'id_rol']
    });
    if (!usuarioRol) {
      throw new NotFoundException(`UsuarioRol with id ${id} not found`);
    }
    return usuarioRol;
  }

  async crear(data: Partial<UsuarioRol>): Promise<UsuarioRol> {
    const usuarioRoltemp = this.usuarioRolRepository.create(data);
    return await this.usuarioRolRepository.save(usuarioRoltemp);
  }

  async actualizar(id: number, data: Partial<UsuarioRol>): Promise<UsuarioRol> {
    await this.usuarioRolRepository.update(id, data);
    return this.obtenerPorId(id);
  }

  async eliminar(id: number): Promise<void> {
    const usuarioRol = await this.obtenerPorId(id);
    await this.usuarioRolRepository.remove(usuarioRol);
  }
}