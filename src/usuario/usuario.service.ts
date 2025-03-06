// usuario.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioRol } from '../Usuario_Rol/Usuario_Rol.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(UsuarioRol)
    private readonly usuarioRolRepository: Repository<UsuarioRol>,
  ) {}

  // Encontrar todos los usuarios, cargando también la relación 'id_empresa'
  async obtenerTodos(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      relations: ['usuarioRoles']  // Asegura que la relación 'id_empresa' esté incluida
    });
  }

  async obtenerPorId(id: number): Promise<Usuario> {
    const usuariotemp = await this.usuarioRepository.findOne({
      where: { id_usuario: id },
      relations: ['usuarioRoles']  // Cargar la relación al buscar un usuario individual
    });
    if (!usuariotemp) {
      throw new NotFoundException(`Usuario with id ${id} not found`);
    }
    return usuariotemp;
  }

  async crear(data: Partial<Usuario>): Promise<Usuario> {
    const user =  this.usuarioRepository.create(data);
    return await this.usuarioRepository.save(user);
  }

  async actualizar(id: number, data:Partial<Usuario>): Promise<Usuario> {
    await this.usuarioRepository.update(id, data);
    return this.obtenerPorId(id);
  }

  async eliminar(id: number): Promise<void> {
    const data = await this.obtenerPorId(id);
    await this.usuarioRepository.remove(data);
  }

  // async asignarRol(idUsuario: number, dataRol: Partial<UsuarioRol>): Promise<Usuario> {
  //   const usuariotemp = await this.obtenerPorId(idUsuario);
  //   const roltemp = this.usuarioRolRepository.create(dataRol);
  //   roltemp.id_usuario = usuariotemp;
  //   await this.usuarioRolRepository.save(roltemp);
  //   return this.obtenerPorId(idUsuario);
  // }
}
