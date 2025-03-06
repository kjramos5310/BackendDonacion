import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DonacionBeneficiario } from './donaben.entity';

@Injectable()
export class DonaBenService {
  constructor(
    @InjectRepository(DonacionBeneficiario)
    private readonly donabenRepository: Repository<DonacionBeneficiario>,
  ) {}

  async obtenerTodos(): Promise<DonacionBeneficiario[]> {
    return await this.donabenRepository.find({
      relations: ['beneficiario','donante'],
    });
  }
  

  async obtenerPorId(id: number): Promise<DonacionBeneficiario> {
    const usuarioRol = await this.donabenRepository.findOne({ 
      where: {id_donben: id},
      relations: ['beneficiario', 'donante']
    });
    if (!usuarioRol) {
      throw new NotFoundException(`UsuarioRol with id ${id} not found`);
    }
    return usuarioRol;
  }

  async crear(data: Partial<DonacionBeneficiario>): Promise<DonacionBeneficiario> {
    const usuarioRoltemp = this.donabenRepository.create(data);
    return await this.donabenRepository.save(usuarioRoltemp);
  }

  async actualizar(id: number, data: Partial<DonacionBeneficiario>): Promise<DonacionBeneficiario> {
    await this.donabenRepository.update(id, data);
    return this.obtenerPorId(id);
  }

  async eliminar(id: number): Promise<void> {
    const usuarioRol = await this.obtenerPorId(id);
    await this.donabenRepository.remove(usuarioRol);
  }
}