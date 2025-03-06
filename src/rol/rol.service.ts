import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './rol.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ) {}

  async obtenerTodos(): Promise<Rol[]> {
    return this.rolRepository.find({relations: ['usuarioRoles']});
  }

  async obtenerPorId(id: number): Promise<Rol> {
    const roltemp = await this.rolRepository.findOne({
      where:{id_rol:id},
      relations: ['usuarioRoles']
    });
    if (!roltemp) {
      throw new NotFoundException(`Rol with id ${id} not found`);
    }
    return roltemp;
  }

  async crear(data: Partial<Rol>): Promise<Rol> {
    const roltemp = this.rolRepository.create(data);
    return this.rolRepository.save(roltemp);
  }

  async actualizar(id: number, data: Partial<Rol>): Promise<Rol> {
    await this.rolRepository.update(id, data);
    return this.obtenerPorId(id);
  }

  async eliminar(id: number): Promise<void> {
    const data = await this.obtenerPorId(id);
    await this.rolRepository.remove(data);
  }
}